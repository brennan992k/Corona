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
        `https://newsapi.org/v2/everything?q=${keySearch}&sortBy=publishedAt&apiKey=1c12afe4673c4564a0da6ab618ef4a74&pageSize=10&page=${page}`,
      )
        .then(async response => {
          if (response) {
            return response.json();
          } else {
            await dispatch(error(''));
          }
        })
        .then(async data => {
          console.log(data);
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
