import {ERRORTIP, SUCCESSTIP, LOADINGTIP} from '../types/tip';

export const loading = () => ({
  type: LOADINGTIP,
});

export const error = error => ({
  type: ERRORTIP,
  error: error,
});

export const success = data => ({
  type: SUCCESSTIP,
  data: data,
});

export default fetchTips = () => {
  return async dispatch => {
    try {
        await dispatch(loading());
        await fetch('https://brennanngo.herokuapp.com/tips').then(async (response)=>{
          if(response){
            return response.json();
          }else{
            await dispatch(error('Xin vui long thu lai sau'));
          }
        }).then(async(data)=>{
          if(data){
            if(data.status == 'ok') {
              await dispatch(success(data.result));
            }
            if(data.error){
              await dispatch(error(data.error));
            }
          }else{
            await dispatch(error('Xin vui long thu lai sau'));
          }
        })
    } catch(err){
       await dispatch(error(err));
    }
  };
};
