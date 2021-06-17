import React, { Component } from 'react';
import { styles } from "./styles";
import { withStyles } from "@material-ui/core/styles";
import { Grid, Button } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import DashboardJobsImg from "../../../../resources/images/dashboard/jobs.png";
import UserJDCard from "./JDCard/container";
import JDCardTitle from "./JDCard/Title/container";

class UserDashboardJobs extends Component {

    componentDidMount = () => {
        this.props.fetchDataIfNeeded();
    }
    render() {
        const {
            classes,
            templatesData
        } = this.props;

        return (
            <>
                {
                    templatesData.complete.length > 0 ?
                        <div className={classes.alljds}>
                            <Grid container>
                                <Grid item xs={12}>
                                    <JDCardTitle title="complete" />
                                </Grid>
                                {
                                    templatesData.complete.map((item, index) => (
                                        <Grid item xs={12} md={4} key={index}>
                                            <UserJDCard data={item} />
                                        </Grid>
                                    ))
                                }
                            </Grid>
                        </div> : null}

                {
                    templatesData.incomplete.length > 0 ?
                        <div className={classes.alljds}>
                            <Grid container>
                                <Grid item xs={12}>
                                    <JDCardTitle title="incomplete" />
                                </Grid>
                                {
                                    templatesData.incomplete.map((item, index) => (
                                        <Grid item xs={12} md={4} key={index}>
                                            <UserJDCard data={item} />
                                        </Grid>
                                    ))
                                }
                            </Grid>
                        </div> : null}

                {
                    templatesData.incollaboration.length > 0 ?
                        <div className={classes.alljds}>
                            <Grid container>
                                <Grid item xs={12}>
                                    <JDCardTitle title="incollaboration" />
                                </Grid>
                                {
                                    templatesData.incollaboration.map((item, index) => (
                                        <Grid item xs={12} md={4} key={index}>
                                            <UserJDCard data={item} />
                                        </Grid>
                                    ))
                                }
                            </Grid>
                        </div> : null}
                
                {
                    templatesData.collaborationComplete.length > 0 ?
                        <div className={classes.alljds}>
                            <Grid container>
                                <Grid item xs={12}>
                                    <JDCardTitle title="colcomplete" />
                                </Grid>
                                {
                                    templatesData.collaborationComplete.map((item, index) => (
                                        <Grid item xs={12} md={4} key={index}>
                                            <UserJDCard data={item} />
                                        </Grid>
                                    ))
                                }
                            </Grid>
                        </div> : null}
                {
                    templatesData.complete.length > 0 || templatesData.incomplete.length > 0 || templatesData.incollaboration.length > 0 || templatesData.collaborationComplete.length > 0 ? null :
                        <div className={classes.dashboardjobswrapper}>
                            <img src={DashboardJobsImg} alt="Create New JD" />
                            <div className={classes.alljobsempty}>
                                <p>You do not have any JD</p>
                                <span className="desc">Good thing it's easy to create one</span>
                                <NavLink
                                    to={'/'}
                                >
                                    <Button variant="contained" color="primary">Create New JD</Button>
                                </NavLink>
                                <NavLink
                                    to={'/'}
                                >
                                    Learn how to create a new JD
                            </NavLink>
                            </div>
                        </div>
                }


            </>
        )
    }
}

export default withStyles(styles)(UserDashboardJobs);