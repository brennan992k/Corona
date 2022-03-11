import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

const storeApp = createStore(reducers, applyMiddleware(thunk));

export default storeApp;
