import Tip from './Tip';
import {connect} from 'react-redux';

const mapStateToProps = state => {
  return {
    tip: state.tipStore,
  };
};

export default connect(mapStateToProps, null)(Tip);
