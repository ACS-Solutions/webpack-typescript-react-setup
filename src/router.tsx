import * as React from 'react'
import { Router, Route, Link } from 'react-router'

import App from './modules/App'
import About from './modules/About'
import Users from './modules/Users'
import User from './modules/User'

// var createBrowserHistory:any = require('history/lib/createBrowserHistory');

React.render((
  <Router>
    <Route path="/" component={App}>
      <Route path="about" component={About}></Route>
      <Route path="users" component={Users}>
        <Route path=":userId" component={User}></Route>
      </Route>
    </Route>
  </Router>
), document.body);
