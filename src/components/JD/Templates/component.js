import React, {Component} from 'react';
import { styles } from "./styles";
import { withStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import SearchForm from "./SearchForm/container";
import CreateJDLink from "./Create/container";
import SuggestedTemplates from "./Suggested/container";

class Templates extends Component {
    render() {
        const {
            classes,
            } = this.props;
        return (
            <>
                <div className={classes.mainWrapper}>
                    <div className={classes.templateheadtitle}>
                        <h1>JD Builder Template</h1>
                        <p>Choose a Job Description template of your choice or create new, fill it out, and upload in seconds. Create a professional, Top rated JD in a few clicks. Just pick one of the templates below, add ready-to-use suggestions, and hire best fit for your company.</p>
                    </div>
                    <div className={classes.landingtemplatewrapper}>
                        <SearchForm />
                        <Grid container>
                            <CreateJDLink />
                            <SuggestedTemplates />
                        </Grid>
                    </div>
                </div>
            </>
        )
    }
}

export default withStyles(styles)(Templates);