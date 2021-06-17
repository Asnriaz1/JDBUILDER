import { connect } from "react-redux";
import CompanySettingsAbout from "./component";

import {
    handleLoadingSpinnerClose,
    handleLoadingSpinnerOpenWithOptions
} from "../../../../../common/ReduxBased/LoadingSpinner/actions";
import instance, { BASE_URL } from "../../../../../../api/config";

import {
    textFieldResetChangeHandler,
    saveCompanyAboutInfoData,
    saveCompanyAboutInfo
} from "../actions";

const mapStateToProps = state => ({
    fields: state.COMPANY_INFO.forms.companyInfoForm.fields,
    aboutInfoMessage:state.COMPANY_INFO.UISettings.aboutInfoMessage,
    isLogin: state.LOGIN.UISetting.isLogin,

})

const mapDispatchToProps = (dispatch, props) => ({
    textFieldChangeHandler: (name, e) => {
        if (typeof e.value !== "string") {
            e.value = "";
        }
        dispatch(textFieldResetChangeHandler(name, e.value));
    },
    saveCompanyAboutInfo: (AboutCompanyField, websiteURLField, companyEmailField) => {

        let data = {
            Summary: AboutCompanyField,
            Url: websiteURLField,
            CompanyEmail: companyEmailField
        }
        
        dispatch(handleLoadingSpinnerOpenWithOptions(true, "updating about info", "large"));
        instance.put(BASE_URL+'User/Dashboard/Company/UpdateCompanyAbout', data)
        .then(res => {
            dispatch(saveCompanyAboutInfo(res.data.message));
            dispatch(handleLoadingSpinnerClose());
        })
        .catch(error => {
            dispatch(handleLoadingSpinnerClose());
        })
    },
    fetchDataIfNeeded: () => {
        instance.get(BASE_URL+'User/Dashboard/Company/GetCompanyAbout')
        .then(res => {
            dispatch(saveCompanyAboutInfoData(res.data));
        })
        .catch(error => {
        })
    }
})

const mergeProps = (stateProps, dispatchProps, ownProps) => ({
    ...stateProps,
    ...dispatchProps,
    saveCompanyAboutInfo: () => {
        dispatchProps.saveCompanyAboutInfo(stateProps.fields.AboutCompanyField.value, stateProps.fields.websiteURLField.value, stateProps.fields.companyEmailField.value)
    },
    ...ownProps,
})

export default connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps
)(CompanySettingsAbout);