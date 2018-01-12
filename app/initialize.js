import ReactDOM from 'react-dom';
import React from 'react';
import App from 'components/App';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<Router><App /></Router>, document.querySelector('#app'));
});
