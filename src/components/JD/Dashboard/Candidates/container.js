import { connect } from "react-redux";
import Candidates from "./component";

import {
    saveSuggestedCandidates
} from "./actions";

import instance, { BASE_URL } from "../../../../api/config";
import {
    handleLoadingSpinnerClose,
    handleLoadingSpinnerOpenWithOptions
} from "../../../common/ReduxBased/LoadingSpinner/actions";
import ls from 'local-storage';

const mapStateToProps = state => ({
    candidateList: state.ADVERTISE.data.candidateList
})

const mapDispatchToProps = (dispatch, props) => ({
 
    fetchDataIfNeeded: () => {
        let jobCode = ls.get('jobCode');
        instance.get(BASE_URL+'User/AdvertisePage/SuggestedCandidates?JobCode='+jobCode)
        .then(res => {
            dispatch(saveSuggestedCandidates(res.data.matched_Candidates));
        })
        .catch(error => {
        })
    },
    sendEmailToCandidate: (userData) => {

        let jobCode = ls.get('jobCode');
        let jobTitle = ls.get('jobTitle');
        let data = {
            Job_Title: jobTitle,
            Job_Code: jobCode,
            Candidate_Email: userData.candidate_Contact_Details.candidate_Email,
            Candidate_Name: userData.candidate_Name,
            Candidate_Guid: userData.candidate_Guid
        }
        dispatch(handleLoadingSpinnerOpenWithOptions(true, "Sending Email...", "large"));

        instance.post(BASE_URL+'User/AdvertisePage/SendEmail', data)
        .then(res => {
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
)(Candidates);