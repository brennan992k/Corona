import {ERRORCOUNTRY, SUCCESSCOUNTRY, LOADINGCOUNTRY} from '../types/country';

const nameInitialState = {
  error: null,
  loading: false,
  data: [],
};

export default countryReducer = (state = nameInitialState, action) => {
  switch (action.type) {
    case LOADINGCOUNTRY:
        return {...state, loading:true}
    case ERRORCOUNTRY:
      return {...state, loading:false, error:action.error};
    case SUCCESSCOUNTRY:
      return {...state, loading:false, data:action.data};
    default:
      return state;
  }
};
