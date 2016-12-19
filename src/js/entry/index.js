document.body.onclick = function(){
  System.import('mask')
    .then((mask) => mask.default.init());
  console.log(11);
}


