export const JD_DASHBOARD_JOBS_SAVE_COMPLETE_TEMPLATE_HANDLER = "JD_DASHBOARD_JOBS_SAVE_TEMPLATE_HANDLER";
export const JD_DASHBOARD_JOBS_SAVE_INCOMPLETE_TEMPLATE_HANDLER = "JD_DASHBOARD_JOBS_SAVE_INCOMPLETE_TEMPLATE_HANDLER";
export const JD_DASHBOARD_JOBS_SAVE_INCOLLABORATION_TEMPLATE_HANDLER = "JD_DASHBOARD_JOBS_SAVE_INCOLLABORATION_TEMPLATE_HANDLER";
export const JD_DASHBOARD_JOBS_SAVE_COLLABORATIONCOMPLETE_TEMPLATE_HANDLER = "JD_DASHBOARD_JOBS_SAVE_COLLABORATIONCOMPLETE_TEMPLATE_HANDLER";
export const JD_DASHBOARD_JOBS_SAVE_COLLABORATORS_WITH_STATUS_HANDLER = "JD_DASHBOARD_JOBS_SAVE_COLLABORATORS_WITH_STATUS_HANDLER";

export const saveCompleteTemplates = (value) => dispatch => {
    dispatch({
        type: JD_DASHBOARD_JOBS_SAVE_COMPLETE_TEMPLATE_HANDLER,
        payload: value,
    });
};

export const saveIncompleteTemplates = (value) => dispatch => {
    dispatch({
        type: JD_DASHBOARD_JOBS_SAVE_INCOMPLETE_TEMPLATE_HANDLER,
        payload: value,
    });
};

export const saveIncollaborationTemplates = (value) => dispatch => {
    dispatch({
        type: JD_DASHBOARD_JOBS_SAVE_INCOLLABORATION_TEMPLATE_HANDLER,
        payload: value,
    });
};

export const saveCollaborationCompleteTemplates = (value) => dispatch => {
    dispatch({
        type: JD_DASHBOARD_JOBS_SAVE_COLLABORATIONCOMPLETE_TEMPLATE_HANDLER,
        payload: value,
    });
};

export const saveCollaboratorsWithStatus = (value) => dispatch => {
    dispatch({
        type: JD_DASHBOARD_JOBS_SAVE_COLLABORATORS_WITH_STATUS_HANDLER,
        payload: value,
    });
};