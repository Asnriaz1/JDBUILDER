export const JD_LANDING_HEADER_ACTIVE_CHANGE_HANDLER = "JD_LANDING_HEADER_ACTIVE_CHANGE_HANDLER";
export const JD_LANDING_HEADER_ACTIVE_PATH_CHANGE_HANDLER = "JD_LANDING_HEADER_ACTIVE_PATH_CHANGE_HANDLER";
export const JD_DOWNLOAD_DATA_SAVE_HANDLER = "JD_DOWNLOAD_DATA_SAVE_HANDLER";

export const headerPathActiveHandler = (value) => dispatch => {
    dispatch({
        type: JD_LANDING_HEADER_ACTIVE_CHANGE_HANDLER,
        payload: value,
    });
};

export const pathChangeHandler = (value) => dispatch => {
    dispatch({
        type: JD_LANDING_HEADER_ACTIVE_PATH_CHANGE_HANDLER,
        payload: value,
    });
};

export const fetchDataIfNeeded = (value) => dispatch => {
    dispatch({
        type: JD_DOWNLOAD_DATA_SAVE_HANDLER,
        payload: value,
    });
};