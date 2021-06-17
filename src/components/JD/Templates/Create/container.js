import { connect } from "react-redux";
import CreateJDLink from "./component";
import instance, { BASE_URL_SQL, BASE_URL } from "../../../../api/config";
import {
    textFieldChangeHandler,
    fetchDataIfNeeded
} from "../../JDBuilding/JobOpening/actions";
import ls from 'local-storage';
import { withRouter } from 'react-router-dom'


const mapStateToProps = state => ({
    templateJobId: state.JDLANDING.data.templateJobId,
    templateSpecId: state.JDLANDING.data.templateSpecId,
})

const mapDispatchToProps = (dispatch, props) => ({
    // getJobCode: () => {
    //     instance.get(BASE_URL_SQL+'JD/GetJobCode')
    //     .then(res => {
    //         dispatch(textFieldChangeHandler('jobCodeField', res.data.data));
    //     })
    //     .catch(error => {
            
    //     })
    // },
    fetchDataIfNeeded: (templateSpecId, templateJobId) => {

        let savedJobId = ls.get('jobId')
        let savedSpecId = ls.get('specId')
  
        savedJobId = templateJobId ? templateJobId : savedJobId
        savedSpecId = templateSpecId ? templateSpecId : savedSpecId
        
        let paramVal = savedSpecId ? 'specId='+savedSpecId : 'jobId='+savedJobId

        instance.get(BASE_URL+'Templates/CreateNewTemplate?'+paramVal)
        .then(res => {
            dispatch(fetchDataIfNeeded(res.data));
        })
        .catch(error => {
            
        })
    }
})

const mergeProps = (stateProps, dispatchProps, ownProps) => ({
    ...stateProps,
    ...dispatchProps,
    fetchDataIfNeeded: () => {
        dispatchProps.fetchDataIfNeeded(stateProps.templateSpecId, stateProps.templateJobId);
    },
    ...ownProps,
})

export default connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps
)(CreateJDLink);