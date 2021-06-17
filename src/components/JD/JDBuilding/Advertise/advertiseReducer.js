import {
    JD_ADVERTISE_TEXT_CHANGE_HANDLER,
    JD_ADVERTISE_PROFILE_SAVE_HANDLER,
    JD_ADVERTISE_SAVE_SUGGESTED_CANDIDATES_HANDLER
} from "./actions";

export const jobAdvertiseReducer = (state = [], action) => {
    switch (action.type) {
        case JD_ADVERTISE_TEXT_CHANGE_HANDLER: {
            return {
                ...state,
                forms: {
                    ...state.forms,
                    advertiseForm: {
                        ...state.forms.advertiseForm,
                        fields: {
                            ...state.forms.advertiseForm.fields,
                            [action.key]: {
                                ...state.forms.advertiseForm.fields[action.key],
                                value: action.payload
                            }
                        }
                    }
                }
            }
        }

        case JD_ADVERTISE_PROFILE_SAVE_HANDLER: {
            return {
                ...state,
                data: {
                    ...state.data,
                    profileData: action.payload
                }
            }
        }

        case JD_ADVERTISE_SAVE_SUGGESTED_CANDIDATES_HANDLER: {
            return {
                ...state,
                data: {
                    ...state.data,
                    candidateList: [...action.payload]
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