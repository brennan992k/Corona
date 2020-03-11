import TabBarBottom from './TabBarBottom';
import {connect} from 'react-redux';
import fetchAll from '../../actions/all';
import fetchCountries from '../../actions/country';


const mapDispatchToProps = (dispatch) => {
  return {
    fetchAll: () => {
      dispatch(fetchAll());
    },
    fetchCountries: ()=>{
      dispatch(fetchCountries());
    }
  }
}

export default connect(null, mapDispatchToProps)(TabBarBottom)