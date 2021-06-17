import React, {Component} from 'react';
import { styles } from "./styles";
import { withStyles } from "@material-ui/core/styles";
import {Redirect, Switch} from "react-router-dom";
import PrivateRoute from "../../common/PrivateRouteContainer";
import DashboardLanding from "./Landing/container";
import UserDashboardProfile from "./Profile/container";
import UserDashboardJobs from "./Jobs/container";
import IncollaborationJDs from "./Jobs/Incollaboration/container";
import CompleteJDs from "./Jobs/Complete/container";
import IncompleteJDs from "./Jobs/Incomplete/container";
import CollaborationCompleteJDs from "./Jobs/CollaborationComplete/container";
import AboutCompanySetting from "./AboutCompany/CompanySettings/container";
import MyAccount from "./MyAccount/container";
import JDCollaborators from "../Dashboard/Jobs/Collaborators/container";
import PreviewJD from "./Jobs/PreviewJD/container";
import Candidates from "./Candidates/container";

class UserDashboard extends Component {
    render() {
        return (
            <>
                <Switch>
                  <PrivateRoute path={`/user/candidates`} component={Candidates} />
                    <PrivateRoute path={`/user/dashboard`} component={DashboardLanding} />
                    <PrivateRoute path={`/user/profile`} component={UserDashboardProfile} />
                    <PrivateRoute path={`/user/all-jobs`} component={UserDashboardJobs} />
                    <PrivateRoute path={`/user/incollaboration-jobs`} component={IncollaborationJDs} />
                    <PrivateRoute path={`/user/complete-jobs`} component={CompleteJDs} />
                    <PrivateRoute path={`/user/incomplete-jobs`} component={IncompleteJDs} />
                    <PrivateRoute path={`/user/colcomplete-jobs`} component={CollaborationCompleteJDs} />
                    <PrivateRoute path={`/user/company-settings`} component={AboutCompanySetting}  />
                    <PrivateRoute path={`/user/jdcollab/:id`} component={JDCollaborators}  />
                    <PrivateRoute path={`/user/jd/:id`} component={PreviewJD}  />
                    <PrivateRoute path={`/user/myaccount`} component={MyAccount} />
                    <Redirect to="/user/dashboard"/>
                </Switch>
            </>
        )
    }
}

export default withStyles(styles)(UserDashboard);