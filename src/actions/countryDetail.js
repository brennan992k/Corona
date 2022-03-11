/* eslint-disable no-undef */
import {API_COUNTRIES} from '../config';
import {
  ERRORCOUNTRYDETAIL,
  SUCCESSCOUNTRYDETAIL,
  LOADINGCOUNTRYDETAIL,
} from '../types/countryDetail';

export const loading = () => ({
  type: LOADINGCOUNTRYDETAIL,
});

export const error = error => ({
  type: ERRORCOUNTRYDETAIL,
  error: error,
});

export const success = data => ({
  type: SUCCESSCOUNTRYDETAIL,
  data: data,
});

//params can countryName, countryId, IOS2, IOS3
export default fetchCountryDetail = param => {
  return async dispatch => {
    try {
      await dispatch(loading());
      await fetch(`${API_COUNTRIES}/${param}`)
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
