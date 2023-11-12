var jefit = require('../index.js');
var config = require('./config.example.json');

jefit.fetchSingleDate(config.username, '2022-07-28', function (error, result) {
  console.log(JSON.stringify(result, null, 2));
});

jefit.fetchSingleDate(config.username, '2022-10-10', function (error, result) {
  console.log(JSON.stringify(result, null, 2));
});

jefit.fetchSingleDate(config.username, '2023-11-12', function (error, result) {
  console.log(JSON.stringify(result, null, 2));
});
