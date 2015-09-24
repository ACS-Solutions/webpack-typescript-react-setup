import * as React from 'react';
var cssRequire = require<CssRequire>('../helpers/CssRequire.js');
var styles = cssRequire('Entry.css');

export interface Props {
  name: string;
}

export class Entry extends React.Component<Props, any> {
  render() {
    return (
      <div className={styles.Entry}>
        {this.props.name}
      </div>
    );
  }
}
