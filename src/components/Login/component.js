import React, {Component} from 'react';
import { styles } from "./styles";
import { withStyles } from "@material-ui/core/styles";
import { Button, Grid } from "@material-ui/core";
import { ValidatorForm } from "react-material-ui-form-validator";
import CustomTextValidator from "./../common/ReduxBased/CustomTextValidator/component";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Redirect, NavLink } from "react-router-dom";
import loginImage from "../../resources/images/login.PNG"
class LoginPage extends Component {
    SubmitHandler = () => {
        // window.location.replace("/candidate")
        this.props.submitFormHandler()
    }

    render() {
        const { 
            classes,
            fields,
            textFieldChangeHandler, 
            isLogin, 
            isPopup,
            error,
            submitandSaveBtn
        } = this.props;

        return (
            isLogin ? 
            <Redirect to="/user"/> 
            :
            <>
            <div className={isPopup ? "" :classes.polygonbg}>
                 <Grid container className={isPopup ? "" : classes.loginWrapper} justify="center">
                    <Grid item xs={12} sm={12} md={isPopup ? 12 : 4} className={isPopup ? "" : classes.loginContainer}>
                        <h1  >Log In </h1>
                        <ValidatorForm
                        onSubmit={submitandSaveBtn ? submitandSaveBtn : this.SubmitHandler}
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
                                className={classes.loginfields}
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
                                className={classes.loginfields}
                            />
                            {
                                error ? <span className={classes.error}>{error}</span> : null
                            }
                              <div className={classes.passwordOptions}>
                              <FormControlLabel className={classes.rememberMECheckbox}
                                value="end"
                                control={<Checkbox color="primary" />}
                                label="Remember me"
                                labelPlacement="end"
                                />
                            <NavLink to={'/resetpassword'} className={classes.forgetPassword}>Forget your password</NavLink>

                            
                        </div>

                           
                            <Button variant="contained" color="primary" type="submit" className={classes.loginSubmitBtn} >
                                Login
                            </Button>
                            <div className={classes.passwordOptions}>
                                <p className={classes.passwordOptionsLeft}>Don't have account? <a href="/signup">Sign up</a> </p>
                        </div>
                        </ValidatorForm>
                    </Grid>
                    <Grid item sm={2}>
                    </Grid>
                    <Grid item sm={6} className="dNoneRightLogin">
                    <div className={classes.loginRightWrapper}>
                            <div className="loginrightwithbg">
                                <div className="wrapperborder"></div>
                                <img src={loginImage} />
                            </div>
                            
                        </div>
                    </Grid>
                  
                </Grid>
                </div>
            </>
        )
    }
}

export default withStyles(styles)(LoginPage);