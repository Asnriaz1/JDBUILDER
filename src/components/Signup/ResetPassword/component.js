import React, {Component} from 'react';
import { styles } from "./styles";
import { withStyles } from "@material-ui/core/styles";
import { Button, Grid } from "@material-ui/core";
import { ValidatorForm } from "react-material-ui-form-validator";
import CustomTextValidator from "../../common/ReduxBased/CustomTextValidator/component";
import { NavLink } from 'react-router-dom';

class ResetPasswordPage extends Component {

    state = {
        resetToken: ""
    }

    componentDidMount = () => {
        let token = window.location.search.replace("?ResetToken=","")
        this.setState({
            resetToken: token
        })
    }

    SubmitHandler = () => {
        this.props.submitResetFormHandler();
    }

    submitNewPasswordHandler = () => {
        this.props.submitNewPasswordHandler(this.state.resetToken);
    }


    render() {

        const {
            classes,
            fields,
            textFieldChangeHandler,
            error,
            resetPasswordMessage
        } = this.props;

        const {
            resetToken
        } = this.state;

        return (
                <div className={classes.polygonbg}>
                <Grid container className={classes.signupWrapper}>

                    <Grid item sm={4}>
                        <h1 className={classes.signuptitle} >Reset Password</h1>
                        <p className={classes.signupsubtitle} >
                            {
                                resetToken ? "Enter your new password" : 
                                "Enter your email so we can send you a link to reset your password"
                            }
                            </p>

                        {
                            resetToken ? <ValidatorForm
                            onSubmit={this.submitNewPasswordHandler}
                            autoComplete="off"
                            >
    
                                <CustomTextValidator
                                id={fields.PasswordField.name}
                                validations={true}
                                fullWidth={true}
                                type="password"
                                placeholder={fields.PasswordField.placeholder}
                                name={fields.PasswordField.name}
                                value={fields.PasswordField.value}
                                onChange={value => {
                                    textFieldChangeHandler(
                                        fields.PasswordField.name,
                                        value
                                    );
                                }}
                                validators={["required"]}
                                errorMessages={["Required"]}
                                className={classes.signupfields}
                                />

                                <CustomTextValidator
                                id={fields.ConfirmPasswordField.name}
                                validations={true}
                                fullWidth={true}
                                type="password"
                                placeholder={fields.ConfirmPasswordField.placeholder}
                                name={fields.ConfirmPasswordField.name}
                                value={fields.ConfirmPasswordField.value}
                                onChange={value => {
                                    textFieldChangeHandler(
                                        fields.ConfirmPasswordField.name,
                                        value
                                    );
                                }}
                                validators={["required"]}
                                errorMessages={["Required"]}
                                className={classes.signupfields}
                                />
    
                                {
                                    resetPasswordMessage ? <span className={classes.error}>{resetPasswordMessage}</span> : null
                                }

                                {
                                    resetPasswordMessage  === "Password updated successfully" ? 
                                    <NavLink
                                        to={'/login'}
                                        className={classes.signupSubmitBtn}
                                    >
                                        Login
                                    </NavLink> : 
                                    <Button variant="contained" color="primary" type="submit" className={classes.signupSubmitBtn} >
                                        Reset Password
                                    </Button>
                                }
                                
    
                            </ValidatorForm> : 

                            <ValidatorForm
                        onSubmit={this.SubmitHandler}
                        autoComplete="off"
                        >

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
                            className={classes.signupfields}
                            />

                            {
                                error ? <span className={classes.error}>{error}</span> : null
                            }

                            <Button variant="contained" color="primary" type="submit" className={classes.signupSubmitBtn} >
                                Send
                            </Button>

                        </ValidatorForm>
                        }
                        
                    </Grid>
                   
                </Grid>
                </div>
        )
    }
}

export default withStyles(styles)(ResetPasswordPage);