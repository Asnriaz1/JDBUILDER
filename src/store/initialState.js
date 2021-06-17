import {JDLANDING} from "../components/JD/initialState";
import {LOGIN} from "../components/Login/initialState";
import {SIGNUP} from "../components/Signup/initialState";
import {JOBOPENING} from "../components/JD/JDBuilding/JobOpening/initialState";
import {JOBSUMMARY} from "../components/JD/JDBuilding/Summary/initialState";
import {JDBUILDING} from "../components/JD/JDBuilding/initialState";
import {ALERT_DIALOG} from "../components/common/ReduxBased/confirmationDialog/initialState";
import {ADDITIONALINFO} from "../components/JD/JDBuilding/AdditionalInfo/initialState";
import {ADVERTISE} from "../components/JD/JDBuilding/Advertise/initialState";
import {LOADING_SPINNER} from "./../components/common/ReduxBased/LoadingSpinner/initialState";
import {LANDING_DASHBOARD} from "../components/JD/Dashboard/Landing/initialState";
import {JOBS_DASHBOARD} from "../components/JD/Dashboard/Jobs/initialState";
import {CANDIDATE_DASHBOARD} from "../components/JD/Dashboard/Candidates/initialState";
import {ADD_COLLABORATOR} from "../components/JD/JDBuilding/CollaboratorAndPreview/initialState";
import {COMPANY_INFO} from "../components/JD/Dashboard/AboutCompany/CompanySettings/initialState";
import {COLLABORATOR} from "../components/JD/JDBuilding/Collaborations/initialState"
const initalState = {
    JDLANDING: JDLANDING,
    LOGIN: LOGIN,
    SIGNUP: SIGNUP,
    JOBOPENING: JOBOPENING,
    JOBSUMMARY: JOBSUMMARY,
    JDBUILDING: JDBUILDING,
    ALERT_DIALOG: ALERT_DIALOG,
    ADDITIONALINFO: ADDITIONALINFO,
    ADVERTISE: ADVERTISE,
    LOADING_SPINNER: LOADING_SPINNER,
    LANDING_DASHBOARD: LANDING_DASHBOARD,
    JOBS_DASHBOARD: JOBS_DASHBOARD,
    ADD_COLLABORATOR: ADD_COLLABORATOR,
    COMPANY_INFO: COMPANY_INFO,
    COLLABORATOR: COLLABORATOR
};

export default initalState;
