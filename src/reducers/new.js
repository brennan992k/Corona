import {ERRORNEW, SUCCESSNEW, LOADINGNEW} from '../types/new';

const nameInitialState = {
  error: null,
  loading: false,
  data: [],
};

export default newReducer = (state = nameInitialState, action) => {
  switch (action.type) {
    case LOADINGNEW:
      return {...state, loading: true};
    case ERRORNEW:
      return {...state, loading: false, error: action.error};
    case SUCCESSNEW:
      if (action.page == 1) {
        return {
          ...state,
          loading: false,
          data: action.data,
        };
      }
      return {
        ...state,
        loading: false,
        data: [...state.data, ...action.data],
      };
    default:
      return state;
  }
};
