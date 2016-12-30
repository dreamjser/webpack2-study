import {Component} from 'react';
import {render} from 'react-dom';
import {Router, Route, Link, IndexRoute, RouteHandler, StateMixin, hashHistory} from 'react-router';

class App extends Component{
  render(){
    return (
      <div>
        hello men ！
        {this.props.children}

      </div>
    )
  }
}

class Home extends Component{
  render(){
    return (
      <div>
        这是首页
      </div>
    )
  }
}

class List extends Component{
  render(){
    const id = this.props.location.query.id || '';

    console.log(this.props.location);
    return (
      <ul>
        <li>1: {id}</li>
        <li>2</li>
      </ul>
    )
  }
}


render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="/list(/:id)" component={List}/>
    </Route>
  </Router>
), document.getElementById('view'));
