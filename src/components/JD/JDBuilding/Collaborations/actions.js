
//export const JD_COLLABORATOR_DATA = "JD_COLLABORATOR_DATA";
export const JD_JOB_OPENING_TEXT_CHANGE_HANDLER = "JD_JOB_OPENING_TEXT_CHANGE_HANDLER";
export const JD_ADDITIPONAL_INFO_TEXT_CHANGE_HANDLER = "JD_ADDITIPONAL_INFO_TEXT_CHANGE_HANDLER";
export const JD_SUMMARY_TEXT_CHANGE_HANDLER = "JD_SUMMARY_TEXT_CHANGE_HANDLER";
export const DIALOG_CLOSE_HANDLER ="DIALOG_CLOSE_HANDLER"


export const DIALOG_CLOSE =() => dispatch =>{

    dispatch({
        type: DIALOG_CLOSE_HANDLER,
        payload: false,
      
    });

};




export const JD_COLLABORATOR_DATA = (value) => dispatch => {
    
    let data = value.data;
    let job_code = data.job_code;

        dispatch({
            type: JD_JOB_OPENING_TEXT_CHANGE_HANDLER,
            payload: job_code,
            key: "jobCodeField"
        });

    
    };

    