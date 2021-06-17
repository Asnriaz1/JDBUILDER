import {
    JD_JOB_SUMMARY_TEXT_CHANGE_HANDLER,
    JD_JOB_SUMMARY_EDITOR_ACTIVE_TEXT_HANDLER,
    JD_JOB_SUMMARY_EDITOR_TEXT_HANDLER,
    JD_TEMPLATE_SAVE_HANDLER,
    JD_TEMPLATE_SAVE_SUMMARY_SUGGESTION_HANDLER,
    JD_TEMPLATE_SAVE_SUMMARY_SHOW_LOGIN_POPUP_HANDLER,
    JD_JOB_SUMMARY_EDITOR_TEXT_AS_HTML_HANDLER
} from "./actions";

export const jobSummaryReducer = (state = [], action) => {
    switch (action.type) {
        case JD_JOB_SUMMARY_TEXT_CHANGE_HANDLER: {
            return {
                ...state,
                forms: {
                    ...state.forms,
                    jobSummaryForm: {
                        ...state.forms.jobSummaryForm,
                        fields: {
                            ...state.forms.jobSummaryForm.fields,
                            [action.key]: {
                                ...state.forms.jobSummaryForm.fields[action.key],
                                value: action.payload
                            }
                        }
                    }
                }
            }
        }
        case JD_JOB_SUMMARY_EDITOR_ACTIVE_TEXT_HANDLER: {
            let oldData = state.data.dataList
            oldData[action.payload].isActive = true

            return {
                ...state,
                data: {
                    ...state.data,
                    dataList: [...oldData]
                }
            }
        }

        case JD_JOB_SUMMARY_EDITOR_TEXT_HANDLER: {
            return {
                ...state,
                data: {
                    ...state.data,
                    rawContentSummary: action.payload
                }
            }
        }

        case JD_JOB_SUMMARY_EDITOR_TEXT_AS_HTML_HANDLER: {
            return {
                ...state,
                data: {
                    ...state.data,
                    rawContentSummaryAsHTML: action.payload
                }
            }
        }

        case JD_TEMPLATE_SAVE_HANDLER: {
            return {
                ...state,
                UISettings: {
                    ...state.UISettings,
                    isSaved: action.payload
                }
            }
        }
        case JD_TEMPLATE_SAVE_SUMMARY_SUGGESTION_HANDLER: {
            return {
                ...state,
                data: {
                    ...state.data,
                    dataList: [...action.payload]
                }
            }
        }
        case JD_TEMPLATE_SAVE_SUMMARY_SHOW_LOGIN_POPUP_HANDLER: {
            return {
                ...state,
                UISettings: {
                    ...state.UISettings,
                    login: action.payload
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