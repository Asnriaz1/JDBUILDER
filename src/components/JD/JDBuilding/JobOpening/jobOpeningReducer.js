import {
    JD_JOB_OPENING_TEXT_CHANGE_HANDLER,
    JD_JOB_OPENING_ADD_ROLE_EXPANSION_HANDLER,
    JD_JOB_OPENING_ADD_RES_EXPANSION_HANDLER,
    JD_JOB_OPENING_RADIO_CHANGE_HANDLER,
    JD_JOB_OPENING_SWITCH_CHANGE_HANDLER,
    JD_JOB_OPENING_SELECT_CHANGE_HANDLER,
    JD_JOB_OPENING_EDITOR_ACTIVE_ROLE_HANDLER,
    JD_JOB_OPENING_EDITOR_ACTIVE_RES_HANDLER,
    JD_JOB_OPENING_SAVE_EDITOR_ROLES_RES_HANDLER,
    JD_JOB_OPENING_SAVE_NEW_ROLES_HANDLER,
    JD_JOB_OPENING_SAVE_NEW_RESPONSIBILITIES_HANDLER,
    JD_JOB_OPENING_SAVE_INDUSTRIES_HANDLER,
    JD_JOB_OPENING_SAVE_FUNCTION_HANDLER,
    JD_JOB_OPENING_SAVE_EDITOR_ROLES_RES_AS_HTML_HANDLER
} from "./actions";

export const jobOpeningReducer = (state = [], action) => {
    switch (action.type) {
        case JD_JOB_OPENING_TEXT_CHANGE_HANDLER: {
            return {
                ...state,
                forms: {
                    ...state.forms,
                    jobOpeningForm: {
                        ...state.forms.jobOpeningForm,
                        fields: {
                            ...state.forms.jobOpeningForm.fields,
                            [action.key]: {
                                ...state.forms.jobOpeningForm.fields[action.key],
                                value: action.payload
                            }
                        }
                    }
                }
            }
        }

        case JD_JOB_OPENING_SELECT_CHANGE_HANDLER: {
            return {
                ...state,
                forms: {
                    ...state.forms,
                    jobOpeningForm: {
                        ...state.forms.jobOpeningForm,
                        fields: {
                            ...state.forms.jobOpeningForm.fields,
                            [action.key]: {
                                ...state.forms.jobOpeningForm.fields[action.key],
                                value: (action.payload === null) ? [] : [action.payload]
                            }
                        }
                    }
                }
            }
        }

        case JD_JOB_OPENING_ADD_ROLE_EXPANSION_HANDLER: {
            return {
                ...state,
                UISettings: {
                    addRoleIsExpanded: action.payload
                }
            }
        }

        case JD_JOB_OPENING_ADD_RES_EXPANSION_HANDLER: {
            return {
                ...state,
                UISettings: {
                    addResIsExpanded: action.payload
                }
            }
        }
        case JD_JOB_OPENING_RADIO_CHANGE_HANDLER :{
            return {
                ...state,
                forms: {
                    ...state.forms,
                    jobOpeningForm: {
                        ...state.forms.jobOpeningForm,
                        fields: {
                            ...state.forms.jobOpeningForm.fields,
                            salaryTypeField: {
                                ...state.forms.jobOpeningForm.fields.salaryTypeField,
                                value: action.payload
                            }
                        }
                    }
                }
            }
        }
        case JD_JOB_OPENING_SWITCH_CHANGE_HANDLER: {
            return {
                ...state,
                forms: {
                    ...state.forms,
                    jobOpeningForm: {
                        ...state.forms.jobOpeningForm,
                        fields: {
                            ...state.forms.jobOpeningForm.fields,
                            [action.key]: {
                                ...state.forms.jobOpeningForm.fields[action.key],
                                value: action.payload
                            }
                        }
                    }
                }
            }
        }

        case JD_JOB_OPENING_EDITOR_ACTIVE_ROLE_HANDLER: {
            let oldRoles = state.data.rolesData
            oldRoles[action.payload].isActive = true

            return {
                ...state,
                data: {
                    ...state.data,
                    rolesData: [...oldRoles]
                }
            }
        }
        case JD_JOB_OPENING_EDITOR_ACTIVE_RES_HANDLER: {
            let oldRes = state.data.resData
            oldRes[action.payload].isActive = true

            return {
                ...state,
                data: {
                    ...state.data,
                    resData: [...oldRes]
                }
            }
        }

        case JD_JOB_OPENING_SAVE_EDITOR_ROLES_RES_HANDLER: {
            return {
                ...state,
                data: {
                    ...state.data,
                    rawContentRolesRes: action.payload
                }
            }
        }

        case JD_JOB_OPENING_SAVE_EDITOR_ROLES_RES_AS_HTML_HANDLER: {
            return {
                ...state,
                data: {
                    ...state.data,
                    rolesResHTMLData: action.payload
                }
            }
        }

        case JD_JOB_OPENING_SAVE_NEW_ROLES_HANDLER: {
            return {
                ...state,
                data: {
                    ...state.data,
                    rolesData: [...action.payload]
                }
            }
        }

        case JD_JOB_OPENING_SAVE_NEW_RESPONSIBILITIES_HANDLER: {
            return {
                ...state,
                data: {
                    ...state.data,
                    resData: [...action.payload]
                }
            }
        }

        case JD_JOB_OPENING_SAVE_INDUSTRIES_HANDLER: {
            return {
                ...state,
                forms: {
                    ...state.forms,
                    jobOpeningForm: {
                        ...state.forms.jobOpeningForm,
                        fields: {
                            ...state.forms.jobOpeningForm.fields,
                            industryField: {
                                ...state.forms.jobOpeningForm.fields.industryField,
                                options: [...action.payload]
                            }
                        }
                    }
                }
            }
        }

        case JD_JOB_OPENING_SAVE_FUNCTION_HANDLER: {
            return {
                ...state,
                forms: {
                    ...state.forms,
                    jobOpeningForm: {
                        ...state.forms.jobOpeningForm,
                        fields: {
                            ...state.forms.jobOpeningForm.fields,
                            functionField: {
                                ...state.forms.jobOpeningForm.fields.functionField,
                                options: [...action.payload]
                            }
                        }
                    }
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