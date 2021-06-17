import { connect } from "react-redux";
import DashboardLanding from "./component";
import instance, { BASE_URL } from "../../../../api/config";
import {
    handleLoadingSpinnerClose,
    handleLoadingSpinnerOpenWithOptions
} from "../../../common/ReduxBased/LoadingSpinner/actions";
import {
    saveJDCount
} from  "./actions";

const mapStateToProps = state => ({
    jdCount: state.LANDING_DASHBOARD.data.jdCount
})

const mapDispatchToProps = (dispatch, props) => ({
    fetchDataIfNeeded: () => {
        dispatch(handleLoadingSpinnerOpenWithOptions(true, "Loading...", "large"));
        instance.get(BASE_URL+'User/JD/GetJDCount')
        .then(res => {
            dispatch(saveJDCount(res.data));
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
)(DashboardLanding);