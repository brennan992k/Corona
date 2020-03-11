import {ERRORHISTORYDETAIL, SUCCESSHISTORYDETAIL, LOADINGHISTORYDETAIL} from '../types/historyDetail';

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
export default fetchHistoryDetail = (param) => {
  return async dispatch => {
    try {
      await dispatch(loading());
      await fetch(`https://corona.lmao.ninja/v2/historical/${param}`).then(
        async response => {
          if (response) {
            return response.json();
          } else {
            await fetch(`https://corona.lmao.ninja/v2/historical/${param}`).then(async (response)=>{
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
