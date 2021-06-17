import { connect } from "react-redux";
import CvPreview from "./component";
import instance, { BASE_URL } from "../../../../../api/config";
import {
    handleLoadingSpinnerClose,
    handleLoadingSpinnerOpenWithOptions
} from "../../../../common/ReduxBased/LoadingSpinner/actions";
import {
    saveProfileData
} from "../actions";

const mapStateToProps = state => ({
    profileData: state.ADVERTISE.data.profileData
})

const mapDispatchToProps = (dispatch, props) => ({
    fetchDataIfNeeded: (id) => {
        dispatch(handleLoadingSpinnerOpenWithOptions(true, "Loading Profile...", "large"));

        instance.get(BASE_URL+'User/AdvertisePage/CandidateProfile?guid='+id)
        .then(res => {
            dispatch(saveProfileData(res.data));
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
    fetchDataIfNeeded: () =>{
        dispatchProps.fetchDataIfNeeded(ownProps.userid)
    },
    ...ownProps,
})

export default connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps
)(CvPreview);