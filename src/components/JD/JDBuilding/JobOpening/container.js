import {
    handleLoadingSpinnerClose,
    handleLoadingSpinnerOpenWithOptions
} from "../../../common/ReduxBased/LoadingSpinner/actions";

import { connect } from "react-redux";
import JobOpening from "./component";
import {
    headerPathActiveHandler,
    pathChangeHandler,
} from "../actions";
import {
    fetchDataSuggestedTemplate,
    textFieldChangeHandler
} from "./actions";
import ls from 'local-storage'

import instance, { BASE_URL, BASE_URL_SQL } from "../../../../api/config";

const mapStateToProps = state => ({
    templateSpecId: state.JDLANDING.data.templateSpecId,
    templateId: state.JDLANDING.data.templateId,
    isLogin: state.LOGIN.UISetting.isLogin,
    jobTitle:state.JOBOPENING.forms.jobOpeningForm.fields.jobTitleField.value,
    industryField:state.JOBOPENING.forms.jobOpeningForm.fields.industryField.value,
    functionField:state.JOBOPENING.forms.jobOpeningForm.fields.functionField.value,
    employmenTypeField:state.JOBOPENING.forms.jobOpeningForm.fields.employmenTypeField.value,
    minYearField:state.JOBOPENING.forms.jobOpeningForm.fields.minYearField.value,
    maxYearField:state.JOBOPENING.forms.jobOpeningForm.fields.maxYearField.value,
    positionField:state.JOBOPENING.forms.jobOpeningForm.fields.positionField.value,
    AddressField:state.JOBOPENING.forms.jobOpeningForm.fields.AddressField.value,
    QualificationField:state.JOBOPENING.forms.jobOpeningForm.fields.QualificationField.value,
    remoteWorkingField:state.JOBOPENING.forms.jobOpeningForm.fields.remoteWorkingField.value,
    showSalaryField:state.JOBOPENING.forms.jobOpeningForm.fields.showSalaryField.value,
    salaryTypeField:state.JOBOPENING.forms.jobOpeningForm.fields.salaryTypeField.value,
    hourlyMaxRateField:state.JOBOPENING.forms.jobOpeningForm.fields.hourlyMaxRateField.value,
    monthlySalaryRangField:state.JOBOPENING.forms.jobOpeningForm.fields.monthlySalaryRangField.value,
    monthlyCurrencyField:state.JOBOPENING.forms.jobOpeningForm.fields.monthlyCurrencyField.value,
    yearlySalaryRangField:state.JOBOPENING.forms.jobOpeningForm.fields.yearlySalaryRangField.value,
    yearlyCurrencyField:state.JOBOPENING.forms.jobOpeningForm.fields.yearlyCurrencyField.value,
    rolesResHTMLData:state.JOBOPENING.data.rolesResHTMLData,
    rolesData:state.JOBOPENING.data.rolesData,
    resData:state.JOBOPENING.data.resData,
    jobCodeField:state.JOBOPENING.forms.jobOpeningForm.fields.jobCodeField.value,
    QualificationField:state.JOBOPENING.forms.jobOpeningForm.fields.QualificationField.value,
    AddressField:state.JOBOPENING.forms.jobOpeningForm.fields.AddressField.value,
    monthlyCurrencyField:state.JOBOPENING.forms.jobOpeningForm.fields.monthlyCurrencyField.value,
    yearlyCurrencyField:state.JOBOPENING.forms.jobOpeningForm.fields.yearlyCurrencyField.value,
})

const mapDispatchToProps = (dispatch, props) => ({
    headerPathActiveHandler: (val) => {
        dispatch(headerPathActiveHandler(val));
        dispatch(pathChangeHandler("/create/info"))
    },
    fetchDataSuggestedTemplate: (templateId) => {
        
        dispatch(handleLoadingSpinnerOpenWithOptions(true, "Loading...", "large"));
        let savedTempId = ls.get('suggestedTempId')
        let paramVal = templateId ? templateId : savedTempId

        instance.get(BASE_URL+'Templates?templateId='+paramVal)
        .then(res => {
            dispatch(fetchDataSuggestedTemplate(res.data));
            dispatch(handleLoadingSpinnerClose());
        })
        .catch(error => {
            dispatch(handleLoadingSpinnerClose());
        })
    },
    getJobCode: () => {
        if(ls.get('jobCode')) {
            dispatch(textFieldChangeHandler('jobCodeField', ls.get('jobCode')))
        }
        else {
            instance.get(BASE_URL_SQL+'GetJobCode')
            .then(res => {
                ls.set('jobCode', res.data);
                dispatch(textFieldChangeHandler('jobCodeField', res.data))
            })
            .catch(error => {
            })
        }
    },
})

const mergeProps = (stateProps, dispatchProps, ownProps) => ({
    ...stateProps,
    ...dispatchProps,
    fetchDataSuggestedTemplate: () => {
        dispatchProps.fetchDataSuggestedTemplate(stateProps.templateId);
    },
    ...ownProps,
})

export default connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps
)(JobOpening);