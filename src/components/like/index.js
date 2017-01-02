import './index.scss';

import {Component} from 'react';

class Like extends Component{
  render(){
    return <div className="component-like">{this.props.name}</div>
  }
}

export default Like;
