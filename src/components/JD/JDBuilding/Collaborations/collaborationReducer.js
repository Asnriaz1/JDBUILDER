import {
    JD_COLLABORATOR_DATA,
    JD_JOB_OPENING_TEXT_CHANGE_HANDLER,
    JD_ADDITIPONAL_INFO_TEXT_CHANGE_HANDLER,
    JD_SUMMARY_TEXT_CHANGE_HANDLER,
    DIALOG_CLOSE_HANDLER


} from "./actions";
import initalState from "../../../../store/initialState";
export const collaboratorReducer = (state = initalState, action) => {

    console.log(state)
    debugger
    switch (action.type) {
        case JD_JOB_OPENING_TEXT_CHANGE_HANDLER: {
            return {
                ...state,
                ...state.JOBOPENING,
                forms: {
                    ...state.JOBOPENING.forms,
                    jobOpeningForm: {
                        ...state.JOBOPENING.forms.jobOpeningForm,
                        fields: {
                            ...state.JOBOPENING.forms.jobOpeningForm.fields,
                            [action.key]: {
                                ...state.JOBOPENING.forms.jobOpeningForm.fields[action.key],
                                value: action.payload
                            }
                        }
                    }
                }
            }
        }
       
        case DIALOG_CLOSE_HANDLER: {
            return {
                ...state,
                ...state.COLLABORATOR,
                UISettings: {
                    ...state.COLLABORATOR.UISettings,
                    open: action.payload
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