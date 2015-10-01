import * as React from 'react';
import { Router, Route, Link } from 'react-router'
import { Props as BaseProps, BaseModule} from './BaseModule';

interface Props extends BaseProps {
  name: string;
}

export default class About extends BaseModule<Props, any> {
  render() {
    var styles:any = this.getStyles('About.css');

    return (
      <div className={styles.copy}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
    );
  }
}
