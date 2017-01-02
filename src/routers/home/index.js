import React, { Component } from 'react';
import {Link} from 'react-router';
import Like from 'component/like';

class Home extends Component {
  render() {
    return (
      <div>
        hello home.
        <Like name="app" />
        <Link to="/list">list</Link>
        {this.props.children}
      </div>
    )
  }
}

module.exports = Home;
