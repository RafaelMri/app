import React from 'react';
import Nav from './Nav';
import Create from './Create';
import Sign from './Sign';

import {
  Route,
  Link,
  Switch
} from 'react-router-dom'

import {Grid} from 'react-uikit3';

export default class App extends React.Component {
  render() {
    return (
      <div>

        <Nav />

        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/create" component={Create}/>
          <Route path="/:id" component={Sign}/>
        </Switch>

      </div>
    );
  }
}

const Home = () => (
  <div className='container uk-padding uk-light'>
      <h2>About</h2>
      <p>Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Sed posuere consectetur est at lobortis. Aenean lacinia bibendum nulla sed consectetur. Nullam quis risus eget urna mollis ornare vel eu leo.</p>
  </div>
)
