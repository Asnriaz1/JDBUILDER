import React, {Component} from 'react';
import { styles } from "./styles";
import { withStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import JDImg from "../../../../resources/images/jdicon.svg";

class JDLandingIntro extends Component {
    render() {
        const {
            classes
        } = this.props;
        return (
            <div className={classes.landingwrapper}>
                <Grid container>
                    <Grid item xs={12} md={5}>
                        <h1 className={classes.landinginstitle}>Just <span>3</span> Simple <br/> Steps to build your<br/> <span>AI-Based JD.</span></h1>

                        <ul className={classes.landinginslist}>
                            <li> <CheckCircleIcon />Select JD template or Create new JD of your choice.</li>
                            <li> <CheckCircleIcon />Fill out the information and post your JD to Hire Global Talent.</li>
                        </ul>
                    </Grid>

                    <Grid item xs={12} md={7}>
                        <img className={classes.landingjdimg} src={JDImg} alt="Instructions"/>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default withStyles(styles)(JDLandingIntro);