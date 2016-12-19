let app = {};

document.body.onclick = function(){
  System.import('mask').then((mask) => mask.default.init())
}


module.exports = app;
