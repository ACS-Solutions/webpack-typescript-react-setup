import * as React from 'react'
import { Router, Route, Link } from 'react-router'

import App from './modules/App'
import About from './modules/About'
import Users from './modules/Users'
import User from './modules/User'

var createHistory:any = require('history/lib/createHashHistory');

React.render((
  <Router history={createHistory({queryKey:false})}>
    <Route path="/" component={App}>
      <Route path="about" component={About}></Route>
      <Route path="users" component={Users}>
        <Route path=":userId" component={User}></Route>
      </Route>
    </Route>
  </Router>
), document.body);
