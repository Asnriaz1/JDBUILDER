import {
    handleLoadingSpinnerClose,
    handleLoadingSpinnerOpenWithOptions
} from "../common/ReduxBased/LoadingSpinner/actions";
import ls from 'local-storage'

import instance, { BASE_URL_SQL } from "../../api/config";
import { reverseString } from "./../common/Helpers";
export const LOGIN_PAGE_TEXT_CHANGE_HANDLER = "LOGIN_PAGE_TEXT_CHANGE_HANDLER";
export const LOGIN_SUBMIT_FORM_HANDLER = "LOGIN_SUBMIT_FORM_HANDLER";
export const LOGIN_PAGE_ERROR_HANDLER = "LOGIN_PAGE_ERROR_HANDLER";
export const LOGIN_STATE_CHANGE_HANDLER = "LOGIN_STATE_CHANGE_HANDLER";


export const textFieldChangeHandler = (name, value) => dispatch => {
    dispatch({
        type: LOGIN_PAGE_TEXT_CHANGE_HANDLER,
        payload: value,
        key: name
    });
};
export const loginStateChange =() => dispatch => {
    dispatch ({
    type:LOGIN_STATE_CHANGE_HANDLER,
   
    });
}
export const submitFormHandler = (value) => dispatch => {
    let resObj = {};
    let keys_needed = ["access_token", "userText", "userType"];

    dispatch(handleLoadingSpinnerOpenWithOptions(true, "Loading...", "large"));
    instance.post(BASE_URL_SQL + 'Login', value)
        .then(res => {
            if (res.data.statusCode === 404) {
                dispatch({
                    type: LOGIN_PAGE_ERROR_HANDLER,
                    payload: res.data.error,
                });
              
            }
            dispatch(handleLoadingSpinnerClose());
             
            keys_needed.map(item => {
                resObj[reverseString(item)] = res.data[item];
                return item;
            });
            resObj[reverseString("user_id")] = res.data.userId;
            ls.set('userId', res.data.userId);
            resObj[reverseString("nameTitle")] = res.data.userText ? res.data.userText : res.data.user_name.toUpperCase();
            localStorage.setItem(reverseString("app_store"), JSON.stringify(resObj));
            dispatch({
                type: LOGIN_SUBMIT_FORM_HANDLER,
                payload: res.data
            });
            dispatch({
                type:LOGIN_STATE_CHANGE_HANDLER,
            }
            );

            // if(window.location.pathname === "/login") {
            //     window.location.replace("/user");
            // }else {
            //    window.location.replace(window.location.pathname);
            // }
        })
        .catch(error => {
            dispatch(handleLoadingSpinnerClose());
        })
}
