/* eslint-disable no-undef */
import {API_ALL} from '../config';
import {ERRORALL, SUCCESSALL, LOADINGALL} from '../types/all';

export const loading = () => ({
  type: LOADINGALL,
});

export const error = error => ({
  type: ERRORALL,
  error: error,
});

export const success = data => ({
  type: SUCCESSALL,
  data: data,
});

export default fetchAll = () => {
  return async dispatch => {
    try {
      await dispatch(loading());
      await fetch(API_ALL)
        .then(async response => {
          return response.json();
        })
        .then(async data => {
          if (data) {
            await dispatch(success(data));
          } else {
            await dispatch(error('Try again, please!'));
          }
        })
        .catch(async err => {
          await dispatch(error(err));
        });
    } catch (err) {
      await dispatch(error(err));
    }
  };
};
