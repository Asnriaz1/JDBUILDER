import React, {Component} from 'react';
import { styles } from "./styles";
import { withStyles } from "@material-ui/core/styles";
import { Button, Grid } from "@material-ui/core";
import { ValidatorForm } from "react-material-ui-form-validator";
import CustomTextValidator from "./../common/ReduxBased/CustomTextValidator/component";
import { Redirect } from "react-router-dom";
import SignUpRightImg from  "../../resources/images/signup.png";
class SignupPage extends Component {


    SubmitHandler = () => {
        this.props.submitSignUpHandler();
    }


    render() {

        const {
            classes,
            fields,
            textFieldChangeHandler,
            isSignUp,
            error
        } = this.props;
        return (
            isSignUp ? 
            <Redirect to="/confirmation_pending"/>
            : <>
                <div className={classes.polygonbg}>
                <Grid container className={classes.signupWrapper}>
                    {/* signup header starts here */}
                    {/* signup header ends here */}

                    <Grid item sm={4}>
                        <h1 className={classes.signuptitle} >Sign Up</h1>

                        {/* <div className={classes.selectLoginOpt}>
                            <Button  className={this.state.loginId === 1 ? classes.professionalLogin : classes.corporateLogin} onClick={(e) => this.selectedLogin(1)}>
                                Candidate
                            </Button>
                            
                            <Button className={this.state.loginId === 2 ? classes.professionalLogin : classes.corporateLogin} onClick={(e) => this.selectedLogin(2)}>
                                Corporate
                            </Button>
                        </div> */}
                        {/* <h1  >Sign Up </h1> */}
                        <p className={classes.signupsubtitle} >Sign up to Gigtal by using a valid email address.</p>
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
                            validators={["required"]}
                            errorMessages={["Required"]}
                            className={classes.signupfields}
                            />

                            <CustomTextValidator
                            id={fields.userNameField.name}
                            validations={true}
                            fullWidth={true}
                            type="text"
                            placeholder={fields.userNameField.placeholder}
                            name={fields.userNameField.name}
                            value={fields.userNameField.value}
                            onChange={value => {
                                textFieldChangeHandler(
                                    fields.userNameField.name,
                                    value
                                );
                            }}
                            validators={["required"]}
                            errorMessages={["Required"]}
                            className={classes.signupfields}
                            />

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
                                error ? <span className={classes.error}>{error}</span> : null
                            }

                            <Button variant="contained" color="primary" type="submit" className={classes.signupSubmitBtn} >
                                Sign Up
                            </Button>
                            <div >
                                <div className={classes.signUpOptionsRight}>
                                <span style={{fontSize : 15}}>already have an account? <a href="/login">Sign in</a> </span>
                                </div> 
                               

                            
                        </div>

                        </ValidatorForm>
                    </Grid>
                    <Grid item sm={2}>
                    </Grid>
                    <Grid item sm={6} className="dNoneRightSignup">
                        <div className={classes.signupRightWrapper}>
                            <div className="signuprightwithbg">
                                <div className="wrapperborder"></div>
                                <h1 className={classes.textAboveImage}>Join Hands With Us</h1>
                                <img src={SignUpRightImg} />
                            </div>
                            
                        </div>
                    </Grid>
                   
                </Grid>
                </div>
            </>
        )
    }
}

export default withStyles(styles)(SignupPage);