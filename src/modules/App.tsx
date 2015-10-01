import * as React from 'react';
import { Router, Route, Link } from 'react-router'
import { Props as BaseProps, BaseModule} from './BaseModule';

interface Props extends BaseProps {
  name: string;
}

export default class App extends BaseModule<Props, any> {
  render() {
    var styles:any = this.getStyles('App.css');

    return (
      <div className={styles.Chrome}>
        <nav className={styles.TopNav}>
          <ul>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
        <div className={styles.Content}>
          {this.props.children}
        </div>
      </div>
    );
  }
}
