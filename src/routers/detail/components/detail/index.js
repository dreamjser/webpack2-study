import './index.scss';

import {Component} from 'react';
import {Link} from 'react-router';

class Detail extends Component{
  render(){
    return (
      <div className="detail">{this.props.params.id}</div>
    )
  }
}

module.exports = Detail;
