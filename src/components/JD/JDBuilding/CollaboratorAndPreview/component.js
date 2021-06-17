import React, {Component} from 'react';
import { styles } from "./styles";
import { withStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import AlertDialog from "../../../common/ReduxBased/confirmationDialog/container";
import Login from "../../../Login/container";
import {getAppStoreValue} from "../../../common/Helpers";
import AddCollaboration from "./AddCollaboration/container";
import ls from "local-storage";
import Preview from "../Preview/container";

class CollaboratorAndPreview extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            loginOpen: false,
        }
    }

    showAlertDialog = (value) => {
        this.setState({
            open: value
        })
    }

    showLoginAlertDialog = (value) => {
        this.setState({
            loginOpen: value
        })
    }

    showLoginAlertDialogAndSend = () => {
        this.setState({
            loginOpen: false
        })
        this.props.sendCollaboration();
    }
    render() {
        const {
            classes,
            addedCollaborator
        } = this.props;
        const userId = getAppStoreValue('user_id');
        const userName = getAppStoreValue('nameTitle')
        let isLogin = userId && userName ? true : false
        return (
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

                    <AlertDialog
                        customClass={classes.removeSubActionMainDialog}
                        maxWidth={isLogin ? 'md' : 'xs'}
                        open={this.state.open}
                        showTitle={true}
                        title="JD Preivew"
                        message={isLogin ? <Preview /> : "Please Login to Preview JD"}
                        applyButtonText={"Done"}
                        hideApplyButton={true}
                        cancelAlertDialog={() => this.showAlertDialog(false)}
                        closeAlertDialog={() => this.showAlertDialog(false)}
                        applyAlertDialog={() => this.showAlertDialog(false)}
                    />
                    
                    <div className="actionbtn">
                        <Button variant="outlined" className={classes.searchsubmitbtn} onClick={() => this.showLoginAlertDialog(true)} startIcon={<AddIcon />} >
                            Add Collaborators
                        </Button>
                        <Button variant="outlined" className={classes.searchsubmitbtn} onClick={() => this.showAlertDialog(true)}>
                            Preview
                        </Button>
                    </div>
            </>
        )
    }
}

export default withStyles(styles)(CollaboratorAndPreview);