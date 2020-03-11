import {ERRORALL, SUCCESSALL, LOADINGALL} from '../types/all';

const nameInitialState = {
  error: null,
  loading: false,
  data: {},
};

export default countryReducer = (state = nameInitialState, action) => {
  switch (action.type) {
    case LOADINGALL:
        return {...state, loading:true}
    case ERRORALL:
      return {...state, loading:false, error:action.error};
    case SUCCESSALL:
      return {...state, loading:false, data:action.data};
    default:
      return state;
  }
};
