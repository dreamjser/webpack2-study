let app = {};

document.body.onclick = function(){
  require.ensure([], function(){
    var app = require('../modules/asyn');

    app.default.init();
  });
}


module.exports = app;
