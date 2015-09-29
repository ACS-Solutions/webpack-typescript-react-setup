import * as React from 'react';
import BaseModule from './BaseModule';


interface Props {
  name: string;
}

export default class Exit extends BaseModule {
  render() {
    var styles:any = this.getStyles('Exit.css');

    return (
      <div className={styles.Entry}>
        {this.props.name}
      </div>
    );
  }
}
