var jefit = require('../index.js');
var config = require('./config.json');

jefit.fetchMostRecent(config.username, function (result) {
  console.log(JSON.stringify(result, null, 2));

});