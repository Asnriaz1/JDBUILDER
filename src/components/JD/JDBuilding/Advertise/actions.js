import * as _ from "lodash";
export const JD_ADVERTISE_TEXT_CHANGE_HANDLER = "JD_ADVERTISE_TEXT_CHANGE_HANDLER";
export const JD_ADVERTISE_PROFILE_SAVE_HANDLER = "JD_ADVERTISE_PROFILE_SAVE_HANDLER";
export const JD_ADVERTISE_SAVE_SUGGESTED_CANDIDATES_HANDLER = "JD_ADVERTISE_SAVE_SUGGESTED_CANDIDATES_HANDLER";

export const textFieldChangeHandler = (name, value) => dispatch => {
    dispatch({
        type: JD_ADVERTISE_TEXT_CHANGE_HANDLER,
        payload: value,
        key: name
    });
};

export const saveProfileData = (value) => dispatch => {
    dispatch({
        type: JD_ADVERTISE_PROFILE_SAVE_HANDLER,
        payload: value,
    });
}

export const saveSuggestedCandidates = (value) => dispatch => {

    let newValue = value.sort((a, b) => (a.candidate_Matched_Stats.candidate_Matched_Percentage < b.candidate_Matched_Stats.candidate_Matched_Percentage) ? 1 : -1)

    dispatch({
        type: JD_ADVERTISE_SAVE_SUGGESTED_CANDIDATES_HANDLER,
        payload: newValue,
    });
}
