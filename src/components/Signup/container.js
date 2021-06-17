import { connect } from "react-redux";
import SignupPage from "./component";
import {
    textFieldChangeHandler,
    signUpCorrectlyHandler,
    setErrorHandler
} from "./actions";
import {
    handleLoadingSpinnerClose,
    handleLoadingSpinnerOpenWithOptions
} from "../common/ReduxBased/LoadingSpinner/actions";

import instance, { BASE_URL_SQL } from "../../api/config";

const mapStateToProps = state => ({
    fields: state.SIGNUP.forms.signupForm.fields,
    isSignUp: state.SIGNUP.UISettings.isSignUp,
    error: state.SIGNUP.UISettings.error
})

const mapDispatchToProps = (dispatch, props) => ({
    textFieldChangeHandler: (name, e) => {
        if (typeof e.value !== "string") {
            e.value = "";
        }
        dispatch(textFieldChangeHandler(name, e));
    },
    submitSignUpHandler: (email, userNameField, password, confirmPassword) => {
        let data = {
            Email: email,
            Password: password,
            R_Password: confirmPassword,
            Username: userNameField
        }

        
        dispatch(handleLoadingSpinnerOpenWithOptions(true, "Loading...", "large"));
        instance.post(BASE_URL_SQL+'Reg', data)
        .then(res => {
            if(res.data.statusCode === 404) {
                dispatch(setErrorHandler(res.data.error));
                dispatch(signUpCorrectlyHandler(false))
            }else {
                dispatch(setErrorHandler(""));
                dispatch(signUpCorrectlyHandler(true))
            }
            dispatch(handleLoadingSpinnerClose());
        })
        .catch(error => {
            dispatch(signUpCorrectlyHandler(false))
            dispatch(handleLoadingSpinnerClose());
        })
    }
})

const mergeProps = (stateProps, dispatchProps, ownProps) => ({
    ...stateProps,
    ...dispatchProps,
    submitSignUpHandler: () => {
        dispatchProps.submitSignUpHandler(stateProps.fields.EmailField.value, stateProps.fields.userNameField.value, stateProps.fields.PasswordField.value, stateProps.fields.ConfirmPasswordField.value);
    },
    ...ownProps,
})

export default connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps
)(SignupPage);