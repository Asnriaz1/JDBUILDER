import React, {Component} from 'react';
import { styles } from "./styles";
import { withStyles } from "@material-ui/core/styles";

class Footer extends Component {
    render() {
        const {
            classes
            } = this.props;
        return (
            <>
                <div className={classes.copyrighttext}>
                    <p> &copy; JD Builder 2020. All Rights Reserved.</p>
                </div>
            </>
        )
    }
}

export default withStyles(styles)(Footer);