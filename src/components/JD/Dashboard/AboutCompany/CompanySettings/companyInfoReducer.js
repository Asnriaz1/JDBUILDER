import {
    COMPANY_INFO_PAGE_TEXT_CHANGE_HANDLER,
    COMPANY_INFO_GENERAL_PAGE_MESSAGE_HANDLER,
    COMPANY_INFO_ABOUT_PAGE_MESSAGE_HANDLER
} from "./actions";

export const companyInfoReducer = (state = [], action) => {
    switch (action.type) {

        case COMPANY_INFO_PAGE_TEXT_CHANGE_HANDLER: {
            return {
                ...state,
                forms: {
                    ...state.forms,
                    companyInfoForm: {
                        ...state.forms.companyInfoForm,
                        fields: {
                            ...state.forms.companyInfoForm.fields,
                            [action.key]: {
                                ...state.forms.companyInfoForm.fields[action.key],
                                value: action.payload
                            }
                        }
                    }
                }
            };
        }

        case COMPANY_INFO_GENERAL_PAGE_MESSAGE_HANDLER: {
            return {
                ...state,
                UISettings: {
                    ...state.UISettings,
                    generalInfoMessage: action.payload
                }
            }
        }

        case COMPANY_INFO_ABOUT_PAGE_MESSAGE_HANDLER: {
            return {
                ...state,
                UISettings: {
                    ...state.UISettings,
                    aboutInfoMessage: action.payload
                }
            }
        }
        default: {
            return {
                ...state
            };
        }
    }
}