/* eslint-disable no-undef */
import {API_COUNTRIES} from '../config';
import {ERRORCOUNTRY, SUCCESSCOUNTRY, LOADINGCOUNTRY} from '../types/country';

export const loading = () => ({
  type: LOADINGCOUNTRY,
});

export const error = error => ({
  type: ERRORCOUNTRY,
  error: error,
});

export const success = data => ({
  type: SUCCESSCOUNTRY,
  data: data,
});

export default fetchCountries = (sort = 'deaths') => {
  return async dispatch => {
    try {
      await dispatch(loading());
      await fetch(`${API_COUNTRIES}?sort=${sort}`)
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
