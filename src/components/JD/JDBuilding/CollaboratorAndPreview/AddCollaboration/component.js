import React, { Component } from 'react';
import { styles } from "./styles";
import { withStyles } from "@material-ui/core/styles";
import { Button, Grid } from "@material-ui/core";
import { ValidatorForm } from "react-material-ui-form-validator";
import CustomTextValidator from "../../../../common/ReduxBased/CustomTextValidator/component";
import axios from "axios";
import { getAppStoreValue } from "../../../../common/Helpers";
import ls from 'local-storage';
import instance, { BASE_URL_COL } from "../../../../../api/config";
import Alert from '@material-ui/lab/Alert';
import Snackbar from "@material-ui/core/Snackbar";

import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';



const accessToken = getAppStoreValue("access_token")

class AddCollaboration extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collaborators: [],
            open: false,
            severity: "",
            message: "",


        };

    }
    componentDidMount() {
        let jobCode = ls.get('jobCode');
        var job_code = JSON.parse(localStorage.getItem('jobCode'));
        console.log(jobCode);
        const url = `${BASE_URL_COL}User/GetAllCollaboratorsForBuilder?JobCode=` + job_code;
        axios.get(url,
            {
                headers: {
                    Authorization: `Bearer ${accessToken}`

                }
            }).then(response => response.data)
            .then((data) => {
                this.setState({ collaborators: data })
                console.log(this.state.collaborators)
            })
    }
    sendCollaboration = () => {
        // dispatch(handleLoadingSpinnerOpenWithOptions(true, "Sending Invite...", "large"));
        let data = {
            Collab_email: this.props.EmailField,
            Collab_Name: this.props.NameField,
            Job_Title: this.props.jobTitle,
            Job_Code: this.props.jobCode,
        }
        console.log(data)

        instance.post(BASE_URL_COL + 'User/SendCollabInvite', data)
            .then(res => {

                this.setState({
                    message: "Invited Successfully",
                    open: true,
                    severity: "success",
                }
                )
            })
            .catch(error => {
                this.setState({
                    message: "Error sending Invitation",
                    open: true,
                    severity: "warning",
                }
                )
            })
    }
    handleClose = () => {
        this.setState({
            open: false
        })

        
    }

    render() {
        const {
            classes,
            textFieldChangeHandler,
            fields,
            // open,
            addCollaboratorHandler,
            addedCollaborator,
            sendCollaboration,
            jobCode
        } = this.props;

        const open = false;

        return (
            <div className={classes.addcollaboraterwrapper}>
                <ValidatorForm
                    onSubmit={this.sendCollaboration}
                    autoComplete="off"
                >
                    <Grid container>
                        <Grid item xs={12} md={8}>
                            <span>{fields.EmailField.label}</span>
                            <CustomTextValidator
                                id={fields.EmailField.name}
                                validations={true}
                                fullWidth={true}
                                type="text"
                                placeholder={fields.EmailField.placeholder}
                                name={fields.EmailField.name}
                                value={fields.EmailField.value}
                                onChange={value => {
                                    textFieldChangeHandler(
                                        fields.EmailField.name,
                                        value
                                    );
                                }}
                                validators={[
                                    "required",
                                    "matchRegexp:^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$"
                                ]}
                                errorMessages={[
                                    "Required",
                                    "Please enter a valid email"
                                ]}
                                className={classes.collaboratorfields}
                            />
                        </Grid>

                        <Grid item xs={12} md={4}>
                            <span>{fields.NameField.label}</span>
                            <CustomTextValidator
                                id={fields.NameField.name}
                                validations={true}
                                fullWidth={true}
                                type="text"
                                placeholder={fields.NameField.placeholder}
                                name={fields.NameField.name}
                                value={fields.NameField.value}
                                onChange={value => {
                                    textFieldChangeHandler(
                                        fields.NameField.name,
                                        value
                                    );
                                }}
                                validators={["required"]}
                                errorMessages={["Required"]}
                                className={classes.collaboratorfields}
                            />
                        </Grid>


                        <Grid item xs={12} md={12}>
                            <Button color="primary" variant="contained" type="submit" className={classes.addcollaborationbtn}>Add</Button>
                        </Grid>


                        <Grid container>



                        </Grid>


                        <Grid container>
                            <Grid item lg={12}>
                                <h3>Invited Collaborators</h3>
                                {
                                    addedCollaborator ?
                                        <div className={classes.collaboratorinfo}>
                                            <span className="name" >{addedCollaborator.Collab_Name}</span>
                                            <span className="email" >{addedCollaborator.Collab_email}</span>
                                        </div> : ""
                                }
                            </Grid>
                        </Grid>



                    </Grid>
                </ValidatorForm>

                <Snackbar
                    open={this.state.open}
                    autoHideDuration={300}
                  
                    onClose={this.handleClose}
                    >
                    <Alert 
                    onClose={this.handleClose} 
                    severity={this.state.severity}>
                     {this.state.message}
                    </Alert>

                </Snackbar>


                {/* <Alert
                onClick={this.handleClose} 
                 severity={this.state.severity}
                //  open={this.state.open}
                 >
               

        </Alert> */}


            </div>

        )
    }
}

export default withStyles(styles)(AddCollaboration);