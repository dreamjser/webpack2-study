document.body.onclick = function(){
  require.ensure([], () => {
    let {mask} = require('mask');

    mask.init();
  }, 'mask');
}


require.ensure([], () => {
    let {top} = require('top');

    top.init();
  }, 'top');
