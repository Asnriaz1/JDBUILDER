import React, { Component } from 'react';
import { styles } from "./styles";
import { withStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import WorkOutlineIcon from "@material-ui/icons/WorkOutline";
import EventAvailableIcon from "@material-ui/icons/EventAvailable";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import SettingsIcon from "@material-ui/icons/Settings";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import { NavLink } from "react-router-dom";

class DashboardOptions extends Component {
    render() {

        const optionsData = [
            {
                title: "Create New JD",
                icon: WorkOutlineIcon,
                route: "/",
                showAddIcon: true,
            },
            {
                title: "Tutorials",
                icon: EventAvailableIcon,
                route: "/",
                showAddIcon: true,
            },
            {
                title: "New Collaboration",
                icon: PersonOutlineIcon,
                route: "/",
                showAddIcon: true,
            },
            {
                title: "Settings",
                icon: SettingsIcon,
                route: "/",
                showAddIcon: false,
            }
        ];
        const {
            classes,
            jdCount
        } = this.props;

        return (
            <>
                <Grid container>
                    {
                        optionsData.map((item, index) => (
                            <Grid item xs={12} md={3} >
                                <NavLink
                                    to={item.route}
                                    key={index}
                                    className={classes.optionslink}
                                >
                                    <div className={classes.optionwrapper}>
                                        <item.icon className="mainicon" />
                                        <span className="title">{item.title}</span>
                                        {
                                            item.showAddIcon ? <AddCircleOutlineIcon className="addicons" /> : null
                                        }
                                    </div>
                                </NavLink>
                            </Grid>
                        ))
                    }

                    <Grid item xs={12} md={12} >
                        <div className={classes.optionblockwrapper}>
                            <div className="left">
                                <WorkOutlineIcon className="mainicon" />
                                <span className="title">JD {jdCount.all ? '('+jdCount.all+')': ""}</span>
                            </div>
                            <div className="list">
                                <ul>
                                    <li className="first">{jdCount.complete ? jdCount.complete : "0"}<span><br/> Complete</span></li>
                                    <li className="first">{jdCount.incomplete ? jdCount.incomplete : "0"}<span><br/> InComplete</span></li>
                                    <li className="first">{jdCount.incollaboration ? jdCount.incollaboration : "0"}<span><br/> In Collaboration</span></li>
                                    <li>{jdCount.collaborationcomplete ? jdCount.collaborationcomplete : "0"}<span><br/> Collaboration Complete</span></li>
                                </ul>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </>
        )
    }
}

export default withStyles(styles)(DashboardOptions);