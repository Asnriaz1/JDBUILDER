export const ADD_COLLABORATOR_PAGE_TEXT_CHANGE_HANDLER = "ADD_COLLABORATOR_PAGE_TEXT_CHANGE_HANDLER";
export const ADD_COLLABORATOR_SAVE_HANDLER = "ADD_COLLABORATOR_SAVE_HANDLER";

export const textFieldChangeHandler = (name, value) => dispatch => {
    dispatch({
        type: ADD_COLLABORATOR_PAGE_TEXT_CHANGE_HANDLER,
        payload: value,
        key: name
    });
};

export const saveAddedCollaborators = (value) => dispatch => {
    dispatch({
        type: ADD_COLLABORATOR_SAVE_HANDLER,
        payload: value
    });
};