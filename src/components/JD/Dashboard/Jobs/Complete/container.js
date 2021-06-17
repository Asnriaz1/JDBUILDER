import { connect } from "react-redux";
import CompleteJDs from "./component";
import instance, { BASE_URL } from "../../../../../api/config";
import {
    handleLoadingSpinnerClose,
    handleLoadingSpinnerOpenWithOptions
} from "../../../../common/ReduxBased/LoadingSpinner/actions";
import {
    saveCompleteTemplates,
} from "../actions";

const mapStateToProps = state => ({
    templatesData: state.JOBS_DASHBOARD.data.JDs.complete
})

const mapDispatchToProps = (dispatch, props) => ({
    fetchDataIfNeeded: () => {
        dispatch(handleLoadingSpinnerOpenWithOptions(true, "Loading Complete JDs...", "large"));
        instance.get(BASE_URL+'User/JD/GetJDs?status=Complete')
        .then(res => {
            dispatch(saveCompleteTemplates(res.data))
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
)(CompleteJDs);