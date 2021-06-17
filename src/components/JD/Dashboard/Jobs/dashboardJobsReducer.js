import {
    JD_DASHBOARD_JOBS_SAVE_COMPLETE_TEMPLATE_HANDLER,
    JD_DASHBOARD_JOBS_SAVE_INCOMPLETE_TEMPLATE_HANDLER,
    JD_DASHBOARD_JOBS_SAVE_INCOLLABORATION_TEMPLATE_HANDLER,
    JD_DASHBOARD_JOBS_SAVE_COLLABORATIONCOMPLETE_TEMPLATE_HANDLER,
    JD_DASHBOARD_JOBS_SAVE_COLLABORATORS_WITH_STATUS_HANDLER
} from "./actions";

export const dashboardJobsReducer = (state = [], action) => {
    switch (action.type) {

        case JD_DASHBOARD_JOBS_SAVE_COMPLETE_TEMPLATE_HANDLER: {
            return {
                ...state,
                data: {
                    ...state.data,
                    JDs: {
                        ...state.data.JDs,
                        complete: [...action.payload]
                    }
                }
            }
        }

        case JD_DASHBOARD_JOBS_SAVE_INCOMPLETE_TEMPLATE_HANDLER: {
            return {
                ...state,
                data: {
                    ...state.data,
                    JDs: {
                        ...state.data.JDs,
                        incomplete: [...action.payload]
                    }
                }
            }
        }

        case JD_DASHBOARD_JOBS_SAVE_INCOLLABORATION_TEMPLATE_HANDLER: {
            return {
                ...state,
                data: {
                    ...state.data,
                    JDs: {
                        ...state.data.JDs,
                        incollaboration: [...action.payload]
                    }
                }
            }
        }

        case JD_DASHBOARD_JOBS_SAVE_COLLABORATIONCOMPLETE_TEMPLATE_HANDLER: {
            return {
                ...state,
                data: {
                    ...state.data,
                    JDs: {
                        ...state.data.JDs,
                        collaborationComplete: [...action.payload]
                    }
                }
            }
        }

        case JD_DASHBOARD_JOBS_SAVE_COLLABORATORS_WITH_STATUS_HANDLER: {
            return {
                ...state,
                data: {
                    ...state.data,
                    collaborators: [...action.payload]
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