import * as React from 'react';
import { Router, Route, Link } from 'react-router'
import { Props as BaseProps, BaseModule} from './BaseModule';

interface Props extends BaseProps {
  name: string;
}

export default class User extends BaseModule<Props, any> {
  render() {
    var styles:any = this.getStyles('modules/User.css');

    return (
      <div className={styles.title}>{this.props.params.userId}</div>
    );
  }
}
