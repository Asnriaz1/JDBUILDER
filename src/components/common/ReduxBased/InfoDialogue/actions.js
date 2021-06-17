import {INFO_DIALOG} from "./initialState";

export const INFO_DIALOG_OPEN = "INFO_DIALOG_OPEN";
export const INFO_DIALOG_CLOSE = "INFO_DIALOG_CLOSE";
export const INFO_DIALOG_OPEN_WITH_OPTIONS = "INFO_DIALOG_OPEN_WITH_OPTIONS";
export const INFO_DIALOG_OPEN_WITH_OPTIONS_OBJECT = "INFO_DIALOG_OPEN_WITH_OPTIONS_OBJECT";
export const INFO_DIALOG_RESET = "INFO_DIALOG_RESET";

//To open Info Dialog
export const openInfoDialog = () => dispatch => {
    dispatch({
        type: INFO_DIALOG_OPEN
    });
};

//To close Info Dialog
export const closeInfoDialog = () => dispatch => {
    dispatch({
        type: INFO_DIALOG_CLOSE
    });
    dispatch(resetInfoDialog());
};

//To open Info Dialog with options
export const openInfoDialogWithOptions = (displayType = 1, title = "Info Dialog", text = "Default text for Info Dialog", heading = null, image=null) => dispatch => {
    dispatch({
        type: INFO_DIALOG_OPEN_WITH_OPTIONS,
        payload: {
            open: true,
            displayType,
            title,
            text,
            heading,
            image
        }
    });
};

//To open Info Dialog with options object
export const openInfoDialogWithOptionsObject = (optionsObject = null) => dispatch => {
    dispatch({
        type: INFO_DIALOG_OPEN_WITH_OPTIONS_OBJECT,
        payload: !!optionsObject ? optionsObject : {}
    });
};

//To reset Info Dialog
export const resetInfoDialog = () => dispatch => {
    dispatch({
        type: INFO_DIALOG_RESET,
        payload: INFO_DIALOG.UISettings
    });
};
