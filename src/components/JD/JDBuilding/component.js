import React, {Component} from 'react';
import { styles } from "./styles";
import { withStyles } from "@material-ui/core/styles";
import {Redirect, Switch} from "react-router-dom";
import PublicRoute from "../../common/PublicRouteContainer";
import JDBuildingHeader from "./Header/container";
import JobOpening from "./JobOpening/container";
import AdditionalInfo from "./AdditionalInfo/container";
import JobSummary from "./Summary/container";
import Advertise from "./Advertise/container";
import JDDisplay from "./Download/container";
import Assistant from "../Assistant/container";

class JDBuilding extends Component {
    render() {
        return (
            <>
                <JDBuildingHeader />
                <Assistant />
                <Switch>
                    <PublicRoute path={`/create/jobopening`} component={JobOpening} />
                    <PublicRoute path={`/create/info`} component={AdditionalInfo} />
                    <PublicRoute path={`/create/summary`} component={JobSummary} />
                    <PublicRoute path={`/create/advertise`} component={Advertise} />
                    <PublicRoute path={`/create/download`} component={JDDisplay} />
                    <Redirect to="/create/jobopening"/>
                </Switch>
            </>
        )
    }
}

export default withStyles(styles)(JDBuilding);