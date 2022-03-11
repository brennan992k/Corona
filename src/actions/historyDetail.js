/* eslint-disable no-undef */
import { API_HISTORIES } from '../config';
import {
  ERRORHISTORYDETAIL,
  SUCCESSHISTORYDETAIL,
  LOADINGHISTORYDETAIL,
} from '../types/historyDetail';

export const loading = () => ({
  type: LOADINGHISTORYDETAIL,
});

export const error = error => ({
  type: ERRORHISTORYDETAIL,
  error: error,
});

export const success = data => ({
  type: SUCCESSHISTORYDETAIL,
  data: data,
});

//params can historyName, historyId, IOS2, IOS3
export default fetchHistoryDetail = param => {
  return async dispatch => {
    try {
      await dispatch(loading());
      await fetch(`${API_HISTORIES}/${param}`)
        .then(async response => {
          return response.json();
        })
        .then(async data => {
          if (data) {
            await dispatch(success(data));
          } else {
            await dispatch(error('Xin vui lòng thử lại'));
          }
        });
    } catch (err) {
      await dispatch(error(err));
    }
  };
};
