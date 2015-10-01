import * as React from 'react';
var cssRequire = require<CssRequire>('../helpers/CssRequire.js');

export interface Props extends React.Props<any> {
  name: string;
}

export class BaseModule<P extends Props, S> extends React.Component<P, any> {
  protected getStyles(stylesheet:string):any {
    return cssRequire(stylesheet);
  }

  render() {
    return (
      <div></div>
    );
  }
}
