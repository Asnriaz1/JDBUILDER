import {
    LOGIN_PAGE_TEXT_CHANGE_HANDLER,
    LOGIN_SUBMIT_FORM_HANDLER,
    LOGIN_PAGE_ERROR_HANDLER,
    LOGIN_STATE_CHANGE_HANDLER
 

} from "./actions";



export const loginReducer = (state = [], action) => {
    switch (action.type) {

      case LOGIN_STATE_CHANGE_HANDLER :{
          return {
              ...state,
              UISetting :{
                  isLogin:true
              }
          }
      }

        case LOGIN_PAGE_TEXT_CHANGE_HANDLER: {
            return {
                ...state,
                forms: {
                    ...state.forms,
                    loginForm: {
                        ...state.forms.loginForm,
                        fields: {
                            ...state.forms.loginForm.fields,
                            [action.key]: {
                                ...state.forms.loginForm.fields[action.key],
                                ...action.payload
                            }
                        }
                    }
                }
            };
        }

        case LOGIN_SUBMIT_FORM_HANDLER: {
            return {
                ...state,
                data: {
                    ...state.data,
                    submitLogin: {
                        ...state.data.submitLogin,
                        result: action.payload
                    }
            
                }
            };
        }

        case LOGIN_PAGE_ERROR_HANDLER: {
            return {
                ...state,
                UISetting: {
                    ...state.UISetting,
                    isLogin: false
                }
            };
        }
        default: {
            return {
                ...state
            };
        }
    }
};