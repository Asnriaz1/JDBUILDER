import React, {Component} from 'react';
import { styles } from "./styles";
import { withStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";
import TemplateImg from  "../../../../../resources/images/template-jd.svg";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";
import { NavLink } from "react-router-dom";
import Moment from 'react-moment'
class UserJDCard extends Component {
    render() {
        const { 
            classes,
            data
         } = this.props;

        return (
            <div className={classes.jdcardwrapper}>
                <div className={classes.jdcardheader}>
                    <span className="title">{data.title}</span>
                    <span className="skills">{data.employment_type}</span>
                    {/* <div className={classes.scoremeter}>
                        <TrendingUpIcon />
                        <span>JD Meter Score</span>
                        <span className="count">{data.jdmeter_score}</span>
                    </div> */}
                    <div className="statebox">
                        {
                            data.status === "Complete" ? 
                            <div className="published">
                                <CheckCircleIcon />
                                {/* <span>{data.status}</span> */}
                            </div> : null
                        }
                        {
                            data.status === "InComplete" ? 
                            <div className="imcomplete">
                                <ErrorOutlineIcon />
                                {/* <span>{data.status}</span> */}
                            </div> : null
                        }
                        {
                            data.status === "InCollaboration" ? 
                            <div className="complete">
                                <ErrorOutlineIcon />
                                <span>{data.status}</span>
                            </div> : null
                        }
                        {
                            data.status === "CollaborationComplete" ? 
                            <div className="complete">
                                <ErrorOutlineIcon />
                                <span>{data.status}</span>
                            </div> : null
                        }
                    </div>
                </div>
                <div className={classes.jdcardimg}>
                    <img src={TemplateImg} alt="template img" />
                    <NavLink
                        to={`/user/jd/${data.job_code}`}
                        className="viewjd"
                    >View JD</NavLink>
                </div>
                <div className={classes.jdcardfooter}>
                    <div>
                        <Button href={"/user/candidates"}>View Candidates</Button>
                        <NavLink
                            to={`/user/jdcollab/${data.job_code}`}
                            className="viewjd"
                        >View Collaborator</NavLink>
                    </div>
                    <div className={classes.datemodified}>
                        <span className="title">Last Modified:</span>
                        <span>
                            <Moment date={data.last_modified} format="MMMM Do YYYY, h:mm:ss a"></Moment>   
                        </span> 
                    </div>
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(UserJDCard);