import { INFO_DIALOG } from "../InfoDialogue/initialState";

export const ALERT_DIALOG = {
    UISettings: {
        alertDialog: {
            default: {
                open: false,
                message: "",
                type: "warning", // (warning,success,error,info)
                showTitle: false,
                title: "",
                maxWidth: "sm",
                result: false,
                cancelButtonText: "Cancel",
                applyButtonText: "Confirm",
                hideCanelButton:false,
                hideApplyButton:false,
                actionType: null,
                redirect: {
                    status: false,
                    path: "",
                    pathUpdated: false
                }
            }
        },
        ...INFO_DIALOG.UISettings
    }
};
