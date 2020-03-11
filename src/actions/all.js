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
      await fetch('https://corona.lmao.ninja/all')
        .then(async response => {
          if (response) {
            return response.json();
          } else {
            fetch('http://api.coronastatistics.live/all').then(
              async response => {
                if (response) {
                  return response.json();
                }
              },
            );
          }
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
