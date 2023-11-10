var jefit = require('../index.js');
var config = require('./config.example.json');

jefit.fetchSingleDate(config.username, '2013-06-14', function (error, result) {
  console.log(JSON.stringify(result, null, 2));
});

jefit.fetchSingleDate(config.username, '2014-01-12', function (error, result) {
  console.log(JSON.stringify(result, null, 2));
});

jefit.fetchSingleDate(config.username, '2015-08-03', function (error, result) {
  console.log(JSON.stringify(result, null, 2));
});
