import Home from './Home';
import {connect} from 'react-redux';
import fetchTips from '../../../actions/tip';

const mapStateToProps = state => {
  return {
    tip: state.tipStore,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchTips: () => {
      dispatch(fetchTips());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
