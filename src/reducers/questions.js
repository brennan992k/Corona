import {ERRORQUESTIONS, SUCCESSQUESTIONS, LOADINGQUESTIONS} from '../types/questions';

const nameInitialState = {
  error: null,
  loading: false,
  data: [],
};

export default questionReducer = (state = nameInitialState, action) => {
  switch (action.type) {
    case LOADINGQUESTIONS:
        return {...state, loading:true}
    case ERRORQUESTIONS:
      return {...state, loading:false, error:action.error};
    case SUCCESSQUESTIONS:
      return {...state, loading:false, data:action.data};
    default:
      return state;
  }
};
