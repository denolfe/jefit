'use strict';

var request = require('request');
var cheerio = require('cheerio');
var helpers = require('./helpers');
var fetchSingleDate = require('./fetchSingleDate.js');

var fetchMostRecent = function (username, callback) {

  var currentMonth = new Date().getUTCMonth() + 1;
  var currentYear = new Date().getUTCFullYear();

  var monthUrl = 'https://www.jefit.com/members/user-logs/?xid=' + username + '&yy=' + currentYear + '&mm=' + currentMonth;

  request(monthUrl, function (error, response, body) {
    if (error) throw error;

    var $ = cheerio.load(body);

    var dayList = [];
    var patt = /[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$/;

    $('.calenderDay > a > img').parent().each(function (index, day) {
      var $day = $(day).attr('href').match(patt)[0];
      dayList.push($day);
    });
    fetchSingleDate(username, dayList[dayList.length - 1], function (error, result) {
      // console.log(result);
      // console.log(JSON.stringify(result, null, 2));
      callback(error, result);
    });
  });
};

module.exports = fetchMostRecent;