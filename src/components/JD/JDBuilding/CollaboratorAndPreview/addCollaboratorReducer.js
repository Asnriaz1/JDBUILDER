import {
    ADD_COLLABORATOR_PAGE_TEXT_CHANGE_HANDLER,
    ADD_COLLABORATOR_SAVE_HANDLER
} from "./actions";

export const addCollaboratorReducer = (state = [], action) => {
    switch (action.type) {

        case ADD_COLLABORATOR_PAGE_TEXT_CHANGE_HANDLER: {
            return {
                ...state,
                forms: {
                    ...state.forms,
                    addCollaboratorForm: {
                        ...state.forms.addCollaboratorForm,
                        fields: {
                            ...state.forms.addCollaboratorForm.fields,
                            [action.key]: {
                                ...state.forms.addCollaboratorForm.fields[action.key],
                                ...action.payload
                            }
                        }
                    }
                }
            };
        }

        case ADD_COLLABORATOR_SAVE_HANDLER: {
            return {
                ...state,
                data: {
                    ...state.data,
                    addedCollaborator: action.payload
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