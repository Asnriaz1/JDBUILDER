import { connect } from "react-redux";
import CompanySettingGeneral from "./component";
import {
    handleLoadingSpinnerClose,
    handleLoadingSpinnerOpenWithOptions
} from "../../../../../common/ReduxBased/LoadingSpinner/actions";
import instance, { BASE_URL } from "../../../../../../api/config";

import {
    textFieldResetChangeHandler,
    saveCompanyGeneralInfo,
    saveCompanyGeneralInfoData
} from "../actions";

const mapStateToProps = state => ({
    fields: state.COMPANY_INFO.forms.companyInfoForm.fields,
    generalInfoMessage:state.COMPANY_INFO.UISettings.generalInfoMessage
})

const mapDispatchToProps = (dispatch, props) => ({
    textFieldChangeHandler: (name, e) => {
        if (typeof e.value !== "string") {
            e.value = "";
        }
        dispatch(textFieldResetChangeHandler(name, e.value));
    },
    saveCompanyGeneralInfo: (NameField, NumberField, CountryField, ProvinceField, CityField) => {

        let data = {
            Name: NameField,
            Contact: NumberField,
            CountryName: CountryField,
            StateName: ProvinceField,
            CityName: CityField
        }
        
        dispatch(handleLoadingSpinnerOpenWithOptions(true, "updating general info", "large"));
        instance.put(BASE_URL+'User/Dashboard/Company/UpdateCompanyGeneral', data)
        .then(res => {
            dispatch(saveCompanyGeneralInfo(res.data.message));
            dispatch(handleLoadingSpinnerClose());
        })
        .catch(error => {
            dispatch(handleLoadingSpinnerClose());
        })
    },
    fetchDataIfNeeded: () => {
        instance.get(BASE_URL+'User/Dashboard/Company/GetCompanyGeneral')
        .then(res => {
            dispatch(saveCompanyGeneralInfoData(res.data));
        })
        .catch(error => {
        })
    }
})

const mergeProps = (stateProps, dispatchProps, ownProps) => ({
    ...stateProps,
    ...dispatchProps,
    saveCompanyGeneralInfo: () => {
        dispatchProps.saveCompanyGeneralInfo(stateProps.fields.NameField.value, stateProps.fields.NumberField.value, stateProps.fields.CountryField.value, stateProps.fields.ProvinceField.value, stateProps.fields.CityField.value)
    },
    ...ownProps,
})

export default connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps
)(CompanySettingGeneral);