export const SIGNUP = {
    data: {
        submitSignup: {
            result: {},
            request: {
                required: false,
                url: "signup",
                params: {
                    grant_type: "password",
                    scope: "webclient"
                },
                method: "post"
            },
            error: {}
        },
    },
    forms: {
        signupForm: {
            fields: {
                EmailField: {
                    label: "Email",
                    name: "EmailField",
                    placeholder: "Email",
                    value: ""
                },
                userNameField: {
                    label: "Username",
                    name: "userNameField",
                    placeholder: "Full Name",
                    value: ""
                },
                PasswordField: {
                    label: "Password",
                    name: "PasswordField",
                    placeholder: "Password",
                    value: ""
                },
                ConfirmPasswordField: {
                    label: "ConfirmPassword",
                    name: "ConfirmPasswordField",
                    placeholder: "Re-enter Password",
                    value: ""
                }
            }
        },
        resetPasswordForm: {
            fields: {
                EmailField: {
                    label: "Email",
                    name: "EmailField",
                    placeholder: "Email",
                    value: ""
                },
                PasswordField: {
                    label: "Password",
                    name: "PasswordField",
                    placeholder: "Password",
                    value: ""
                },
                ConfirmPasswordField: {
                    label: "ConfirmPassword",
                    name: "ConfirmPasswordField",
                    placeholder: "Re-enter Password",
                    value: ""
                }
            }
        }
    },
    UISettings: {
        isSignUp: false,
        error: "",
        resetPasswordError: "",
        resetPasswordMessage: ""
    }
};

export default SIGNUP;