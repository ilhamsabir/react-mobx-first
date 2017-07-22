import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'mobx-react';
import Main from './Main.jsx';
import stores from './stores/index.jsx';

ReactDOM.render(
    <Provider {...stores}>
      <Main/>
    </Provider>
  ,document.getElementById('app')
);
