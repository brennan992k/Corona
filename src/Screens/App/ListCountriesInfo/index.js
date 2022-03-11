import ListCountryInfo from './ListCountriesInfo';
import {connect} from 'react-redux';
import fetchCountries from '../../../actions/country';

const mapStateToProps = state => {
  return {
    country: state.country,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchCountries: sort => {
      dispatch(fetchCountries(sort));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListCountryInfo);
