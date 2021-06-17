export const LOGIN = {
    data: {
        submitLogin: {
            result: {},
            request: {
                required: false,
                url: "login",
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
        loginForm: {
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
                }
            }
        }
    },
    UISetting: {
        isLogin: false,
        error: ""
    }
};

export default LOGIN;