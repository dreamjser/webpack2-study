document.body.onclick = function(){
  require.ensure([], () => {
    let {mask} = require('mask');

    mask.init();
  }, 'mask');
}


