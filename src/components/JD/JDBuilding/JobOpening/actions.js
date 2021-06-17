import ls from 'local-storage';

export const JD_JOB_OPENING_TEXT_CHANGE_HANDLER = "JD_JOB_OPENING_TEXT_CHANGE_HANDLER";
export const JD_JOB_OPENING_SELECT_CHANGE_HANDLER = "JD_JOB_OPENING_SELECT_CHANGE_HANDLER";
export const JD_JOB_OPENING_ADD_ROLE_EXPANSION_HANDLER = "JD_JOB_OPENING_ADD_ROLE_EXPANSION_HANDLER";
export const JD_JOB_OPENING_ADD_RES_EXPANSION_HANDLER = "JD_JOB_OPENING_ADD_RES_EXPANSION_HANDLER";
export const JD_JOB_OPENING_RADIO_CHANGE_HANDLER = "JD_JOB_OPENING_RADIO_CHANGE_HANDLER";
export const JD_JOB_OPENING_SWITCH_CHANGE_HANDLER = "JD_JOB_OPENING_SWITCH_CHANGE_HANDLER";
export const JD_JOB_OPENING_EDITOR_ACTIVE_ROLE_HANDLER = "JD_JOB_OPENING_EDITOR_ACTIVE_ROLE_HANDLER";
export const JD_JOB_OPENING_EDITOR_ACTIVE_RES_HANDLER = "JD_JOB_OPENING_EDITOR_ACTIVE_RES_HANDLER";
export const JD_JOB_OPENING_SAVE_EDITOR_ROLES_RES_HANDLER = "JD_JOB_OPENING_SAVE_EDITOR_ROLES_RES_HANDLER";
export const JD_JOB_OPENING_SAVE_EDITOR_ROLES_RES_AS_HTML_HANDLER = "JD_JOB_OPENING_SAVE_EDITOR_ROLES_RES_AS_HTML_HANDLER";
export const JD_JOB_OPENING_SAVE_NEW_DATA_HANDLER = "JD_JOB_OPENING_SAVE_NEW_DATA_HANDLER";
export const JD_JOB_OPENING_SAVE_NEW_ROLES_HANDLER = "JD_JOB_OPENING_SAVE_NEW_ROLES_HANDLER";
export const JD_JOB_OPENING_SAVE_NEW_RESPONSIBILITIES_HANDLER = "JD_JOB_OPENING_SAVE_NEW_RESPONSIBILITIES_HANDLER";
export const JD_JOB_OPENING_SAVE_INDUSTRIES_HANDLER = "JD_JOB_OPENING_SAVE_INDUSTRIES_HANDLER";
export const JD_JOB_OPENING_SAVE_FUNCTION_HANDLER = "JD_JOB_OPENING_SAVE_FUNCTION_HANDLER";

export const textFieldChangeHandler = (name, value) => dispatch => {
    dispatch({
        type: JD_JOB_OPENING_TEXT_CHANGE_HANDLER,
        payload: value,
        key: name
    });
};

export const selectFieldChangeHandler = (name, value) => dispatch => {
    dispatch({
        type: JD_JOB_OPENING_SELECT_CHANGE_HANDLER,
        payload: value,
        key: name
    });
};

export const toggleAddRoleExpansionPanel = (value) => dispatch => {

    const newval = !value;

    dispatch({
        type: JD_JOB_OPENING_ADD_ROLE_EXPANSION_HANDLER,
        payload: newval,
    });
};

export const toggleAddResExpansionPanel = (value) => dispatch => {

    const newval = !value;

    dispatch({
        type: JD_JOB_OPENING_ADD_RES_EXPANSION_HANDLER,
        payload: newval,
    });
};

export const radioChangeHandler = (value) => dispatch => {
    dispatch({
        type: JD_JOB_OPENING_RADIO_CHANGE_HANDLER,
        payload: value,
    });
};

export const switchChangeHandler = (name , value) => dispatch => {
    dispatch({
        type: JD_JOB_OPENING_SWITCH_CHANGE_HANDLER,
        key: name,
        payload: value,
    });
};

export const rolesActiveHandler = (value) => dispatch => {
    dispatch({
        type: JD_JOB_OPENING_EDITOR_ACTIVE_ROLE_HANDLER,
        payload: value,
    });
};

export const resActiveHandler = (value) => dispatch => {
    dispatch({
        type: JD_JOB_OPENING_EDITOR_ACTIVE_RES_HANDLER,
        payload: value,
    });
};

export const saveUpdatedRolesResEditor = (value) => dispatch => {
    dispatch({
        type: JD_JOB_OPENING_SAVE_EDITOR_ROLES_RES_HANDLER,
        payload: value,
    });
};

export const saveUpdatedRolesResAsHTML = (value) => dispatch => {
    dispatch({
        type: JD_JOB_OPENING_SAVE_EDITOR_ROLES_RES_AS_HTML_HANDLER,
        payload: value,
    });
};

export const fetchDataIfNeeded = (value) => dispatch => {
    
    let data = value;

    let rolesData = data.roles.map(item => {
        return {
            id: item.role_id,
            desc: item.title,
            isActive: false
        }
    })

    let resData = data.responsibilities ? data.responsibilities.map(item => {
        return {
            id: item.respo_id,
            desc: item.title,
            isActive: false
        }
    }) : []

    let industriesData = data.industries ? data.industries.map(item => {
        return {
            id: item.id,
            value: item.title,
            label: item.title
        }
    }) : []

    let functionData = data.functions ? data.functions.map(item => {
        return {
            id: item.id,
            value: item.title,
            label: item.title
        }
    }) : []

    let experienceData = data.exp;
    experienceData = experienceData.split("-")
    if(experienceData.length > 1) {
        dispatch({
            type: JD_JOB_OPENING_TEXT_CHANGE_HANDLER,
            payload: experienceData[0],
            key: "minYearField"
        });

        dispatch({
            type: JD_JOB_OPENING_TEXT_CHANGE_HANDLER,
            payload: experienceData[1],
            key: "maxYearField"
        });
    }

    //save title
    ls.set('jobTitle', data.title);
    dispatch({
        type: JD_JOB_OPENING_TEXT_CHANGE_HANDLER,
        payload: data.title,
        key: "jobTitleField"
    });
    

    //save new roles
    dispatch({
        type: JD_JOB_OPENING_SAVE_NEW_ROLES_HANDLER,
        payload: rolesData,
    })

    //save new responsibilties
    dispatch({
        type: JD_JOB_OPENING_SAVE_NEW_RESPONSIBILITIES_HANDLER,
        payload: resData,
    })

    //save industries
    dispatch({
        type: JD_JOB_OPENING_SAVE_INDUSTRIES_HANDLER,
        payload: industriesData,
    })

    //save function
    dispatch({
        type: JD_JOB_OPENING_SAVE_FUNCTION_HANDLER,
        payload: functionData,
    })
    
    dispatch({
        type: JD_JOB_OPENING_SAVE_NEW_DATA_HANDLER,
        payload: value,
    });
};

export const fetchDataSuggestedTemplate = (value) => dispatch => {
    
    let data = value;

    let rolesData = data.roles.map(item => {
        return {
            id: item.role_id,
            desc: item.title,
            isActive: false,
            used: item.used,
        }
    })

    let resData = data.responsibilities ? data.responsibilities.map(item => {
        return {
            id: item.respo_id,
            desc: item.title,
            isActive: false,
            used: item.used
        }
    }) : []

    let industriesData = data.industries ? data.industries.map(item => {
        return {
            id: item.id,
            value: item.title,
            label: item.title
        }
    }) : []

    let functionData = data.functions ? data.functions.map(item => {
        return {
            id: item.id,
            value: item.title,
            label: item.title
        }
    }) : []
     let experienceData = data.exp;
console.log(experienceData)
    // experienceData = experienceData.split("-")
    if(experienceData != null) {
        dispatch({
            type: JD_JOB_OPENING_TEXT_CHANGE_HANDLER,
            payload: experienceData.min_exp,
            key: "minYearField"
        });

        dispatch({
            type: JD_JOB_OPENING_TEXT_CHANGE_HANDLER,
            payload: experienceData.max_exp,
            key: "maxYearField"
        });
    }

    //save title
    ls.set('jobTitle', data.title);
    dispatch({
        type: JD_JOB_OPENING_TEXT_CHANGE_HANDLER,
        payload: data.title,
        key: "jobTitleField"
    });

    //save new roles
    dispatch({
        type: JD_JOB_OPENING_SAVE_NEW_ROLES_HANDLER,
        payload: rolesData,
    })

    //save new responsibilties
    dispatch({
        type: JD_JOB_OPENING_SAVE_NEW_RESPONSIBILITIES_HANDLER,
        payload: resData,
    })

    //save industries
    dispatch({
        type: JD_JOB_OPENING_SAVE_INDUSTRIES_HANDLER,
        payload: industriesData,
    })

    //save function
    dispatch({
        type: JD_JOB_OPENING_SAVE_FUNCTION_HANDLER,
        payload: functionData,
    })
    
    dispatch({
        type: JD_JOB_OPENING_SAVE_NEW_DATA_HANDLER,
        payload: value,
    });
};