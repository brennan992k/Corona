import {combineReducers} from 'redux';

//reducer app
import tipReducer from './tip';
import newReducer from './new';
import countryReducer from './country';
import questionReducer from './questions';
import allReducer from './all';
import countryDetailReducer from './countryDetail';
import historyDetailReducer from './historyDetail';
import answerReducer from './answers';

export default reducers = combineReducers({
  tipStore: tipReducer,
  newStore: newReducer,
  country: countryReducer,
  question: questionReducer,
  all: allReducer,
  countryDetail: countryDetailReducer,
  historyDetail: historyDetailReducer,
  answer: answerReducer,
});
