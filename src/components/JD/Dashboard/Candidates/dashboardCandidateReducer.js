import {
  
    JD_ADVERTISE_SAVE_SUGGESTED_CANDIDATES_HANDLER
} from "./actions";

export const jobAdvertiseReducer = (state = [], action) => {
    switch (action.type) {
    

        case JD_ADVERTISE_SAVE_SUGGESTED_CANDIDATES_HANDLER: {
            return {
                ...state,
                data: {
                    ...state.data,
                    candidateList: [...action.payload]
                }
            }
        }

        default: {
            return {
                ...state
            };
        }
    }
}