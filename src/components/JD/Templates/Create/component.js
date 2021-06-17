import React, {Component} from 'react';
import { styles } from "./styles";
import { withStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import {NavLink} from "react-router-dom";
import AddIcon from "@material-ui/icons/Add";

class CreateJDLink extends Component {

    getJobCode = () => {
        // this.props.getJobCode();
        this.props.fetchDataIfNeeded();
    }
    render() {
        const {
            classes,
            } = this.props;
        return (
            <>
                <Grid item xs={12} md={3}>
                    <div className={classes.templateboxpadding}>
                    <NavLink
                        to={"/create"}
                        className={classes.createtemplink}
                        onClick={this.getJobCode}
                    >

                        <div className={classes.createtemplateicon}>
                            <AddIcon />
                        </div>

                        <span className={classes.createtemplatelabel}>
                            <b>Create New Template.</b> <br/>
                            Fill out your information in related fields
                        </span>
                        
                    </NavLink>
                    </div>
                </Grid>
            </>
        )
    }
}

export default withStyles(styles)(CreateJDLink);