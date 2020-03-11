import {ADDANSWERS, ADDINFOUSER, REFRESHANSWERS} from '../types/answers';

const nameInitialState = {
  answers: {},
  phone: null,
  address: null,
  userName: null,
};
export default answerReducer = (state = nameInitialState, action) => {
  switch (action.type) {
    case REFRESHANSWERS:
      return {
        ...state,
        answers: {},
        phone: null,
        address: null,
        userName: null,
      };
    case ADDINFOUSER:
      return {...state, ...action.userInfo};
    case ADDANSWERS:
      const newList = state.answers;
      newList[action.answer.questionId] = action.answer;
      return {...state, answers: newList};
    default:
      return state;
  }
};
