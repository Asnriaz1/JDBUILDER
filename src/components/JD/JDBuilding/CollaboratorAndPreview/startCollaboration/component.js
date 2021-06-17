import React, { Component } from 'react';
import { styles } from "./styles";
import { withStyles } from "@material-ui/core/styles";
import { Button, Grid } from "@material-ui/core";
import { ValidatorForm } from "react-material-ui-form-validator";
import CustomTextValidator from "../../../../common/ReduxBased/CustomTextValidator/component";
import axios from "axios";
import { BASE_URL_COL } from "../../../../../api/config";
import {getAppStoreValue} from "../../../../common/Helpers";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import ls from 'local-storage';

const accessToken = getAppStoreValue("access_token")

class StartCollaboration extends Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };

    }
    componentDidMount() {

        
    }
    render() {
        const {
            classes,
          
        } = this.props;
       ;
        return (
            <div className={classes.addcollaboraterwrapper}>
                   <>
                    <AlertDialog
                        customClass={classes.removeSubActionMainDialog}
                        maxWidth={isLogin ? 'md' : 'sm'}
                        open={this.state.loginOpen}
                        showTitle={true}
                        title={isLogin ? "Job Description Manager" : "Login"}
                        message={isLogin ? <AddCollaboration /> : <Login isPopup={true} />}
                        applyButtonText={"Send"}
                        hideApplyButton={addedCollaborator.Collab_email ? false : true}
                        cancelAlertDialog={() => this.showLoginAlertDialog(false)}
                        closeAlertDialog={() => this.showLoginAlertDialog(false)}
                        applyAlertDialog={() => this.showLoginAlertDialogAndSend(false)}
                    />

                 
            </>
            </div>
        )
    }
}

export default withStyles(styles)(StartCollaboration);