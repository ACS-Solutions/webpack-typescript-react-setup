import * as React from 'react';
var cssRequire = require<CssRequire>('../helpers/CssRequire.js');

interface Props {
  name: string;
}

export default class BaseModule extends React.Component<Props, any> {
  protected getStyles(stylesheet:string):any {
    return cssRequire(stylesheet);
  }

  render() {
    return (
      <div></div>
    );
  }
}
