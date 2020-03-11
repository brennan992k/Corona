import UserInfo from './UserInfo';
import {connect} from 'react-redux';
import sendAnswers, {addUserInfo} from '../../../actions/answers';

const mapStateToProps = state => {
  return {
    answers: Object.values(state.answer.answers),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    sendAnswers: data => {
      dispatch(sendAnswers(data));
    },
    addUserInfo: data => {
      dispatch(addUserInfo(data));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserInfo);
