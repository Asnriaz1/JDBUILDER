import { connect } from "react-redux";
import Collaborations from "./component";
import instance, { BASE_LOGIN_URL } from "../../../../api/config";
import axios from "axios";
import jwt_decode from "jwt-decode";
import ls from 'local-storage';
import {
    JD_COLLABORATOR_DATA,
    DIALOG_CLOSE,
} from "./actions";
const mapStateToProps = state => ({

    AddressField:state.JOBOPENING.forms.jobOpeningForm.fields.AddressField.value,
    employmentType:state.JOBOPENING.forms.jobOpeningForm.fields.employmenTypeField.value,
    minYearField:state.JOBOPENING.forms.jobOpeningForm.fields.minYearField.value,
    maxYearField:state.JOBOPENING.forms.jobOpeningForm.fields.maxYearField.value,
    jobCodeField:state.JOBOPENING.forms.jobOpeningForm.fields.jobCodeField.value,
    positionField:state.JOBOPENING.forms.jobOpeningForm.fields.positionField.value,
    QualificationField:state.JOBOPENING.forms.jobOpeningForm.fields.QualificationField.value,
    remoteWorkingField:state.JOBOPENING.forms.jobOpeningForm.fields.remoteWorkingField.value,
    showSalaryField:state.JOBOPENING.forms.jobOpeningForm.fields.showSalaryField.value,
    salaryTypeField:state.JOBOPENING.forms.jobOpeningForm.fields.salaryTypeField.value,
    hourlyMaxRateField:state.JOBOPENING.forms.jobOpeningForm.fields.hourlyMaxRateField.value,
    monthlySalaryRangField:state.JOBOPENING.forms.jobOpeningForm.fields.monthlySalaryRangField.value,
    monthlyCurrencyField:state.JOBOPENING.forms.jobOpeningForm.fields.monthlyCurrencyField.value,
    yearlySalaryRangField:state.JOBOPENING.forms.jobOpeningForm.fields.yearlySalaryRangField.value,
    yearlyCurrencyField:state.JOBOPENING.forms.jobOpeningForm.fields.yearlyCurrencyField.value,
    templateId: state.JDLANDING.data.templateId,
    jobTitle:state.JOBOPENING.forms.jobOpeningForm.fields.jobTitleField.value,
    functionField:state.JOBOPENING.forms.jobOpeningForm.fields.functionField.value,
    industryField:state.JOBOPENING.forms.jobOpeningForm.fields.industryField.value,
    selectedSkills: state.ADDITIONALINFO.data.skillsData,
    selectedLanguages: state.ADDITIONALINFO.data.languagesData,
    rolesResHTMLData:state.JOBOPENING.data.rolesResHTMLData,
 //   selectedSummary:state.SUMMARY.data.rawContentSummaryAsHTML,
    dialogState:state.COLLABORATOR.UISettings.open,
 
})

const mapDispatchToProps = (dispatch, props) => ({
    
    fetchData: () => {

        
        var url1 = new URL(window.location.href);
        var c = url1.searchParams.get("VerifyToken");
        console.log(c);
        var decoded = jwt_decode(c);
        var decodedHeader = jwt_decode(c);      
        var job_code= decodedHeader.data.Job_Code
        console.log(job_code);
        debugger


        let dialogState= stateProps.dialogState;
        instance.get(BASE_LOGIN_URL+'jdbuilder/UserTemplates?jobcode='+job_code,
        {
            headers: {
                Authorization: `Bearer ${c}`

            }
        }
        )
        .then(res => {
            debugger
           
            dispatch(JD_COLLABORATOR_DATA(res));
            
            setState({
                dialogState:false,
            })
          

        })
        .catch(error => {
          debugger
        })
    },
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
)(Collaborations);