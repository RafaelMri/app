import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import {NavBar} from 'react-uikit3';
import {Sticky} from 'react-uikit3';

export default class Nav extends React.Component {
  render() {
    return (
      <Sticky>
        <NavBar>
          <div className="uk-navbar-left uk-margin-left">
            <Link to="/" className="uk-navbar-item uk-logo"><b>Trustlane</b>.me</Link>
          </div>
          <div className='uk-navbar-right uk-margin-right'>
            <ul className='uk-navbar-nav'>
              <li><Link to="/">About</Link></li>
              <li><Link to="/create">Create</Link></li>
            </ul>
          </div>
        </NavBar>
      </Sticky>
    );
  }
}
