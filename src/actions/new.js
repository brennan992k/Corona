/* eslint-disable no-undef */
import {API_NEWS, GOOGLE_API_KEY} from '../config';
import {ERRORNEW, SUCCESSNEW, LOADINGNEW} from '../types/new';

export const loading = () => ({
  type: LOADINGNEW,
});

export const error = error => ({
  type: ERRORNEW,
  error: error,
});

export const success = (data, page) => ({
  type: SUCCESSNEW,
  data: data,
  page: page,
});

export default fetchNews = (page, keySearch = 'COVID') => {
  return async dispatch => {
    try {
      await dispatch(loading());
      await fetch(
        `${API_NEWS}?q=${keySearch}&sortBy=publishedAt&apiKey=${GOOGLE_API_KEY}&pageSize=10&page=${page}`,
      )
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
              await dispatch(success(data.articles, page));
            }
            if (data.status == 'error') {
              await dispatch(error(data.message));
            }
          } else {
            await dispatch(error(''));
          }
        });
    } catch (err) {
      await dispatch(error(err));
    }
  };
};
