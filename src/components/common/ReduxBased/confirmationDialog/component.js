import React, {Component} from "react";
import {withStyles} from "@material-ui/core/styles";
import {styles} from "./styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import Grid from "@material-ui/core/Grid";
import {Prompt, Redirect} from "react-router-dom";

class AlertDialog extends Component {
    constructor(props) {
        super(props);
        this.__trigger = Symbol.for(`__PreventTransitionPrompt_${Date.now()}`);
    }

    componentDidMount() {
        window[this.__trigger] = this.show;
    }

    componentWillUnmount() {
        delete window[this.__trigger];
    }

    render() {
        const {
            classes,
            open,
            showTitle,
            title,
            message,
            cancelButtonText,
            applyButtonText,
            isChanged,
            redirect,
            closeAlertDialog,
            cancelAlertDialog,
            applyAlertDialog,
            maxWidth,
            customClass,
            hideApplyButton,
            hideCancelButton,
            disableBackdropClick
        } = this.props;
        return (
            <>
                <Prompt when={isChanged} message={this.handleTransition}/>
                {!!redirect && !!redirect.status && redirect.status === true ? (
                    <Redirect to={redirect.path}/>
                ) : (
                    <Dialog
                        open={open}
                        keepMounted
                        disableBackdropClick={disableBackdropClick || true}
                        onClose={() => {}}
                        aria-labelledby='alert-dialog-slide-title'
                        aria-describedby='alert-dialog-slide-description'
                        maxWidth={maxWidth}
                        fullWidth={true}
                        PaperProps={{
                            square: true,
                            elevation: 24
                        }}
                        className={`${classes.confirmationDialog} ${!!customClass ? customClass : ''}`}
                        // scroll={'body'}
                    >
                        {showTitle ? <DialogTitle id={'dialogtitle'} disableTypography={true}
                                                  classes={{root: classes.dialogTitle}}>{title}</DialogTitle> : <span/>}
                        <DialogContent id={'dialogcontent'}>
                            <Grid container justify={"center"}>
                                <Grid item xs={12}>
                                    <DialogContentText id={'dialogcontenttext'} component={"div"}
                                                       className={classes.contentText}>{message}</DialogContentText>
                                </Grid>
                            </Grid>
                        </DialogContent>
                        <DialogActions>
                            {!!cancelButtonText && !hideCancelButton && (
                                <Button onClick={cancelAlertDialog} color={this.props.cancelButtonColor || "secondary"}
                                        variant={"contained"}>
                                    {cancelButtonText}
                                </Button>
                            )}
                            {!!applyButtonText && !hideApplyButton && (
                                <Button onClick={applyAlertDialog} color={this.props.applyButtonColor || "primary"}
                                        variant={"contained"} styles={{fontFamily: "inherit"}} type={"submit"}>
                                    {applyButtonText}
                                </Button>
                            )}
                        </DialogActions>
                    </Dialog>
                )}
            </>
        );
    }

    /**
     * Show the dialog. Invoked primarily from React Router transition
     * handler getUserConfirmation.
     *
     * @param allowTransitionCallback A function that accepts a flag whether or not to allow the route transition
     */
    show = allowTransitionCallback => {
        // we are immediately preventing any transitions here
        // but could just as easily base this off a user interaction
        // or other state
        this.setState({open: true}, () => allowTransitionCallback(false));
        this.props.showAlertDialogWithOptions("There is unsaved data on the form, if you navigate, data will be lost. Are you sure you want to continue?", true, null, "warning");
    };

    /**
     * Closes the dialog
     */
    handleClose = () => {
        this.setState({open: false});
    };

    /**
     * Handles the Router transition. Returns true if allowed
     * or the dialog trigger key to enable the dialog.
     *
     * This would be a good candidate to allow optionally
     * being passed as a callback prop to let
     * caller decide if transition is allowed.
     */
    handleTransition = location => {
        // example: allow transitions to /two
        // if (location.pathname === "/addPermanentPatient/camera" || location.pathname === "/addPermanentPatient") {
        // 	return true;
        // }
        if (!!this.props.allowedURIs) {
            if (this.props.allowedURIs.indexOf(location.pathname) !== -1) {
                return true;
            }
        }
        this.props.allowRedirectTo(location);
        return Symbol.keyFor(this.__trigger);
    };
}

AlertDialog.propTypes = {};

export default withStyles(styles)(AlertDialog);
