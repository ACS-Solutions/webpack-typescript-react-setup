//import * as React from 'react';
import * as React from 'react';
import Entry from './modules/Entry.tsx';
import Exit from './modules/Exit.tsx';

React.render(
  <div>
    <Entry name="Hello World!" />
    <Exit name="Goodbye World!" />
  </div>,
  document.getElementById('content')
);
