import React, {Component} from 'react';
import { styles } from "./style";
import { withStyles } from "@material-ui/core/styles";
import { Button, Grid } from "@material-ui/core";
import { ValidatorForm } from "react-material-ui-form-validator";
import Header from "./Header/component"
import Tabs from "./Tabs/component"

class Landing extends Component {
   
    render() {
        const { 
            classes,
  
        } = this.props;

        return (
            <>
            <div >
                <Grid item xs={12} sm={12}>
                <Header/>
                <Tabs />
                    
                </Grid>
                </div>
            </>
        )
    }
}

export default withStyles(styles)(Landing);