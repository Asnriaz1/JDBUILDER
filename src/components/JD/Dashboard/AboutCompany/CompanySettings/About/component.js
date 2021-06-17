import React, {Component} from 'react';
import { styles } from "./styles";
import { withStyles } from "@material-ui/core/styles";
import { Button, Grid } from "@material-ui/core";
import CustomTextValidator from "../../../../../common/ReduxBased/CustomTextValidator/component";
import { ValidatorForm } from "react-material-ui-form-validator";

class CompanySettingsAbout extends Component {

    componentDidMount = () => {
        this.props.fetchDataIfNeeded();
    }

    SubmitHandler = () => {
        this.props.saveCompanyAboutInfo();
    }

    render() {
        const {
            classes,
            textFieldChangeHandler,
            fields,
            aboutInfoMessage
        } = this.props;
        
        return (
            <>
            <div className={classes.companymemberswrapper}>
                    <ValidatorForm
                        onSubmit={this.SubmitHandler}
                        autoComplete="off"
                    >
                       <Grid container>
                           <Grid item xs={12}>
                               <div className="fieldwrapper">
                                <CustomTextValidator
                                    id={fields.AboutCompanyField.name}
                                    validations={true}
                                    fullWidth={true}
                                    type="text"
                                    placeholder={fields.AboutCompanyField.placeholder}
                                    multiline={true}
                                    rows={4}
                                    maxRows={4}
                                    name={fields.AboutCompanyField.name}
                                    value={fields.AboutCompanyField.value}
                                    onChange={value => {
                                        textFieldChangeHandler(
                                            fields.AboutCompanyField.name,
                                            value
                                        );
                                    }}
                                    validators={["required"]}
                                    errorMessages={["Required"]}
                                    className="multilinefield"
                                />
                                </div>
                            </Grid>

                            <Grid item xs={12} md={6}>
                               <div className="fieldwrapper">
                                <CustomTextValidator
                                    id={fields.websiteURLField.name}
                                    validations={true}
                                    fullWidth={true}
                                    type="text"
                                    placeholder={fields.websiteURLField.placeholder}
                                    name={fields.websiteURLField.name}
                                    value={fields.websiteURLField.value}
                                    onChange={value => {
                                        textFieldChangeHandler(
                                            fields.websiteURLField.name,
                                            value
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
                                    id={fields.companyEmailField.name}
                                    validations={true}
                                    fullWidth={true}
                                    type="text"
                                    placeholder={fields.companyEmailField.placeholder}
                                    name={fields.companyEmailField.name}
                                    value={fields.companyEmailField.value}
                                    onChange={value => {
                                        textFieldChangeHandler(
                                            fields.companyEmailField.name,
                                            value
                                        );
                                    }}
                                    validators={["required"]}
                                    errorMessages={["Required"]}
                                    className="textfield"
                                />
                                </div>
                            </Grid>

                            {
                                aboutInfoMessage ? 
                                <Grid item xs={12}>
                                    <span className={classes.infomessage}>{aboutInfoMessage}</span>
                                </Grid> : ""
                            }

                            <Grid item xs={12}>
                                <Button variant="contained" color="primary" type="submit" className="submitbtn">UPDATE</Button>
                            </Grid>
                        </Grid>
                    </ValidatorForm>
                </div>
            </>
        )
    }
}

export default withStyles(styles)(CompanySettingsAbout);