import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './state/store';

import App from 'components/App';

if (module && module.hot) {
  module.hot.accept();
}

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
