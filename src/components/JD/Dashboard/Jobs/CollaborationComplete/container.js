import { connect } from "react-redux";
import CollaborationCompleteJDs from "./component";
import instance, { BASE_URL } from "../../../../../api/config";
import {
    handleLoadingSpinnerClose,
    handleLoadingSpinnerOpenWithOptions
} from "../../../../common/ReduxBased/LoadingSpinner/actions";
import {
    saveCollaborationCompleteTemplates,
} from "../actions";

const mapStateToProps = state => ({
    templatesData: state.JOBS_DASHBOARD.data.JDs.collaborationComplete
})

const mapDispatchToProps = (dispatch, props) => ({
    fetchDataIfNeeded: () => {
        dispatch(handleLoadingSpinnerOpenWithOptions(true, "Loading CollaborationComplete JDs...", "large"));
        instance.get(BASE_URL+'User/JD/GetJDs?status=Complete')
        .then(res => {
            dispatch(saveCollaborationCompleteTemplates(res.data))
            dispatch(handleLoadingSpinnerClose());
        })
        .catch(error => {
            dispatch(handleLoadingSpinnerClose());
        })
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
)(CollaborationCompleteJDs);