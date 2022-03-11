/* eslint-disable no-undef */
import {API_ANSWERS} from '../config';
import {ADDANSWERS, ADDINFOUSER, REFRESHANSWERS} from '../types/answers';

export const addUserInfo = data => ({
  type: ADDINFOUSER,
  userInfo: data,
});
export const addAnswers = data => ({
  type: ADDANSWERS,
  answer: data,
});

export const refresh = () => ({
  type: REFRESHANSWERS,
});

export default sendAnswers = data => {
  return async dispatch => {
    try {
      await fetch(API_ANSWERS, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then(response => {
          return response.json();
        })
        .then(data => {});
    } catch (err) {
      console.log(err);
    }
  };
};
