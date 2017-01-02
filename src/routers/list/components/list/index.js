import './index.scss';

import {Component} from 'react';
import {Link} from 'react-router';
import Like from 'component/like';

class List extends Component{
  render(){
    return (
      <div>
        <Like name="就很好"/>
        <ul className="list">
          <li><Link to="detail/1">1</Link></li>
          <li><Link to="detail/2">2</Link></li>
        </ul>
      </div>

    )
  }
}

module.exports = List;
