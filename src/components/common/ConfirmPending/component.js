import React, {Component} from 'react';
import { styles } from "./styles";
import { withStyles } from "@material-ui/core/styles";
import ConfirmEmailImg from  "../../../resources/images/confirmemail.png";
import { NavLink } from "react-router-dom";

class ConfirmPending extends Component {
    render() {
        const {
            classes
            } = this.props;
        return (
            <>
                <div className={classes.jobaisliderbg}>
                    <img src={ConfirmEmailImg} alt="" />
                    <p>Please Check Your Mail Box</p>
                    <NavLink
                        to={'/'}
                        className={classes.homelink}
                    >Go to Home</NavLink>
                </div>
            </>
        )
    }
}

export default withStyles(styles)(ConfirmPending);