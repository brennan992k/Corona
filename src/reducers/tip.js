import {ERRORTIP, SUCCESSTIP, LOADINGTIP} from '../types/tip';

const nameInitialState = {
  error: null,
  loading: false,
  data: [],
};

export default tipReducer = (state = nameInitialState, action) => {
  switch (action.type) {
    case LOADINGTIP:
        return {...state, loading:true}
    case ERRORTIP:
      return {...state, loading:false, error:action.error};
    case SUCCESSTIP:
      return {...state, loading:false, data:action.data};
    default:
      return state;
  }
};
