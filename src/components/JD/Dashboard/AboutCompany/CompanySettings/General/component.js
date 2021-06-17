import React, {Component} from 'react';
import { styles } from "./styles";
import { withStyles } from "@material-ui/core/styles";
import { Button, Grid } from "@material-ui/core";
import CustomTextValidator from "../../../../../common/ReduxBased/CustomTextValidator/component";
import { ValidatorForm } from "react-material-ui-form-validator";

class CompanySettingGeneral extends Component {

    componentDidMount = () => {
        this.props.fetchDataIfNeeded();
    }

    SubmitHandler = () => {
        this.props.saveCompanyGeneralInfo();
    }
    render() {
        const {
            classes,
            textFieldChangeHandler,
            fields,
            generalInfoMessage
        } = this.props;
        
        return (
            <>
                <div className={classes.companygeneralwrapper}>
                    <ValidatorForm
                        onSubmit={this.SubmitHandler}
                        autoComplete="off"
                    >
                       <Grid container>
                           <Grid item xs={12}>
                               <div className="fieldwrapper">
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
                                    className="textfield"
                                />
                                </div>
                            </Grid>

                            <Grid item xs={12}>
                               <div className="fieldwrapper">
                                <CustomTextValidator
                                    id={fields.NumberField.name}
                                    validations={true}
                                    fullWidth={true}
                                    type="text"
                                    placeholder={fields.NumberField.placeholder}
                                    name={fields.NumberField.name}
                                    value={fields.NumberField.value}
                                    onChange={value => {
                                        textFieldChangeHandler(
                                            fields.NumberField.name,
                                            value
                                        );
                                    }}
                                    validators={["required"]}
                                    errorMessages={["Required"]}
                                    className="textfield"
                                />
                                </div>
                            </Grid>

                            <Grid item xs={12} md={4}>
                               <div className="fieldwrapper">
                               <CustomTextValidator
                                    id={fields.CountryField.name}
                                    validations={true}
                                    fullWidth={true}
                                    type="text"
                                    placeholder={fields.CountryField.placeholder}
                                    name={fields.CountryField.name}
                                    value={fields.CountryField.value}
                                    onChange={value => {
                                        textFieldChangeHandler(
                                            fields.CountryField.name,
                                            value
                                        );
                                    }}
                                    validators={["required"]}
                                    errorMessages={["Required"]}
                                    className="textfield"
                                />
                                </div>
                            </Grid>

                            <Grid item xs={12} md={4}>
                               <div className="fieldwrapper">
                               <CustomTextValidator
                                    id={fields.ProvinceField.name}
                                    validations={true}
                                    fullWidth={true}
                                    type="text"
                                    placeholder={fields.ProvinceField.placeholder}
                                    name={fields.ProvinceField.name}
                                    value={fields.ProvinceField.value}
                                    onChange={value => {
                                        textFieldChangeHandler(
                                            fields.ProvinceField.name,
                                            value
                                        );
                                    }}
                                    validators={["required"]}
                                    errorMessages={["Required"]}
                                    className="textfield"
                                />
                                </div>
                            </Grid>

                            <Grid item xs={12} md={4}>
                               <div className="fieldwrapper">
                               <CustomTextValidator
                                    id={fields.CityField.name}
                                    validations={true}
                                    fullWidth={true}
                                    type="text"
                                    placeholder={fields.CityField.placeholder}
                                    name={fields.CityField.name}
                                    value={fields.CityField.value}
                                    onChange={value => {
                                        textFieldChangeHandler(
                                            fields.CityField.name,
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
                                generalInfoMessage ? 
                                <Grid item xs={12}>
                                    <span className={classes.infomessage}>{generalInfoMessage}</span>
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

export default withStyles(styles)(CompanySettingGeneral);