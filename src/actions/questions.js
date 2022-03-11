/* eslint-disable no-undef */
import {API_QUESTIONS} from '../config';
import {
  ERRORQUESTIONS,
  SUCCESSQUESTIONS,
  LOADINGQUESTIONS,
} from '../types/questions';

export const loading = () => ({
  type: LOADINGQUESTIONS,
});

export const error = error => ({
  type: ERRORQUESTIONS,
  error: error,
});

export const success = data => ({
  type: SUCCESSQUESTIONS,
  data: data,
});

export default fetchQuestions = () => {
  return async dispatch => {
    try {
      await dispatch(loading());
      await fetch(API_QUESTIONS)
        .then(async response => {
          if (response) {
            return response.json();
          } else {
            await dispatch(error(''));
          }
        })
        .then(async data => {
          if (data) {
            if (data.status == 'ok') {
              await dispatch(success(data.result));
            }
            if (data.error) {
              await dispatch(error(data.error));
            }
          } else {
            await dispatch(error('Xin vui lòng thử lại'));
          }
        });
    } catch (err) {
      await dispatch(error(err));
    }
  };
};
