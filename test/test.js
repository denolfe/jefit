var jefit = require('../index.js');
var config = require('./config.json');

jefit.fetchSingleDate(config.userId, '2013-06-14', function (result) {
  console.log(result);
});

jefit.fetchSingleDate(config.userId, '2014-01-13', function (result) {
  console.log(result);
});

jefit.fetchSingleDate(config.userId, '2015-08-03', function (result) {
  console.log(JSON.stringify(result));
});
