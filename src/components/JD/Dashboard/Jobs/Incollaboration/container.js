import { connect } from "react-redux";
import IncollaborationJDs from "./component";
import instance, { BASE_URL } from "../../../../../api/config";
import {
    handleLoadingSpinnerClose,
    handleLoadingSpinnerOpenWithOptions
} from "../../../../common/ReduxBased/LoadingSpinner/actions";
import {
    saveIncollaborationTemplates,
} from "../actions";

const mapStateToProps = state => ({
    templatesData: state.JOBS_DASHBOARD.data.JDs.incollaboration
})

const mapDispatchToProps = (dispatch, props) => ({
    fetchDataIfNeeded: () => {
        dispatch(handleLoadingSpinnerOpenWithOptions(true, "Loading InCollaboration JDs...", "large"));
        instance.get(BASE_URL+'User/JD/GetJDs?status=InCollaboration')
        .then(res => {
            dispatch(saveIncollaborationTemplates(res.data))
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
)(IncollaborationJDs);