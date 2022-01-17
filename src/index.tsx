/**
 * @format
 */

import App from './app/App';
import store from './app/store';
import './commons/i18n';
import React from 'react';
import { Provider } from 'react-redux';

const MainApp = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

export default MainApp;
