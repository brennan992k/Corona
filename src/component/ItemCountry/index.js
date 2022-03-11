import ItemCountry from './ItemCountry';
import {connect} from 'react-redux';
import fetchCountryDetail from '../../actions/countryDetail';
import fetchHistoryDetail from '../../actions/historyDetail';

const mapDispatchToProps = dispatch => {
  return {
    fetchCountryInfo: param => {
      dispatch(fetchCountryDetail(param));
      dispatch(fetchHistoryDetail(param));
    },
  };
};

export default connect(null, mapDispatchToProps)(ItemCountry);
