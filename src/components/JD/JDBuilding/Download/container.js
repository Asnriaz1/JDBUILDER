import { connect } from "react-redux";
import JDDisplay from "./component";
import instance, { BASE_URL } from "../../../../api/config";
import {
    fetchDataIfNeeded
} from "../actions";
import ls from 'local-storage'

const mapStateToProps = state => ({
    jobOpeningData: state.JOBOPENING.forms.jobOpeningForm.fields,
    templateSpecId: state.JDLANDING.data.templateSpecId,
    downloadData: state.JDBUILDING.data.downloadData,
    jobcode: state.JOBOPENING.forms.jobOpeningForm.fields.jobCodeField.value,
})

const mapDispatchToProps = (dispatch, props) => ({
    fetchDataIfNeeded: (jobCodeField) => {
        let paramVal = ls.get('jobCode');

        instance.get(BASE_URL+'UserTemplates?jobcode='+paramVal)
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
    fetchDataIfNeeded: (jobCode) => {
        dispatchProps.fetchDataIfNeeded(stateProps.jobOpeningData.jobCodeField.value);
    },
    ...ownProps,
})

export default connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps
)(JDDisplay);