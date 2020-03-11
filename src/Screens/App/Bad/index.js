import Bad from './Bad';
import {connect} from 'react-redux';
import fetchQuestions from '../../../actions/questions';
import {addAnswers, refresh} from '../../../actions/answers';


const mapStateToProps = (state) => {
    return {
        question: state.question,
        answerOfUsers:state.answer.answers,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchQuestions: () => {
            dispatch(fetchQuestions())
        },
        addAnswers: (answers) =>{
            dispatch(addAnswers(answers));
        },
        refreshAnswerOfUser:()=>{
            dispatch(refresh());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Bad)