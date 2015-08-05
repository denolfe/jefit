'use strict';

var request = require('request');
var cheerio = require('cheerio');
var helpers = require('./helpers');

var fetchSingleDate = function(userId, date, callback) {

  var url = helpers.jfUrl(userId);
   //console.log(url);
  var logUrl = helpers.jfLogUrl(userId, date);
   //console.log(logUrl);

  var workout = {
    exercises: []
  };

  request(logUrl, function(error, response, body) {
    if (error) throw error;

    var $ = cheerio.load(body);

    $('.workout-session > div').each(function(index, row) {
      var $row = $(row);

      $row.find('div').each(function(index2, col) {
        var $col = $(col);
        
        var key = helpers.camelize($col.find('div:nth-child(2)').find('div:nth-child(1)').text());
        var val = $col.find('div:nth-child(2)').find('div:nth-child(2)').text().trim();

        if (key.length === 0 || val.length === 0) return

        workout.date = date;

        // Convert time to seconds, else match numbers
        if (val.indexOf(':') !== -1) {
          workout[key] = helpers.convertToSeconds(val);
        }
        else
          workout[key] = Number(val.match(/\d+/)[0]);
      });
    });

    $('.fixedLogBar').each(function(index, exercise) {
        var $exercise = $(exercise);

        var exercise = {
          sets: []
        };

        $exercise.find('.fixedLogBarBlock').each(function(index, exAttr) {
          var $exAttr = $(exAttr).text().trim();

          if (index === 0) return; // exercise image

          if (index === 1) {
            exercise.name = $exAttr
          }
          else if (index === 2) {
            exercise.oneRepMax = Number($exAttr);
          }
          else if (index === 3) {
            var setMatches = $exAttr.match(/(\d+)\s\:\s([\S]+)/g)
            // console.log('setMatches: ' + setMatches);
            if (setMatches !== null) {
              setMatches.forEach(function(setLine, index) {
                // if (exercise.name === "Dumbbell Bench Press") {
                //   console.log(setLine);
                //   console.log(/(\d)\s?\:?\s?(\d+?\.?\d?)x(\d+)/.test(setLine));
                // }
                var set = {};
                if (/(\d)\s?\:?\s?(\d+?\.?\d?)x(\d+)/.test(setLine)) {
                  var setLineMatches = setLine.match(/(\d)\s?\:?\s?(\d+?\.?\d?)x(\d+)/);
                  set.index = Number(setLineMatches[1]);
                  set.weight = Number(setLineMatches[2]);
                  set.reps = Number(setLineMatches[3]);
                  exercise.type = "Lift";
                } else if (/\d+:\d+:\d+/.test(setLine)) {
                  var setLineMatches = setLine.match(/(\d)\s?\:?\s?(\d+:\d+:\d+)/);
                  // console.log(setLineMatches);
                  set.index = Number(setLineMatches[1]);
                  set.duration = helpers.convertToSeconds(setLineMatches[2]);
                  exercise.type = "Duration";
                } else { 
                  var setLineMatches = setLine.match(/(\d)\s?\:?\s?(\d+)/);
                  // console.log(setLineMatches);
                  set.index = Number(setLineMatches[1]);
                  set.reps = Number(setLineMatches[2]);
                  exercise.type = "Bodyweight";
                }
                exercise.sets.push(set);
              });
              
            } else { // Cardio
              // Look for Duration, add more later
              var duration = $exAttr.match(/(\d+:\d+:\d+)/);
              var set = {
                index: 1,
                duration: helpers.convertToSeconds(duration[0])
              }
              exercise.type = "Cardio";
              exercise.sets.push(set);
            }
          }
        });
        workout.exercises.push(exercise);
    });

    // console.log(JSON.stringify(workout, null, 2));
    callback(workout);
  });
};

module.exports = fetchSingleDate;
