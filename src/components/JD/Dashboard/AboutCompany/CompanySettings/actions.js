export const COMPANY_INFO_PAGE_TEXT_CHANGE_HANDLER = "COMPANY_INFO_PAGE_TEXT_CHANGE_HANDLER";
export const COMPANY_INFO_GENERAL_PAGE_MESSAGE_HANDLER = "COMPANY_INFO_GENERAL_PAGE_MESSAGE_HANDLER";
export const COMPANY_INFO_ABOUT_PAGE_MESSAGE_HANDLER = "COMPANY_INFO_ABOUT_PAGE_MESSAGE_HANDLER";

export const textFieldResetChangeHandler = (name, value) => dispatch => {
    dispatch({
        type: COMPANY_INFO_PAGE_TEXT_CHANGE_HANDLER,
        payload: value,
        key: name
    });
};

export const saveCompanyGeneralInfo = (value) => dispatch => {
    dispatch({
        type: COMPANY_INFO_GENERAL_PAGE_MESSAGE_HANDLER,
        payload: value,
    });
};

export const saveCompanyAboutInfo = (value) => dispatch => {
    dispatch({
        type: COMPANY_INFO_ABOUT_PAGE_MESSAGE_HANDLER,
        payload: value,
    });
};

export const saveCompanyGeneralInfoData = (value) => dispatch => {

    dispatch({
        type: COMPANY_INFO_PAGE_TEXT_CHANGE_HANDLER,
        payload: value.name ? value.name : "",
        key: 'NameField'
    });

    dispatch({
        type: COMPANY_INFO_PAGE_TEXT_CHANGE_HANDLER,
        payload: value.contact ? value.contact : "",
        key: 'NumberField'
    });

    dispatch({
        type: COMPANY_INFO_PAGE_TEXT_CHANGE_HANDLER,
        payload: value.countryName ? value.countryName : "",
        key: 'CountryField'
    });

    dispatch({
        type: COMPANY_INFO_PAGE_TEXT_CHANGE_HANDLER,
        payload: value.stateName ? value.stateName : "",
        key: 'ProvinceField'
    });

    dispatch({
        type: COMPANY_INFO_PAGE_TEXT_CHANGE_HANDLER,
        payload: value.cityName ? value.cityName : "",
        key: 'CityField'
    });
};

export const saveCompanyAboutInfoData = (value) => dispatch => {

    dispatch({
        type: COMPANY_INFO_PAGE_TEXT_CHANGE_HANDLER,
        payload: value.summary ? value.summary : "",
        key: 'AboutCompanyField'
    });

    dispatch({
        type: COMPANY_INFO_PAGE_TEXT_CHANGE_HANDLER,
        payload: value.url ? value.url : "",
        key: 'websiteURLField'
    });

    dispatch({
        type: COMPANY_INFO_PAGE_TEXT_CHANGE_HANDLER,
        payload: value.companyEmail ? value.companyEmail : "",
        key: 'companyEmailField'
    });
};