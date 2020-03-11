import {ERRORHISTORYDETAIL, SUCCESSHISTORYDETAIL, LOADINGHISTORYDETAIL} from '../types/historyDetail';

const nameInitialState = {
  error: null,
  loading: false,
  data: [],
};

export default historyDetailReducer = (state = nameInitialState, action) => {
  switch (action.type) {
    case LOADINGHISTORYDETAIL:
        return {...state, loading:true}
    case ERRORHISTORYDETAIL:
      return {...state, loading:false, error:action.error};
    case SUCCESSHISTORYDETAIL:
      return {...state, loading:false, data:action.data};
    default:
      return state;
  }
};
