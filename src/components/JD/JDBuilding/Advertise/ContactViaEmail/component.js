import React, { Component } from 'react';
import { styles } from "./styles";
import { withStyles } from "@material-ui/core/styles";

class ContactViaEmail extends Component {

    render() {
        const {
            classes,
            currentUserVal
        } = this.props;
        return (
            <>
                <p>Are you sure you want to send an email to {currentUserVal.candidate_Name}
                <span className={classes.useremail}>Email: {currentUserVal.candidate_Contact_Details.candidate_Email}</span>
                </p>
            </>
        )
    }
}

export default withStyles(styles)(ContactViaEmail);