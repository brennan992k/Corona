import DashBoard from './DashBoard';
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
    return {
        all: state.all,
        country:state.country
    }
}

export default  connect(mapStateToProps, null)(DashBoard);