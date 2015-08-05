'use strict';

var request = require('request');
var cheerio = require('cheerio');
var fetchSingleDate = require('./lib/fetchSingleDate.js');
var fetchMostRecent = require('./lib/fetchMostRecent.js');

module.exports = {
  fetchSingleDate: fetchSingleDate,
  fetchMostRecent: fetchMostRecent
};