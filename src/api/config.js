import axios from "axios";
import https from "https";
import {getAppStoreValue} from "../components/common/Helpers";
// Local Server
// const BASE_HOST = 'localhost';

// Localhost Server
// const BASE_HOST = "127.0.0.1";

// Dev Server
export const BASE_HOST = "dev.specialisedjobs.com";

// Quality Server
// export const BASE_HOST = "172.16.10.227";

export const BASE_LOGIN_URL = "https://" + BASE_HOST + "/";
export const BASE_URL = "https://" + BASE_HOST + "/jdbuilder/";
export const BASE_URL_SQL = "https://" + BASE_HOST + "/auth/";
export const BASE_URL_COL = "https://" + BASE_HOST + "/Collaboration/";
export const ADMIN_URL = "https://" + BASE_HOST + "/admin/";
export const SKILLS_URL  ="https://dev.specialisedjobs.com/adminpanel/APTemplates/skills/"


const headers = {
    "Content-Type": "application/JSON",
    "Access-Control-Allow-Origin": "https://dev.specialisedjobs.com/",
};

const instance = axios.create({
    baseURL: BASE_URL,
    headers: headers,
    // httpsAgent: agent,
    // https: true
});


instance.interceptors.request.use(
    function (request) {
        // request.httpsAgent = new https.Agent({
        //     rejectUnauthorized: false,
        //     cert: file,
        // });
        let token = getAppStoreValue("access_token").toString();
        if (!!token) {
            request.headers.authorization = `Bearer ${token}`;
        } else {
            request.config = { headers: { "Content-Type": "multipart/form-data" } };
        }
        // Do something with response data
        return request;
    },
    function (error) {
        // Do something with response error
        return Promise.reject(error);
    }
);

instance.interceptors.response.use(
    function (response) {
        try {
            if(response.request.responseText=="Successfully Inserted.")
            {console.log("hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh")}
            else{
            var res = JSON.parse(response.request.responseText.replace(/("[^"]*"\s*:\s*)(\d{16,})/g, '$1"$2"'))
            response.data.responseObj = res.responseObj;
        }}
        catch (e) {
            console.log("Error Parsing json", e);
        }


        return response;
    },
    function (error) {
        if (!!error.response) {
            let status = error.response.status;
            switch (status) {
                case 401:
                    sessionStorage.setItem("isAuthenticated", false);
                    sessionStorage.setItem("token", "");
                    debugger
                    window.location.href = "/login";
                    break;
            }
        }
        return Promise.reject(error);
    }
);

export default instance;
