import React from 'react';
import {render} from 'react-dom';
import {Router, browserHistory} from 'react-router';

const rootRoute = {
  childRoutes: [{
    path: '/',
    component: require('router/home'),
    childRoutes: [
      require('router/list'),
      require('router/detail'),
    ]
  }]
}

render((
  <Router
    history={browserHistory}
    routes={rootRoute}
  />
), document.getElementById('view'));
