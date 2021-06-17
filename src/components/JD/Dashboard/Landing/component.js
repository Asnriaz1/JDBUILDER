import React, {Component} from 'react';
import { styles } from "./styles";
import { withStyles } from "@material-ui/core/styles";
import DashboardOptions from "./Options/component";
import DashboardChart from "./Chart/container";
import DashboardLandingStats from "./Stats/container";

class DashboardLanding extends Component {

    componentDidMount = () => {
        this.props.fetchDataIfNeeded();
    }
    
    render() {
        const {
            classes,
            jdCount
        } = this.props;

        return (
            <div className={classes.dashboardLandingWrapper}>
                <DashboardOptions jdCount={jdCount}/>
                {/* <DashboardChart /> */}
                <DashboardLandingStats />
            </div>
        )
    }
}

export default withStyles(styles)(DashboardLanding);