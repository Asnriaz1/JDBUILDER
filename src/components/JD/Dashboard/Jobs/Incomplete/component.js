import React, {Component} from 'react';
import { styles } from "./styles";
import { withStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import UserJDCard from "../JDCard/container";
import JDCardTitle from "../JDCard/Title/container";

class IncompleteJDs extends Component {
    
    componentDidMount = () => {
        this.props.fetchDataIfNeeded();
    }
    
    render() {
        const { 
            classes,
            templatesData
         } = this.props;

        return (
            <div className={classes.jdcardheight}>
                <Grid container>
                    <Grid item xs={12}>
                        <JDCardTitle title="incomplete"/>
                    </Grid>
                    {
                        templatesData.length > 0 ? templatesData.map((item, index) => (
                            <Grid item xs={12} md={4} key={index}>
                                <UserJDCard data={item}/>
                            </Grid>
                        )) : "No result found."
                    }
                </Grid>
            </div>
        )
    }
}

export default withStyles(styles)(IncompleteJDs);