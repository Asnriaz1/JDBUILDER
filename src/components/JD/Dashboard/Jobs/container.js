import { connect } from "react-redux";
import UserDashboardJobs from "./component";
import instance, { BASE_URL } from "../../../../api/config";
import {
    handleLoadingSpinnerClose,
    handleLoadingSpinnerOpenWithOptions
} from "../../../common/ReduxBased/LoadingSpinner/actions";
import {
    saveCompleteTemplates,
    saveIncompleteTemplates,
    saveIncollaborationTemplates,
    saveCollaborationCompleteTemplates
} from "./actions";

const mapStateToProps = state => ({
    templatesData: state.JOBS_DASHBOARD.data.JDs
})

const mapDispatchToProps = (dispatch, props) => ({
    fetchDataIfNeeded: () => {
        dispatch(handleLoadingSpinnerOpenWithOptions(true, "Loading Templates...", "large"));
        instance.get(BASE_URL+'User/JD/GetJDs?status=all')
        .then(res => {
            let completeTemplates = res.data.filter(item => {
                return item.status === "Complete"
            })

            let incompletesTemplates = res.data.filter(item => {
                return item.status === "InComplete"
            })

            let incollaborationTemplates = res.data.filter(item => {
                return item.status === "InCollaboration"
            })

            let colcompleteTemplates = res.data.filter(item => {
                return item.status === "CollaborationComplete"
            })
            
            dispatch(saveCompleteTemplates(completeTemplates))
            dispatch(saveIncompleteTemplates(incompletesTemplates))
            dispatch(saveIncollaborationTemplates(incollaborationTemplates))
            dispatch(saveCollaborationCompleteTemplates(colcompleteTemplates))
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
)(UserDashboardJobs);