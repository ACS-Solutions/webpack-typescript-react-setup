import * as React from 'react'
import { Router, Route, Link } from 'react-router'
import App from './modules/App'
import About from './modules/About'
import Contact from './modules/Contact'

var cssRequire = require<CssRequire>('./helpers/CssRequire.js');

var css = cssRequire('global.base.css');

React.render((
  <Router>
    <Route path="/" component={App}>
      <Route path="about" component={About}></Route>
      <Route path="contact" component={Contact}></Route>
    </Route>
  </Router>
), document.body);
