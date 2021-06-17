export const JD_LANDING_SEARCH_SELECT_CHANGE_HANDLER = "JD_LANDING_SEARCH_SELECT_CHANGE_HANDLER";
export const JD_LANDING_SEARCH_SAVE_JOB_TITLE_HANDLER = "JD_LANDING_SEARCH_SAVE_JOB_TITLE_HANDLER";
export const JD_LANDING_SEARCH_SAVE_JOB_SPEC_HANDLER = "JD_LANDING_SEARCH_SAVE_JOB_SPEC_HANDLER";
export const JD_LANDING_SEARCH_SAVE_JOB_TEMPLATES_HANDLER = "JD_LANDING_SEARCH_SAVE_JOB_TEMPLATES_HANDLER";
export const JD_LANDING_SEARCH_SAVE_JOB_TEMPLATES_TITLE_ID_HANDLER = "JD_LANDING_SEARCH_SAVE_JOB_TEMPLATES_TITLE_ID_HANDLER";
export const JD_LANDING_SEARCH_SAVE_JOB_TEMPLATES_SPEC_ID_HANDLER = "JD_LANDING_SEARCH_SAVE_JOB_TEMPLATES_SPEC_ID_HANDLER";
export const JD_LANDING_SUGGESTED_TEMPLATES_ID_HANDLER = "JD_LANDING_SUGGESTED_TEMPLATES_ID_HANDLER";

export const selectFieldChangeHandler = (name, value) => dispatch => {
    dispatch({
        type: JD_LANDING_SEARCH_SELECT_CHANGE_HANDLER,
        payload: value,
        key: name
    });
};

export const saveUpdatedJobTitle = (value) => dispatch => {

    let data = value.map((item) => {
        return {
            value: item.job_title,
            label: item.job_title,
            id: item.id,
            spec: item.specializations
        }
    })

    dispatch({
        type: JD_LANDING_SEARCH_SAVE_JOB_TITLE_HANDLER,
        payload: data,
        key: "lookingField"
    });
};

export const saveUpdatedJobSpec = (value) => dispatch => {

    let data = value.map((item) => {
        return {
            value: item.spec_title,
            label: item.spec_title,
            id: item.spec_id,
        }
    })

    dispatch({
        type: JD_LANDING_SEARCH_SAVE_JOB_SPEC_HANDLER,
        payload: data,
        key: "forField"
    });
};

export const saveUpdatedTemplates = (value) => dispatch => {
    dispatch({
        type: JD_LANDING_SEARCH_SAVE_JOB_TEMPLATES_HANDLER,
        payload: value,
    });
};

export const saveUpdatedTemplateJobId = (value) => dispatch => {

    let id = value ? value.id : null
    dispatch({
        type: JD_LANDING_SEARCH_SAVE_JOB_TEMPLATES_TITLE_ID_HANDLER,
        payload: id,
    });
};

export const saveUpdatedTemplateSpecId = (value) => dispatch => {
    dispatch({
        type: JD_LANDING_SEARCH_SAVE_JOB_TEMPLATES_SPEC_ID_HANDLER,
        payload: value,
    });
};

export const saveTemplateIdHandler = (value) => dispatch => {
    dispatch({
        type: JD_LANDING_SUGGESTED_TEMPLATES_ID_HANDLER,
        payload: value,
    });
};