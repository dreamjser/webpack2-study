let app = {};

document.body.onclick = function(){
  System.import('../modules/asyn').then((asyn) => asyn.default.init())
}


module.exports = app;
