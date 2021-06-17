import React, {Component} from 'react';
import { styles } from "./styles";
import { withStyles } from "@material-ui/core/styles";
import JDLandingIntro from "./Landing/Instructions/component";
import JDHomeSearchForm from "./Landing/SearchForm/container";

class JDLanding extends Component {
    render() {
        const {
            classes
            } = this.props;
        return (
            <div className={classes.mainWrapper}>
                <div className={classes.landingsearchwrapper}>
                    <JDLandingIntro />
                    <JDHomeSearchForm />
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(JDLanding);