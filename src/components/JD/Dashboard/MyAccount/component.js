import React, {Component} from 'react';
import { styles } from "./styles";
import { withStyles } from "@material-ui/core/styles";
import { Button, Grid } from "@material-ui/core";
import CustomTextValidator from "../../../common/ReduxBased/CustomTextValidator/component";
import ReactSelectValidator from "../../../common/ReduxBased/CustomReactSelectValidator/ReactSelectValidator";
import { ValidatorForm } from "react-material-ui-form-validator";

class MyAccount extends Component {
    render() {
        const {
            classes,
            textFieldChangeHandler
        } = this.props;
        
        return (
            <div className={classes.settingsmainrapper}>
                <div className={classes.settingswrapper}>
                    <p>Manage your Account Settings here.</p>

                    <ValidatorForm>
                       <Grid container>
                           <Grid item xs={12} md={6}>
                               <div className="fieldwrapper">
                                <CustomTextValidator
                                    // id={fields.jobTitleField.name}
                                    validations={true}
                                    fullWidth={true}
                                    type="text"
                                    placeholder="Email"
                                    // name={fields.jobTitleField.name}
                                    // value={fields.jobTitleField.value}
                                    onChange={value => {
                                        textFieldChangeHandler(
                                            // fields.jobTitleField.name,
                                            // value
                                        );
                                    }}
                                    validators={["required"]}
                                    errorMessages={["Required"]}
                                    className="textfield"
                                />
                                </div>
                            </Grid>

                            <Grid item xs={12} md={6}>
                               <div className="fieldwrapper">
                                <CustomTextValidator
                                    // id={fields.jobTitleField.name}
                                    validations={true}
                                    fullWidth={true}
                                    type="text"
                                    placeholder="Password"
                                    // name={fields.jobTitleField.name}
                                    // value={fields.jobTitleField.value}
                                    onChange={value => {
                                        textFieldChangeHandler(
                                            // fields.jobTitleField.name,
                                            // value
                                        );
                                    }}
                                    validators={["required"]}
                                    errorMessages={["Required"]}
                                    className="textfield"
                                />
                                </div>
                            </Grid>

                            <Grid item xs={12}>
                                <Button variant="contained" color="primary" className="submitbtn">UPDATE</Button>
                            </Grid>
                        </Grid>
                    </ValidatorForm>
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(MyAccount);