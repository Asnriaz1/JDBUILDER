import { connect } from "react-redux";
import startCollaboration from "./component";
import {
    textFieldChangeHandler,
    saveAddedCollaborators
} from "../actions";
import ls from 'local-storage';

const mapStateToProps = state => ({
   
})

const mapDispatchToProps = (dispatch, props) => ({
   
})

const mergeProps = (stateProps, dispatchProps, ownProps) => ({
    ...stateProps,
    ...dispatchProps,
   
    ...ownProps,
})

export default connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps
)(startCollaboration);