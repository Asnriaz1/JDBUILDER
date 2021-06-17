import {
    JD_LANDING_SEARCH_SELECT_CHANGE_HANDLER,
    JD_LANDING_SEARCH_SAVE_JOB_TITLE_HANDLER,
    JD_LANDING_SEARCH_SAVE_JOB_SPEC_HANDLER,
    JD_LANDING_SEARCH_SAVE_JOB_TEMPLATES_HANDLER,
    JD_LANDING_SEARCH_SAVE_JOB_TEMPLATES_TITLE_ID_HANDLER,
    JD_LANDING_SEARCH_SAVE_JOB_TEMPLATES_SPEC_ID_HANDLER,
    JD_LANDING_SUGGESTED_TEMPLATES_ID_HANDLER
} from "./actions";

export const JDLandingReducer = (state = [], action) => {
    switch (action.type) {
        case JD_LANDING_SEARCH_SELECT_CHANGE_HANDLER: {
            return {
                ...state,
                forms: {
                    ...state.forms,
                    landingSearchForm: {
                        ...state.forms.landingSearchForm,
                        fields: {
                            ...state.forms.landingSearchForm.fields,
                            [action.key]: {
                                ...state.forms.landingSearchForm.fields[action.key],
                                value: (action.payload === null) ? [] : [action.payload]
                            }
                        }
                    }
                }
            }
        }

        case JD_LANDING_SEARCH_SAVE_JOB_TITLE_HANDLER: {
            return {
                ...state,
                forms: {
                    ...state.forms,
                    landingSearchForm: {
                        ...state.forms.landingSearchForm,
                        fields: {
                            ...state.forms.landingSearchForm.fields,
                            [action.key]: {
                                ...state.forms.landingSearchForm.fields[action.key],
                                options: [...action.payload]
                            }
                        }
                    }
                }
            }
        }

        case JD_LANDING_SEARCH_SAVE_JOB_SPEC_HANDLER: {
            return {
                ...state,
                forms: {
                    ...state.forms,
                    landingSearchForm: {
                        ...state.forms.landingSearchForm,
                        fields: {
                            ...state.forms.landingSearchForm.fields,
                            [action.key]: {
                                ...state.forms.landingSearchForm.fields[action.key],
                                options: [...action.payload]
                            }
                        }
                    }
                }
            }
        }

        case JD_LANDING_SEARCH_SAVE_JOB_TEMPLATES_HANDLER: {
            return {
                ...state,
                data: {
                    ...state.data,
                    templatesData: [...action.payload]
                }
            }
        }

        case JD_LANDING_SEARCH_SAVE_JOB_TEMPLATES_TITLE_ID_HANDLER: {
            return {
                ...state,
                data: {
                    ...state.data,
                    templateJobId: action.payload
                }
            }
        }

        case JD_LANDING_SEARCH_SAVE_JOB_TEMPLATES_SPEC_ID_HANDLER: {
            return {
                ...state,
                data: {
                    ...state.data,
                    templateSpecId: action.payload
                }
            }
        }

        case JD_LANDING_SUGGESTED_TEMPLATES_ID_HANDLER: {
            return {
                ...state,
                data: {
                    ...state.data,
                    templateId: action.payload
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