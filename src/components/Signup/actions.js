export const SIGNUP_PAGE_TEXT_CHANGE_HANDLER = "SIGNUP_PAGE_TEXT_CHANGE_HANDLER";
export const SIGNUP_CORRECTLY_PAGE_HANDLER = "SIGNUP_CORRECTLY_PAGE_HANDLER";
export const SIGNUP_PAGE_ERROR_HANDLER = "SIGNUP_PAGE_ERROR_HANDLER";
export const RESET_PAGE_TEXT_CHANGE_HANDLER = "RESET_PAGE_TEXT_CHANGE_HANDLER";
export const RESET_PAGE_ERROR_HANDLER = "RESET_PAGE_ERROR_HANDLER";
export const RESET_PAGE_MESSAGE_HANDLER = "RESET_PAGE_MESSAGE_HANDLER";

// export const LOGIN_PAGE_ATTEMPT_SUCCESS = "LOGIN_PAGE_ATTEMPT_SUCCESS";

export const textFieldChangeHandler = (name, value) => dispatch => {
    dispatch({
        type: SIGNUP_PAGE_TEXT_CHANGE_HANDLER,
        payload: value,
        key: name
    });
};

export const textFieldResetChangeHandler = (name, value) => dispatch => {
    dispatch({
        type: RESET_PAGE_TEXT_CHANGE_HANDLER,
        payload: value,
        key: name
    });
};

export const saveResetPasswordError = (value) => dispatch => {
    dispatch({
        type: RESET_PAGE_ERROR_HANDLER,
        payload: value,
    });
};

export const signUpCorrectlyHandler = (value) => dispatch => {
    dispatch({
        type: SIGNUP_CORRECTLY_PAGE_HANDLER,
        payload: value,
    });
};

export const setErrorHandler = (value) => dispatch => {
    dispatch({
        type: SIGNUP_PAGE_ERROR_HANDLER,
        payload: value,
    });
};

export const setResetPasswordMassage = (value) => dispatch => {
    dispatch({
        type: RESET_PAGE_MESSAGE_HANDLER,
        payload: value,
    });
};