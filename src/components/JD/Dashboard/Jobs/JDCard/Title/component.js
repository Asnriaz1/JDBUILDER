import React, {Component} from 'react';
import { styles } from "./styles";
import { withStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import LaunchIcon from "@material-ui/icons/Launch";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";

class JDCardTitle extends Component {
    render() {
        const { 
            classes,
            title
         } = this.props;

        return (
            <div className={classes.jdcardwrapper}>
                <div className={classes.jdcardheader}>
                    <div className="statebox">
                        {
                            title === "complete" ? 
                            <div className="published">
                                <LaunchIcon />
                                <span>Complete JDs</span>
                            </div> : null
                        }
                        {
                            title === "incomplete" ? 
                            <div className="imcomplete">
                                <ErrorOutlineIcon />
                                <span>Incomplete JDs</span>
                            </div> : null
                        }
                        {
                            title === "incollaboration" ? 
                            <div className="complete">
                                <CheckCircleIcon />
                                <span>InCollaboration JDs</span>
                            </div> : null
                        }
                        {
                            title === "colcomplete" ? 
                            <div className="complete">
                                <CheckCircleIcon />
                                <span>Collaboration Complete JDs</span>
                            </div> : null
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(JDCardTitle);