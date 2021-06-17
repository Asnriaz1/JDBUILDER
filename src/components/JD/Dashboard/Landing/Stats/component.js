import React, {Component} from 'react';
import { styles } from "./styles";
import { withStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import EventAvailableIcon from "@material-ui/icons/EventAvailable";

class DashboardLandingStats extends Component {
    render() {
        const {
            classes
        } = this.props;

        return (
            <>
                <Grid container>
                    <Grid item xs={12} md={6}>
                        <div className={classes.landingstatsbox}>
                            <p>Capstone Project</p>
                            <CheckCircleOutlineIcon />
                            <span>No capstone project assigned</span>
                        </div>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <div className={classes.landingstatsbox}>
                            <p>Interview Scheduled</p>
                            <EventAvailableIcon />
                            <span>No Upcoming Interview</span>
                        </div>
                    </Grid>
                </Grid>
            </>
        )
    }
}

export default withStyles(styles)(DashboardLandingStats);