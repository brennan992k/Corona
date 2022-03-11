import React from 'react';
import App from './Screens';
import storeApp from './storeApp';
import {Provider} from 'react-redux';

export default () => {
  return (
    <Provider store={storeApp}>
      <App />
    </Provider>
  );
};
