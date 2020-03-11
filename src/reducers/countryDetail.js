import {ERRORCOUNTRYDETAIL, SUCCESSCOUNTRYDETAIL, LOADINGCOUNTRYDETAIL} from '../types/countryDetail';

const nameInitialState = {
  error: null,
  loading: false,
  data: [],
};

export default countryDetailReducer = (state = nameInitialState, action) => {
  switch (action.type) {
    case LOADINGCOUNTRYDETAIL:
        return {...state, loading:true}
    case ERRORCOUNTRYDETAIL:
      return {...state, loading:false, error:action.error};
    case SUCCESSCOUNTRYDETAIL:
      return {...state, loading:false, data:action.data};
    default:
      return state;
  }
};
