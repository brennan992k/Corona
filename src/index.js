import React from 'react';
import App from './Screens';
import storeApp from './storeApp';
import {Provider} from 'react-redux';

export default () => {
  storeApp.subscribe(()=>{
    console.log(storeApp.getState());
  })

  return (
    <Provider store={storeApp}>
      <App />
    </Provider>
  );
};
