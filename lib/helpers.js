'use strict';

var request = require('request');
var cheerio = require('cheerio');

var jfUrl = function(userId) {
  if (!/^[0-9]+$/.test(userId)) throw new Error("User ID must only contains numbers");
  return 'https://www.jefit.com/' + userId;
};

var jfLogUrl = function(userId, date) {
  if (!/^[0-9]+$/.test(userId)) throw new Error("User ID must only contains numbers");

  var baseUrl = 'https://www.jefit.com/members/user-logs/log/?xid=';
  var formattedDate = '&dd=' + formatDate(new Date(date));
  var output = baseUrl + userId + formattedDate;

  return output;
}

var formatDate = function(dateObject) {
    if (dateObject.constructor !== Date) throw new Error("argument must be a valid JavaScript Date object");
    var str = dateObject.getFullYear() + '-';

    //add month to str
    if ( (dateObject.getMonth() + 1) < 10) {
      str += '0' + (dateObject.getMonth() + 1);
    } else {
      str += (dateObject.getMonth() + 1);
    }

    str += '-';

    //add day to str
    if (dateObject.getUTCDate() < 10) {
      str += '0' + dateObject.getUTCDate();
    } else {
      str += dateObject.getUTCDate();
    }

    return str;
};

function camelize(str) {
  return str.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function(match, index) {
    if (+match === 0) return ""; // or if (/\s+/.test(match)) for white spaces
    return index == 0 ? match.toLowerCase() : match.toUpperCase();
  });
}

function convertToSeconds(time) {
  var a = time.split(':');
  return (+a[0]) * 60 * 60 + (+a[1]) * 60 + (+a[2]);
}

module.exports = {
  jfUrl: jfUrl,
  jfLogUrl: jfLogUrl,
  camelize: camelize,
  convertToSeconds: convertToSeconds
};