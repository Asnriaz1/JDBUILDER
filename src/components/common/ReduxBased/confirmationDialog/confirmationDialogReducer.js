import {
    ALERT_DIALOG_ADD_POST_ACTION_CLOSE,
    ALERT_DIALOG_RESET_POST_ACTIONS,
    ALERT_DIALOG_SET_REDIRECT_PATH,
    ALERT_DIALOG_SHOW_WITH_OPTIONS,
    ALERT_DIALOG_SHOW_WITH_OPTIONS_OBJECT,
    ALERT_DIALOG_UPDATE_RESULT,
    ALERT_DIALOG_VISIBILITY
} from "./actions";
import {ALERT_DIALOG} from "./initialState";
import {
    INFO_DIALOG_CLOSE,
    INFO_DIALOG_OPEN,
    INFO_DIALOG_OPEN_WITH_OPTIONS,
    INFO_DIALOG_OPEN_WITH_OPTIONS_OBJECT,
    INFO_DIALOG_RESET
} from "../InfoDialogue/actions";

export const confirmationDialogReducer = (state = ALERT_DIALOG, action) => {
    switch (action.type) {
        case ALERT_DIALOG_VISIBILITY: {
            return {
                ...state,
                UISettings: {
                    ...state.UISettings,
                    alertDialog: {
                        ...state.UISettings.alertDialog,
                        [action.name]: {
                            ...state.UISettings.alertDialog[action.name],
                            open: action.payload
                        }
                    }
                }
            };
        }
        case ALERT_DIALOG_SHOW_WITH_OPTIONS: {
            return {
                ...state,
                UISettings: {
                    ...state.UISettings,
                    alertDialog: {
                        ...state.UISettings.alertDialog,
                        open: action.payload.open,
                        message: action.payload.message,
                        type: action.payload.type,
                        showTitle: action.payload.showTitle,
                        title: action.payload.title,
                        actionType: action.payload.actionType
                    }
                }
            };
        }
        case ALERT_DIALOG_SHOW_WITH_OPTIONS_OBJECT: {
            return {
                ...state,
                UISettings: {
                    ...state.UISettings,
                    alertDialog: {
                        ...state.UISettings.alertDialog,
                        [action.name]: {
                            ...state.UISettings.alertDialog[action.name],
                            ...action.payload
                        }
                    }
                }
            };
        }
        case ALERT_DIALOG_UPDATE_RESULT: {
            return {
                ...state,
                UISettings: {
                    ...state.UISettings,
                    alertDialog: {
                        ...state.UISettings.alertDialog,
                        [action.name]: {
                            ...state.UISettings.alertDialog[action.name],
                            open: false,
                            // result: action.payload,
                            // redirect: {
                            //     ...state.UISettings.alertDialog[action.name].redirect,
                            //     status: action.payload ? state.UISettings.alertDialog[action.name].redirect.pathUpdated : action.payload,
                            //     pathUpdated: false
                            // }
                        }
                    }
                }
            };
        }
        case ALERT_DIALOG_SET_REDIRECT_PATH: {
            return {
                ...state,
                UISettings: {
                    ...state.UISettings,
                    redirect: {
                        ...state.UISettings.redirect,
                        path: action.payload,
                        pathUpdated: true
                    }
                }
            };
        }
        case ALERT_DIALOG_ADD_POST_ACTION_CLOSE: {
            let postActions = [];
            if (!!state.UISettings.alertDialog[action.key].postActionsClose && state.UISettings.alertDialog[action.key].postActionsClose.length > 0)
                postActions = [...state.UISettings.alertDialog[action.key].postActionsClose];
            else
                postActions = [];
            postActions.splice(postActions.length, 0, action.payload);
            return {
                ...state,
                UISettings: {
                    ...state.UISettings,
                    alertDialog: {
                        ...state.UISettings.alertDialog,
                        [action.key]: {
                            ...state.UISettings.alertDialog[action.key],
                            postActionsClose: postActions
                        }
                    }
                }
            };
        }
        case ALERT_DIALOG_RESET_POST_ACTIONS: {
            return {
                ...state,
                UISettings: {
                    ...state.UISettings,
                    alertDialog: {
                        ...state.UISettings.alertDialog,
                        [action.key]: {
                            ...state.UISettings.alertDialog[action.key],
                            postActions: [],
                            postActionsClose: [],
                        }
                    }
                }
            };
        }
        /*For Info Dialog*/
        case INFO_DIALOG_OPEN: {
            return {
                ...state,
                UISettings: {
                    ...state.UISettings,
                    infoDialog: {
                        ...state.UISettings.infoDialog,
                        open: true
                    }
                }
            };
        }
        case INFO_DIALOG_CLOSE: {
            return {
                ...state,
                UISettings: {
                    ...state.UISettings,
                    infoDialog: {
                        ...state.UISettings.infoDialog,
                        open: false
                    }
                }
            };
        }
        case INFO_DIALOG_OPEN_WITH_OPTIONS: {
            return {
                ...state,
                UISettings: {
                    ...state.UISettings,
                    infoDialog: {
                        ...state.UISettings.infoDialog,
                        open: action.payload.open,
                        displayType: action.payload.displayType,
                        title: action.payload.title,
                        text: action.payload.text,
                        heading: action.payload.heading,
                        image: action.payload.image
                    }
                }
            };
        }
        case INFO_DIALOG_OPEN_WITH_OPTIONS_OBJECT: {
            return {
                ...state,
                UISettings: {
                    ...state.UISettings,
                    infoDialog: {
                        ...state.UISettings.infoDialog,
                        ...action.payload
                    }
                }
            };
        }
        case INFO_DIALOG_RESET: {
            return {
                ...state,
                UISettings: {
                    ...state.UISettings,
                    ...action.payload
                }
            };
        }

        default: {
            return {
                ...state
            };
        }
    }
};
