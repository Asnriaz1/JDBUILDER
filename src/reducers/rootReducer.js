import {JDLandingReducer} from "../components/JD/jobAiReducer";
import {loginReducer} from "../components/Login/loginReducer";
import {signupReducer} from "../components/Signup/signupReducer";
import {jobOpeningReducer} from "../components/JD/JDBuilding/JobOpening/jobOpeningReducer";
import {jobSummaryReducer} from "../components/JD/JDBuilding/Summary/jobSummaryReducer";
import {jdBuildingReducer} from "../components/JD/JDBuilding/jdBuildingReducer";
import {confirmationDialogReducer} from "../components/common/ReduxBased/confirmationDialog/confirmationDialogReducer";
import {additionalInfoReducer} from "../components/JD/JDBuilding/AdditionalInfo/additionalInfoReducer";
import {jobAdvertiseReducer} from "../components/JD/JDBuilding/Advertise/advertiseReducer";
import {loadingSpinnerReducer} from "../components/common/ReduxBased/LoadingSpinner/loadingSpinnerReducer";
import {dashboardLandingReducer} from "../components/JD/Dashboard/Landing/dashboardLandingReducer";
import {dashboardJobsReducer} from "../components/JD/Dashboard/Jobs/dashboardJobsReducer";
import {addCollaboratorReducer} from "../components/JD/JDBuilding/CollaboratorAndPreview/addCollaboratorReducer";
import {companyInfoReducer} from "../components/JD/Dashboard/AboutCompany/CompanySettings/companyInfoReducer";
import {collaboratorReducer} from "../components/JD/JDBuilding/Collaborations/collaborationReducer";
import {combineReducers} from "redux";
import reduceReducers from "reduce-reducers";

const rootReducer = reduceReducers(
    combineReducers({
        JDLANDING: JDLandingReducer,
        LOGIN: loginReducer,
        SIGNUP: signupReducer,
        JOBOPENING: jobOpeningReducer,
        JOBSUMMARY: jobSummaryReducer,
        JDBUILDING: jdBuildingReducer,
        ALERT_DIALOG: confirmationDialogReducer,
        ADDITIONALINFO: additionalInfoReducer,
        ADVERTISE: jobAdvertiseReducer,
        LOADING_SPINNER: loadingSpinnerReducer,
        LANDING_DASHBOARD: dashboardLandingReducer,
        JOBS_DASHBOARD: dashboardJobsReducer,
        ADD_COLLABORATOR: addCollaboratorReducer,
        COMPANY_INFO: companyInfoReducer,
        COLLABORATORDATA:collaboratorReducer
    }),
);

export default rootReducer;
