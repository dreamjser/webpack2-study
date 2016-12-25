console.log('page');
require.ensure([], () => {
    let {top} = require('top');

    top.init();
  }, 'top');
