export const JD_DASHBOARD_LANDING_COUNT_HANDLER = "JD_DASHBOARD_LANDING_COUNT_HANDLER";

export const saveJDCount = (value) => dispatch => {
    dispatch({
        type: JD_DASHBOARD_LANDING_COUNT_HANDLER,
        payload: value,
    });
};