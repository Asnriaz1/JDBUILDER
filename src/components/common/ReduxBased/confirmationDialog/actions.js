export const ALERT_DIALOG_VISIBILITY = "ALERT_DIALOG_VISIBILITY";
export const ALERT_DIALOG_SHOW_WITH_OPTIONS = "ALERT_DIALOG_SHOW_WITH_OPTIONS";
export const ALERT_DIALOG_SHOW_WITH_OPTIONS_OBJECT = "ALERT_DIALOG_SHOW_WITH_OPTIONS_OBJECT";
export const ALERT_DIALOG_UPDATE_RESULT = "ALERT_DIALOG_UPDATE_RESULT";
export const ALERT_DIALOG_SET_REDIRECT_PATH = "ALERT_DIALOG_SET_REDIRECT_PATH";

export const ALERT_DIALOG_ADD_POST_ACTION_CLOSE = "ALERT_DIALOG_ADD_POST_ACTION_CLOSE";
export const ALERT_DIALOG_RESET_POST_ACTIONS = "ALERT_DIALOG_RESET_POST_ACTIONS";

export const showAlertDialog = () => dispatch => {
    dispatch({
        type: ALERT_DIALOG_VISIBILITY,
        payload: true
    });
};
export const cancelAlertDialog = (name = null) => dispatch => {
    dispatch({
        type: ALERT_DIALOG_UPDATE_RESULT,
        payload: false,
        name: name
    });
};
export const applyAlertDialog = (name = null, actionType = null) => dispatch => {
    dispatch({
        type: !!actionType ? actionType : ALERT_DIALOG_UPDATE_RESULT,
        payload: true,
        name: name
    });
};
export const closeAlertDialog = (name = null,postActionsClose = []) => dispatch => {
    dispatch({
        type: ALERT_DIALOG_VISIBILITY,
        payload: false,
        name: name
    });

    if(!!postActionsClose[name] && postActionsClose[name].length > 0) {
        postActionsClose[name].map(item => {
            dispatch(item);
        });
    }
};

export const getTitleByArgs = (showTitle, title, type) => {
    if (showTitle === true) {
        if (title === null || title === "") {
            switch (type) {
                case "warning": {
                    return "Warning!";
                }
                case "error": {
                    return "Error!";
                }
                case "info": {
                    return "Info!";
                }
                case "success": {
                    return "Success";
                }
                default: {
                    return "No Title Or Type Supplied";
                }
            }
        } else {
            return title;
        }
    } else {
        return "";
    }
};

export const showAlertDialogWithOptions = (message = null, showTitle = null, title = null, type = null, actionType = null) => dispatch => {
    dispatch({
        type: ALERT_DIALOG_SHOW_WITH_OPTIONS,
        payload: {
            open: true,
            message: message === null ? "No Message Supplied" : message,
            showTitle: showTitle === null ? false : showTitle,
            title: getTitleByArgs(showTitle, title, type),
            type: type === null ? "info" : type,
            actionType: actionType
        }
    });
};

// export const showAlertDialogWithOptionsObject = (optionsObject = null) => dispatch => {
//   dispatch({
//     type: ALERT_DIALOG_SHOW_WITH_OPTIONS_OBJECT,
//     payload: !!optionsObject ? optionsObject : {}
//   });
// };

export const showAlertDialogWithOptionsObject = (name, optionsObject = null) => dispatch => {
    dispatch({
        type: ALERT_DIALOG_SHOW_WITH_OPTIONS_OBJECT,
        payload: !!optionsObject ? optionsObject : {},
        name: name
    });
};

export const allowRedirectTo = location => dispatch => {
    dispatch({
        type: ALERT_DIALOG_SET_REDIRECT_PATH,
        payload: location
    });
};

export const addAlertPostAction = (key, action) => dispatch => {
    dispatch({
        type: ALERT_DIALOG_ADD_POST_ACTION_CLOSE,
        payload: action,
        key: key,
    });
};

export const resetRanksPostAction = (key) => dispatch => {
    dispatch({
        type: ALERT_DIALOG_RESET_POST_ACTIONS,
        key: key,
    });
};