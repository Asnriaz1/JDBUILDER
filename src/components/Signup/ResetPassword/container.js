import { connect } from "react-redux";
import ResetPasswordPage from "./component";
import {
    textFieldResetChangeHandler,
    saveResetPasswordError,
    setResetPasswordMassage
} from "../actions";
import {
    handleLoadingSpinnerClose,
    handleLoadingSpinnerOpenWithOptions
} from "../../common/ReduxBased/LoadingSpinner/actions";

import instance, { BASE_URL_SQL } from "../../../api/config";

const mapStateToProps = state => ({
    fields: state.SIGNUP.forms.resetPasswordForm.fields,
    error: state.SIGNUP.UISettings.resetPasswordError,
    resetPasswordMessage: state.SIGNUP.UISettings.resetPasswordMessage
})

const mapDispatchToProps = (dispatch, props) => ({
    textFieldChangeHandler: (name, e) => {
        if (typeof e.value !== "string") {
            e.value = "";
        }
        dispatch(textFieldResetChangeHandler(name, e));
    },
    submitResetFormHandler: (email) => {
        
        dispatch(handleLoadingSpinnerOpenWithOptions(true, "Sending Email...", "large"));
        instance.get(BASE_URL_SQL+'PasswordReset?Email='+email)
        .then(res => {
            dispatch(saveResetPasswordError(res.data.message))
            dispatch(handleLoadingSpinnerClose());
        })
        .catch(error => {
            dispatch(handleLoadingSpinnerClose());
        })
    },
    submitNewPasswordHandler: (token, PasswordField, ConfirmPasswordField) => {
        let data = {
            Password: PasswordField ,
            R_Password: ConfirmPasswordField
        }
        dispatch(handleLoadingSpinnerOpenWithOptions(true, "Updating Password...", "large"));

        instance.put(BASE_URL_SQL+'PasswordReset/Reset', data,
        {
            headers: {
                authorization: `Bearer ${token}`
            }
        })
        .then(res => {
            dispatch(handleLoadingSpinnerClose());
            dispatch(setResetPasswordMassage(res.data.message))
        })
        .catch(error => {
            dispatch(handleLoadingSpinnerClose());
        })
    }
})

const mergeProps = (stateProps, dispatchProps, ownProps) => ({
    ...stateProps,
    ...dispatchProps,
    submitResetFormHandler: () => {
        dispatchProps.submitResetFormHandler(stateProps.fields.EmailField.value);
    },
    submitNewPasswordHandler: (token) => {
        dispatchProps.submitNewPasswordHandler(token, stateProps.fields.PasswordField.value, stateProps.fields.ConfirmPasswordField.value);
    },
    ...ownProps,
})

export default connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps
)(ResetPasswordPage);