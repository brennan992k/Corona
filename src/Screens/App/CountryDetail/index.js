import CountryDetail from './CountryDetail';
import {connect} from 'react-redux';
import fetchCountryDetail from '../../../actions/countryDetail';
import fetchHistoryDetail from '../../../actions/historyDetail';

const mapStateToProps = (state) => {
  return {
    countryDetail: state.countryDetail,
    historyDetail: state.historyDetail,
  };
};

const mapDispatchToProps = (dispatch) => {
    return {
        updateCountryDetail: (param) => {
            dispatch(fetchCountryDetail(param));
        },
        updateHistoryDetail:(param)=>{
            dispatch(fetchHistoryDetail(param));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CountryDetail);
