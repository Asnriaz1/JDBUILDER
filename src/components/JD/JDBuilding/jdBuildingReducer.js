import {
    JD_LANDING_HEADER_ACTIVE_CHANGE_HANDLER,
    JD_LANDING_HEADER_ACTIVE_PATH_CHANGE_HANDLER,
    JD_DOWNLOAD_DATA_SAVE_HANDLER
} from "./actions";

export const jdBuildingReducer = (state = [], action) => {
    switch (action.type) {

        case JD_LANDING_HEADER_ACTIVE_CHANGE_HANDLER: {

            const updatedHeaderLinks = state.data.headerLinks;
            updatedHeaderLinks[action.payload].isActive = true;

            return {
                ...state,
                data: {
                    ...state.data,
                    headerLinks: [...updatedHeaderLinks]
                }
            }
        }
        case JD_LANDING_HEADER_ACTIVE_PATH_CHANGE_HANDLER: {
            return {
                ...state,
                data: {
                    ...state.data,
                    activePath: action.payload
                }
            }
        }

        case JD_DOWNLOAD_DATA_SAVE_HANDLER: {
            return {
                ...state,
                data: {
                    ...state.data,
                    downloadData: action.payload
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