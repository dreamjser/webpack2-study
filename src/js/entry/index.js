document.body.onclick = function(){
  System.import('mask')
    .then(({mask}) => mask.init());
}


