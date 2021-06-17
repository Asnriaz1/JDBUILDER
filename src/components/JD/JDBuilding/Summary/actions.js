import {
    handleLoadingSpinnerClose,
    handleLoadingSpinnerOpenWithOptions
} from "../../../common/ReduxBased/LoadingSpinner/actions";
import {
    headerPathActiveHandler,
    pathChangeHandler
} from "../../../JD/JDBuilding/actions";
import {
    LOGIN_PAGE_ERROR_HANDLER,
    LOGIN_SUBMIT_FORM_HANDLER
} from "../../../Login/actions";
import ls from 'local-storage'

import { reverseString } from "../../../common/Helpers";
import instance, { BASE_URL, BASE_URL_SQL } from "../../../../api/config"
export const JD_JOB_SUMMARY_TEXT_CHANGE_HANDLER = "JD_JOB_SUMMARY_TEXT_CHANGE_HANDLER";
export const JD_JOB_SUMMARY_EDITOR_ACTIVE_TEXT_HANDLER = "JD_JOB_SUMMARY_EDITOR_ACTIVE_TEXT_HANDLER";
export const JD_JOB_SUMMARY_EDITOR_TEXT_HANDLER = "JD_JOB_SUMMARY_EDITOR_TEXT_HANDLER";
export const JD_JOB_SUMMARY_EDITOR_TEXT_AS_HTML_HANDLER = "JD_JOB_SUMMARY_EDITOR_TEXT_AS_HTML_HANDLER";
export const JD_TEMPLATE_SAVE_HANDLER = "JD_TEMPLATE_SAVE_HANDLER";
export const JD_TEMPLATE_SAVE_SUMMARY_SUGGESTION_HANDLER = "JD_TEMPLATE_SAVE_SUMMARY_SUGGESTION_HANDLER";
export const JD_TEMPLATE_SAVE_SUMMARY_SHOW_LOGIN_POPUP_HANDLER = "JD_TEMPLATE_SAVE_SUMMARY_SHOW_LOGIN_POPUP_HANDLER";

export const textFieldChangeHandler = (name, value) => dispatch => {
    dispatch({
        type: JD_JOB_SUMMARY_TEXT_CHANGE_HANDLER,
        payload: value,
        key: name
    });
};

export const summaryDataActiveHandler = (value) => dispatch => {
    dispatch({
        type: JD_JOB_SUMMARY_EDITOR_ACTIVE_TEXT_HANDLER,
        payload: value,
    });
};

export const saveUpdatedSummaryEditor = (value) => dispatch => {
    dispatch({
        type: JD_JOB_SUMMARY_EDITOR_TEXT_HANDLER,
        payload: value,
    });
};

export const saveUpdatedSummaryAsHTML = (value) => dispatch => {
    dispatch({
        type: JD_JOB_SUMMARY_EDITOR_TEXT_AS_HTML_HANDLER,
        payload: value,
    });
};

export const loginandSubmitTemplateHandler = (value,data) => dispatch => {
    debugger
    let resObj = {};
    let keys_needed = ["access_token", "userText", "userType"];
console.log(value)
    dispatch(handleLoadingSpinnerOpenWithOptions(true, "Signing In", "large"));
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
            resObj[reverseString("nameTitle")] = res.data.userText ? res.data.userText : res.data.user_name.toUpperCase();
            localStorage.setItem(reverseString("app_store"), JSON.stringify(resObj));
            dispatch({
                type: LOGIN_SUBMIT_FORM_HANDLER,
                payload: res.data
            });

            dispatch({
                type: JD_TEMPLATE_SAVE_SUMMARY_SHOW_LOGIN_POPUP_HANDLER,
                payload: false,
            });

            let jobCode = res.data.jobCode;
            ls.set('jobCode', jobCode);

            let userId = res.data.userId;
            ls.set('userId', userId);

            data.job_code = jobCode;

           

            // let JDIndustry = JOindustryField ? JOindustryField[0].id : ""
            // let JDFunction = JOfunctionField ? JOfunctionField[0].id : ""
        //  data._selected_skills=_selected_skills;
        //  data._selected_languages= _selected_languages;
console.log('data is here',data)
            dispatch(handleLoadingSpinnerOpenWithOptions(true, "Saving JD", "large"));
            instance.post(BASE_URL + 'Templates', data)
                .then(res => {
                    dispatch(handleLoadingSpinnerClose());
                   window.location.replace('/create/advertise')
             
                   dispatch(headerPathActiveHandler(2))
                //    dispatch(pathChangeHandler("/create/advertise"))

                })
                .catch(error => {
                    debugger
                    dispatch(handleLoadingSpinnerClose());
                })

        })
        .catch(error => {
            debugger
            dispatch(handleLoadingSpinnerClose());
        })
}

export const submitTemplateHandler = (data) => dispatch => {

  
    instance.post(BASE_URL+'UserTemplates?sectionId=UT3', data)
    .then(res => 
        {
            dispatch(pathChangeHandler("/create/advertise"))

        })
    .catch(error => {

    })
};

export const fetchDataSummary = (value) => dispatch => {

    let data = value.summary ? value.summary.map(item => {
        return {
            id: item.summary_id,
            desc: item.title,
            used: item.used,
            isActive: false
        }
    }) : []

    dispatch({
        type: JD_TEMPLATE_SAVE_SUMMARY_SUGGESTION_HANDLER,
        payload: data,
    });
};
export const showLoginPopupHandler = (value) => dispatch => {
    dispatch({
        type: JD_TEMPLATE_SAVE_SUMMARY_SHOW_LOGIN_POPUP_HANDLER,
        payload: value,
    });
};