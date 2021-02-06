import React from 'react';
import ReactDOM from 'react-dom';

import {AppComponent} from './components/App';

ReactDOM.render(
  <React.StrictMode>
    <AppComponent/>
  </React.StrictMode>,
  document.getElementById('root')
);

// @ts-ignore
if (import.meta.hot) {
  // @ts-ignore
  import.meta.hot.accept();
}
