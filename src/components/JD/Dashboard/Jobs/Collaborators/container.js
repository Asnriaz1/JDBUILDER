import { connect } from "react-redux";
import JDCollaborators from "./component";
import instance, { BASE_URL_COL } from "../../../../../api/config";
import {
    handleLoadingSpinnerClose,
    handleLoadingSpinnerOpenWithOptions
} from "../../../../common/ReduxBased/LoadingSpinner/actions";
import {
    saveCollaboratorsWithStatus
} from "../actions";

const mapStateToProps = state => ({
    collaborators: state.JOBS_DASHBOARD.data.collaborators
})

const mapDispatchToProps = (dispatch, props) => ({
    fetchDataIfNeeded: (job_Code) => {
        dispatch(handleLoadingSpinnerOpenWithOptions(true, "Loading...", "large"));
        // instance.get(BASE_URL_COL+'User/GetAllCollaboratorsForDb?JobCode='+job_Code)
        // .then(res => {
        //     dispatch(saveCollaboratorsWithStatus(res.data));
        //     dispatch(handleLoadingSpinnerClose());
        // })
        // .catch(error => {
        //     dispatch(handleLoadingSpinnerClose());
        // })
    }
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
)(JDCollaborators);