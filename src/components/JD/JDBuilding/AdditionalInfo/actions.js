export const JD_ADDITIONAL_INFO_TEXT_CHANGE_HANDLER = "JD_ADDITIONAL_INFO_TEXT_CHANGE_HANDLER";
export const JD_ADDITIONAL_INFO_SELECT_CHANGE_HANDLER = "JD_ADDITIONAL_INFO_SELECT_CHANGE_HANDLER";
export const JD_ADDITIONAL_INFO_ADD_NEW_SKILL_HANDLER = "JD_ADDITIONAL_INFO_ADD_NEW_SKILL_HANDLER";
export const JD_ADDITIONAL_INFO_ADD_NEW_LANGUAGE_HANDLER = "JD_ADDITIONAL_INFO_ADD_NEW_LANGUAGE_HANDLER";
export const JD_ADDITIONAL_INFO_RECOM_SKILL_ACTIVE_HANDLER = "JD_ADDITIONAL_INFO_RECOM_SKILL_ACTIVE_HANDLER";
export const JD_ADDITIONAL_INFO_REMOVE_SKILL_HANDLER = "JD_ADDITIONAL_INFO_REMOVE_SKILL_HANDLER";
export const JD_ADDITIONAL_INFO_REMOVE_LANGUAGE_HANDLER = "JD_ADDITIONAL_INFO_REMOVE_LANGUAGE_HANDLER";
export const JD_ADDITIONAL_INFO_RECOMMENDED_SKILLS_SAVE_HANDLER = "JD_ADDITIONAL_INFO_RECOMMENDED_SKILLS_SAVE_HANDLER";
export const JD_ADDITIONAL_INFO_SEARCH_SAVE_SKILL_TITLE_HANDLER ="JD_ADDITIONAL_INFO_SEARCH_SAVE_SKILL_TITLE_HANDLER";

export const textFieldChangeHandler = (name, value) => dispatch => {
    dispatch({
        type: JD_ADDITIONAL_INFO_TEXT_CHANGE_HANDLER,
        payload: value,
        key: name
    });
};

export const saveUpdatedSkillTitle = (value) => dispatch => {
    let data = value.map((item) => {
        return { 
            id: item._id,
            value: item.title,
            label: item.title
            
        }
    })
    dispatch({
        type: JD_ADDITIONAL_INFO_SEARCH_SAVE_SKILL_TITLE_HANDLER,
        payload: data,
        key: "skillsField"
       
    });
};


export const selectFieldChangeHandler = (name, value) => dispatch => {
    dispatch({
        type: JD_ADDITIONAL_INFO_SELECT_CHANGE_HANDLER,
        payload: value,
        key: name
    });
};

export const submitSkillFormHandler = (value) => dispatch => {
    dispatch({
        type: JD_ADDITIONAL_INFO_ADD_NEW_SKILL_HANDLER,
        payload: value,
    });
}

export const submitLanguageFormHandler = (value) => dispatch => {
    dispatch({
        type: JD_ADDITIONAL_INFO_ADD_NEW_LANGUAGE_HANDLER,
        payload: value,
    });
}

export const recommendedSkillActiveHandler = (value) => dispatch => {
    dispatch({
        type: JD_ADDITIONAL_INFO_RECOM_SKILL_ACTIVE_HANDLER,
        payload: value,
    });

    dispatch({
        type: JD_ADDITIONAL_INFO_ADD_NEW_SKILL_HANDLER,
        payload: value,
    });
}

export const removeSkillHandler = (value) => dispatch => {
    dispatch({
        type: JD_ADDITIONAL_INFO_REMOVE_SKILL_HANDLER,
        payload: value,
    });
}

export const removeLanguageHandler = (value) => dispatch => {
    dispatch({
        type: JD_ADDITIONAL_INFO_REMOVE_LANGUAGE_HANDLER,
        payload: value,
    });
}

export const fetchDataIfNeeded = (value) => dispatch => {
    
    let data = value;

    let skillsData = data.skills ? data.skills.map(item => {
        return {
            id: item._id,
            title: item.title,
            level: item.level,
            importance: item.importance,
        }
    }) : []

    //save lanauges 
    dispatch({
        type: JD_ADDITIONAL_INFO_RECOMMENDED_SKILLS_SAVE_HANDLER,
        payload: skillsData,
    });

    dispatch({
        type: JD_ADDITIONAL_INFO_REMOVE_LANGUAGE_HANDLER,
        payload: value,
    });
}

