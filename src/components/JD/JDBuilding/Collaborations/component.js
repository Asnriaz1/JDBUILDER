import React, { Component } from 'react';
import { styles } from "./styles";
import { withStyles } from "@material-ui/core/styles";
import { Redirect, Switch } from "react-router-dom";
import PublicRoute from "../../../common/PublicRouteContainer";
import JDBuildingHeader from "../Header/container";
import JobOpening from "../JobOpening/container";
import AdditionalInfo from "../AdditionalInfo/container";
import JobSummary from "../Summary/container";
import Advertise from "../Advertise/container";
import JDDisplay from "../Download/container";
import Assistant from "../../Assistant/container";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { NavLink } from "react-router-dom";


class Collaborations extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: true

        };

    }
    componentDidMount = () => {
    
    }

    closeDialogue = () => {
     
    }


    render() {
        const {
            classes,
            fetchData,

            } = this.props;
        return (
            <>
                <JDBuildingHeader />
                <Assistant />
                <Switch>
                    <PublicRoute path={`/collaborator/jobopening`}  >
                    <JobOpening />
                        <Dialog
                            open={this.state.open}
                            aria-labelledby="alert-dialog-title"
                            aria-describedby="alert-dialog-description"
                        >
                            <DialogTitle id="alert-dialog-title">{"Please Accept for starting Collaboration"}</DialogTitle>
                            <DialogContent>
                                <DialogContentText id="alert-dialog-description">
                                    Help your colleague to create an Amazing JD for the new role by collaborating click on Agree 
                            </DialogContentText>
                            </DialogContent>
                            <DialogActions>
                            <NavLink
                                to="/"
                            
                            >
                                <Button color="primary">
                                    Disagree
                                </Button>
                            </NavLink>
                                <Button color="primary" autoFocus onClick={() => fetchData()}>
                                    Agree
                                 </Button>
                            </DialogActions>
                        </Dialog>
</PublicRoute>
                    

                    <PublicRoute path={`/collaborator/info`} component={AdditionalInfo} />
                    <PublicRoute path={`/collaborator/summary`} component={JobSummary} />
                    <PublicRoute path={`/collaborator/advertise`} component={Advertise} />
                    <PublicRoute path={`/collaborator/download`} component={JDDisplay} />
                    <Redirect to="/collaborator/jobopening" />
                </Switch>
            </>
        )
    }
}

export default withStyles(styles)(Collaborations);