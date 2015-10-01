import * as React from 'react';
import { Router, Route, Link } from 'react-router'
import { Props as BaseProps, BaseModule} from './BaseModule';
import '../css/base.global.css';


interface Props extends BaseProps {
  name: string;
}

export default class App extends BaseModule<Props, any> {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="Chrome">
        <nav className="TopNav">
          <ul>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/users">Users</Link></li>
          </ul>
        </nav>
        <div className="Content">
          {this.props.children}
        </div>
      </div>
    );
  }
}
