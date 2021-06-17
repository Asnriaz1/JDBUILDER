import { connect } from "react-redux";
import IncompleteJDs from "./component";
import instance, { BASE_URL } from "../../../../../api/config";
import {
    handleLoadingSpinnerClose,
    handleLoadingSpinnerOpenWithOptions
} from "../../../../common/ReduxBased/LoadingSpinner/actions";
import {
    saveIncompleteTemplates,
} from "../actions";

const mapStateToProps = state => ({
    templatesData: state.JOBS_DASHBOARD.data.JDs.incomplete
})

const mapDispatchToProps = (dispatch, props) => ({
    fetchDataIfNeeded: () => {
        dispatch(handleLoadingSpinnerOpenWithOptions(true, "Loading InComplete JDs...", "large"));
        instance.get(BASE_URL+'User/JD/GetJDs?status=InComplete')
        .then(res => {
            dispatch(saveIncompleteTemplates(res.data))
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
)(IncompleteJDs);