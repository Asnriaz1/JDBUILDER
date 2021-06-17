import React, { Component } from 'react';
import { styles } from "./style";
import { withStyles } from "@material-ui/core/styles";
import { Button, Grid } from "@material-ui/core";
import Headerimg from "../../../resources/images/header.png"
import FadeIn from 'react-fade-in';
import ReactFloaterJs from 'react-floaterjs'
class Tabs extends Component {

    render() {
        const {
            classes,

        } = this.props;

        return (
            <div className={classes.mainWrapper}>
                <Grid container>
                    <Grid item md={4}>
                     1
                    </Grid>

                    <Grid item md={4}>
                      2
                    </Grid>

                    <Grid item md={4}>
                      3
                    </Grid>

                </Grid>

            </div>
        )
    }
}

export default withStyles(styles)(Tabs);