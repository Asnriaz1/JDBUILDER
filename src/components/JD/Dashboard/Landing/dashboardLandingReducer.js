import {
    JD_DASHBOARD_LANDING_COUNT_HANDLER
} from "./actions";

export const dashboardLandingReducer = (state = [], action) => {
    switch (action.type) {

        case JD_DASHBOARD_LANDING_COUNT_HANDLER: {
            return {
                ...state,
                data: {
                    ...state.data,
                    jdCount: action.payload
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