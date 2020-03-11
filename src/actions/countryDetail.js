import {ERRORCOUNTRYDETAIL, SUCCESSCOUNTRYDETAIL, LOADINGCOUNTRYDETAIL} from '../types/countryDetail';

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
export default fetchCountryDetail = (param) => {
  return async dispatch => {
    try {
      await dispatch(loading());
      await fetch(`https://corona.lmao.ninja/countries/${param}`).then(
        async response => {
          if (response) {
            return response.json();
          } else {
            await fetch(`http://api.coronastatistics.live/countries/${param}`).then(async (response)=>{
              if(response){
                return response.json();
              }else{
                await dispatch(error('Xin vui lòng thử lại sau!'));
              }
            })
          }
        },
      ).then(async (data)=>{
        console.log(data);
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
