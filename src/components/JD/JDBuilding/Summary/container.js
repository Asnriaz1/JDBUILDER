import {
    handleLoadingSpinnerClose,
    handleLoadingSpinnerOpenWithOptions
} from "../../../common/ReduxBased/LoadingSpinner/actions";
import { connect } from "react-redux";
import JobSummary from "./component";
import {
    headerPathActiveHandler,
    pathChangeHandler
} from "../actions";
import {
    submitTemplateHandler,
    fetchDataSummary,
    loginandSubmitTemplateHandler,
    showLoginPopupHandler
} from "./actions";
import instance, { BASE_URL } from "../../../../api/config";
import ls from 'local-storage'

const mapStateToProps = state => ({
    templateId: state.JDLANDING.data.templateId,
    fields: state.LOGIN.forms.loginForm.fields,
    login: state.JOBSUMMARY.UISettings.login,
    selectedSkills: state.ADDITIONALINFO.data.skillsData,
    selectedLanguages: state.ADDITIONALINFO.data.languagesData,
    jobOpeningFields: state.JOBOPENING.forms.jobOpeningForm.fields,
    rawContentSummaryAsHTML: state.JOBSUMMARY.data.rawContentSummaryAsHTML,
    templateSpecId: state.JDLANDING.data.templateSpecId,
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
    dataList:state.JOBSUMMARY.data.dataList,
    activePath:state.JDBUILDING.data.activePath,
})

const mapDispatchToProps = (dispatch, props) => ({

    submitbutton :(val,templateId, selectedSkills, selectedLanguages, JOindustryField, JOfunctionField, rolesResHTMLData, rawContentSummaryAsHTML) =>{
       debugger
        dispatch(headerPathActiveHandler(val));
        dispatch(submitTemplateHandler(templateId, selectedSkills, selectedLanguages, JOindustryField, JOfunctionField, rolesResHTMLData, rawContentSummaryAsHTML));

    },
    headerPathActiveHandler: (val) => {
        dispatch(headerPathActiveHandler(val));
        dispatch(pathChangeHandler("/create/advertise"))
    },
    submitTemplateHandler: (templateId, selectedSkills, selectedLanguages, JOindustryField, JOfunctionField, rolesResHTMLData, rawContentSummaryAsHTML) => {
        dispatch(submitTemplateHandler(templateId, selectedSkills, selectedLanguages, JOindustryField, JOfunctionField, rolesResHTMLData, rawContentSummaryAsHTML));
    },


    loginandSubmitTemplateHandler: (EmailField, PasswordField, templateId, selectedSkills, selectedLanguages, JOindustryField, JOfunctionField, rolesResHTMLData, rawContentSummaryAsHTML) => {
        let data = {
            "Email": EmailField,
            "Password": PasswordField,
            "FromJD": true
    }
        dispatch(loginandSubmitTemplateHandler(data, templateId, selectedSkills, selectedLanguages, JOindustryField, JOfunctionField, rolesResHTMLData, rawContentSummaryAsHTML));
    },
    fetchDataSummary: (templateId) => {
        dispatch(handleLoadingSpinnerOpenWithOptions(true, "Loading Summary...", "large"));
        let savedTempId = ls.get('suggestedTempId')
        let paramVal = templateId ? templateId : savedTempId

        instance.get(BASE_URL+'Templates?templateId='+paramVal+'&sectionId=TS3')
        .then(res => {
            dispatch(fetchDataSummary(res.data));
            dispatch(handleLoadingSpinnerClose());
        })
        .catch(error => {
            dispatch(handleLoadingSpinnerClose());
        })
    },
    showLoginPopupHandler: (value) => {
        debugger
        dispatch(showLoginPopupHandler(value));
    }
})

const mergeProps = (stateProps, dispatchProps, ownProps) => ({
    ...stateProps,
    ...dispatchProps,
    fetchDataSummary: () => {
        dispatchProps.fetchDataSummary(stateProps.templateId);
    },
    loginandSubmitTemplateHandler: () => {

        
        var experience = { "min_exp": stateProps.minYearField, "max_exp":  stateProps.maxYearField }
        var rolesDataFilter =  stateProps.rolesData.filter((item) => {
            return item.isActive == true
        }).map(item => item.id)

        var resDataFilter =  stateProps.resData.filter((item) => {
            return item.isActive == true
        }).map(item => item.id)
        
   


        let salary_range = {
            min_sal: null,
            max_sal: null
        };
        if ( stateProps.salaryTypeField === "yearly") {
          
            let min_max =  stateProps.yearlySalaryRangField[0].value.split('-');
            salary_range.min_sal = parseInt(min_max[0]);
            salary_range.max_sal = parseInt(min_max[1]);

        }
        else if ( stateProps.salaryTypeField === "hourly") {
            let min_max =  stateProps.hourlyMaxRateField[0].value.split('-');
           salary_range.min_sal = parseInt(min_max[0]);
            salary_range.max_sal = parseInt(min_max[1]);
        }
        else if ( stateProps.salaryTypeField === "monthly") {
            
            let min_max =  stateProps.monthlySalaryRangField[0].value.split('-');
            salary_range.min_sal = parseInt(min_max[0]);
            salary_range.max_sal = parseInt(min_max[1]);
           
        }
        let savedTempId = ls.get('suggestedTempId')
        let paramVal =  stateProps.templateId ?  stateProps.templateId : savedTempId

        let _selected_skills = stateProps.selectedSkills ? stateProps.selectedSkills.map(item => {
            return {
                _id: item.id,
                level: item.level,
                importance: item.importance,
                title: item.title
            }
        }) : []

        let _selected_languages = stateProps.selectedLanguages ? stateProps.selectedLanguages.map(item => {
            return {
                _id: item.id,
                level: item.level,
                importance: item.importance,
                title: item.title
            }
        }) : []
        let data = {

            job_code:  stateProps.jobCodeField,
            template_id: paramVal,
            title:  stateProps.jobTitle,
            _selected_rr: {
                htmlstring:  stateProps.rolesResHTMLData,
                rol: rolesDataFilter,
                res: resDataFilter
            },
            salary_detail: {
                sal_range: salary_range,
                type:  stateProps.salaryTypeField,
                currency: 'Dollar',
                visible: true
            },
            exp: experience,
            _selected_industry:  stateProps.industryField[0].id,
            _selected_function:  stateProps.functionField[0].id,
            employment_type:  stateProps.employmenTypeField[0].value,
            positions: parseInt( stateProps.positionField),
            remote_work:  stateProps.remoteWorkingField,
            qualification: stateProps.QualificationField[0].value,
            address:  stateProps.AddressField,
            _selected_skills: _selected_skills,
           _selected_languages:_selected_languages,

        } 
        dispatchProps.loginandSubmitTemplateHandler(stateProps.fields.EmailField.value, stateProps.fields.PasswordField.value,
            data)
                
    },
    submitTemplateHandler: () => {
        let savedTempId = ls.get('suggestedTempId')
        let paramVal =  stateProps.templateId ?  stateProps.templateId : savedTempId
        var selectedSummary = stateProps.dataList.filter((item) => {
            return item.isActive == true
        }).map(item => item.id)

       let data={
        job_code:  stateProps.jobCodeField,
        template_id: paramVal,
        title: stateProps.jobTitle,
        _selected_summary:{
            htmlstring: stateProps.rawContentSummaryAsHTML,
            s_Id:selectedSummary
       },

       }
        dispatchProps.submitTemplateHandler(data)
    },
})

export default connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps
)(JobSummary);
