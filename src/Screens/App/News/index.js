import News from './News';
import {connect} from 'react-redux';
import fetchNews from '../../../actions/new';

const mapStateToProps = state => {
  return {
    news: state.newStore,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchNews: (page, keySearch) => {
      dispatch(fetchNews(page, keySearch));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(News);
