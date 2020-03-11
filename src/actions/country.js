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

export default fetchCountries = (sort='deaths') => {
  return async dispatch => {
    try {
      await dispatch(loading());
      await fetch(`https://corona.lmao.ninja/countries?sort=${sort}`).then(
        async response => {
          if (response) {
            return response.json();
          } else {
            await fetch('http://api.coronastatistics.live/countries').then(async (response)=>{
              if(response){
                return response.json();
              }else{
                await dispatch(error('Xin vui lòng thử lại sau!'));
              }
            })
          }
        },
      ).then(async (data)=>{
        if(data){
          await  dispatch(success(data));
        }else{
          await dispatch(error('Xin vui lòng thử lại'));
        }
      })
    } catch (err) {
      await dispatch(error(err));
    }
  };
};
