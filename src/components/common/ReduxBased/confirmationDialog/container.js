import {connect} from "react-redux";
import AlertDialog from "./component";
import {
    allowRedirectTo,
    applyAlertDialog,
    cancelAlertDialog,
    closeAlertDialog,
    showAlertDialogWithOptions
} from "./actions";

const mapStateToProps = state => ({
    open: state.ALERT_DIALOG.UISettings.alertDialog.default.open,
    message: state.ALERT_DIALOG.UISettings.alertDialog.default.message,
    type: state.ALERT_DIALOG.UISettings.alertDialog.default.type,
    showTitle: state.ALERT_DIALOG.UISettings.alertDialog.default.showTitle,
    title: state.ALERT_DIALOG.UISettings.alertDialog.default.title,
    cancelButtonText: state.ALERT_DIALOG.UISettings.alertDialog.default.cancelButtonText,
    applyButtonText: state.ALERT_DIALOG.UISettings.alertDialog.default.applyButtonText,
    hideCancelButton:state.ALERT_DIALOG.UISettings.alertDialog.default.hideCancelButton,
    hideApplyButton:state.ALERT_DIALOG.UISettings.alertDialog.default.hideApplyButton,
    isChanged: false,
    maxWidth: state.ALERT_DIALOG.UISettings.alertDialog.default.maxWidth,
    redirect: state.ALERT_DIALOG.UISettings.alertDialog.default.redirect,
    actionType: state.ALERT_DIALOG.UISettings.alertDialog.default.actionType,
    alertDialog: state.ALERT_DIALOG.UISettings.alertDialog
});

const mapDispatchToProps = (dispatch, props) => ({
    cancelAlertDialog: (name) => {
        dispatch(cancelAlertDialog(name));
    },
    applyAlertDialog: (name, actionType) => {
        dispatch(applyAlertDialog(name, actionType));
    },
    closeAlertDialog: (name) => {
        dispatch(closeAlertDialog(name));
    },
    showAlertDialogWithOptions: () => {
        dispatch(showAlertDialogWithOptions("There is unsaved data on the form, if you navigate, data will be lost. Are you sure you want to continue?", true, null, "warning"));
    },
    allowRedirectTo: location => {
        dispatch(allowRedirectTo(location));
    }
});

const mergeProps = (stateProps, dispatchProps, ownProps) => ({
    ...stateProps,
    ...dispatchProps,
    open: (!!stateProps.alertDialog[ownProps.name]) ? stateProps.alertDialog[ownProps.name].open : stateProps.open,
    message: (!!stateProps.alertDialog[ownProps.name]) ? stateProps.alertDialog[ownProps.name].message : stateProps.message,
    type: (!!stateProps.alertDialog[ownProps.name]) ? stateProps.alertDialog[ownProps.name].type : stateProps.type,
    showTitle: (!!stateProps.alertDialog[ownProps.name]) ? stateProps.alertDialog[ownProps.name].showTitle : stateProps.showTitle,
    title: (!!stateProps.alertDialog[ownProps.name]) ? stateProps.alertDialog[ownProps.name].title : stateProps.title,
    cancelButtonText: (!!stateProps.alertDialog[ownProps.name]) ? stateProps.alertDialog[ownProps.name].cancelButtonText : stateProps.cancelButtonText,
    applyButtonText: (!!stateProps.alertDialog[ownProps.name]) ? stateProps.alertDialog[ownProps.name].applyButtonText : stateProps.applyButtonText,
    hideCancelButton: (!!stateProps.alertDialog[ownProps.name]) ? stateProps.alertDialog[ownProps.name].hideCancelButton : stateProps.hideCancelButton,
    hideApplyButton: (!!stateProps.alertDialog[ownProps.name]) ? stateProps.alertDialog[ownProps.name].hideApplyButton : stateProps.hideApplyButton,
    isChanged: (!!stateProps.alertDialog[ownProps.name]) ? stateProps.alertDialog[ownProps.name].isChanged : stateProps.isChanged,
    maxWidth: (!!stateProps.alertDialog[ownProps.name]) ? stateProps.alertDialog[ownProps.name].maxWidth : stateProps.maxWidth,
    redirect: (!!stateProps.alertDialog[ownProps.name]) ? stateProps.alertDialog[ownProps.name].redirect : stateProps.redirect,
    actionType: (!!stateProps.alertDialog[ownProps.name]) ? stateProps.alertDialog[ownProps.name].actionType : stateProps.actionType,
    applyAlertDialog: () => {
        // @todo Use Store Object to use latest values.
        dispatchProps.applyAlertDialog(ownProps.name, stateProps.alertDialog[ownProps.name].actionType);
    },
    cancelAlertDialog: () => {
        dispatchProps.cancelAlertDialog(ownProps.name);
    },
    closeAlertDialog: () => {
        dispatchProps.closeAlertDialog(ownProps.name);
    },
    ...ownProps,
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps
)(AlertDialog);
