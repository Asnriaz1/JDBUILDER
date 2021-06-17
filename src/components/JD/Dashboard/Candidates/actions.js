import * as _ from "lodash";

export const JD_ADVERTISE_SAVE_SUGGESTED_CANDIDATES_HANDLER = "JD_ADVERTISE_SAVE_SUGGESTED_CANDIDATES_HANDLER";


export const saveSuggestedCandidates = (value) => dispatch => {

    let newValue = value.sort((a, b) => (a.candidate_Matched_Stats.candidate_Matched_Percentage < b.candidate_Matched_Stats.candidate_Matched_Percentage) ? 1 : -1)

    dispatch({
        type: JD_ADVERTISE_SAVE_SUGGESTED_CANDIDATES_HANDLER,
        payload: newValue,
    });
}
