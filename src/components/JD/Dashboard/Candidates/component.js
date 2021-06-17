import React, { Component } from 'react';
import { styles } from "./styles";
import { withStyles } from "@material-ui/core/styles";
import { Button, Grid, CircularProgress, Box } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import { NavLink } from "react-router-dom";
import LinkedInLogo from "../../../../resources/images/social/linkedin.png";
import PlatformsLogo from "../../../../resources/images/social/platforms.png";
import SocialImg from "../../../../resources/images/social/social.png";
import AlertDialog from "../../../common/ReduxBased/confirmationDialog/container";
import ContactViaEmail from "../../JDBuilding/Advertise/ContactViaEmail/container";

class Candidates extends Component {

    state = {
        open: false,
        userid: "",
        sendEmailOpen: false,
        currentUserVal: ""
    }

    componentDidMount = () => {
        this.props.fetchDataIfNeeded();
    }

    showAlertDialog = (value, id) => {
        this.setState({
            open: value,
            userid: id
        })
    }

    showEmailSendAlertDialog = (value, data) => {
        this.setState({
            sendEmailOpen: value,
            currentUserVal: data
        })
    }

    sendEmailToCandidate = () => {
        let userData = this.state.currentUserVal;
        this.props.sendEmailToCandidate(userData);
        this.setState({
            sendEmailOpen: false,
        })
    }

    render() {
        const {
            classes,
            candidateList
        } = this.props;
        return (
            <>
           

                {
                   this.state.sendEmailOpen ? 
                   <AlertDialog
                    customClass={classes.removeSubActionMainDialog}
                    maxWidth={'md'}
                    open={this.state.sendEmailOpen}
                    showTitle={true}
                    title={"Send email to candidate"}
                    message={<ContactViaEmail currentUserVal={this.state.currentUserVal}/>}
                    applyButtonText={"Send"}
                    cancelAlertDialog={() => this.showEmailSendAlertDialog(false)}
                    closeAlertDialog={() => this.showEmailSendAlertDialog(false)}
                    applyAlertDialog={() => this.sendEmailToCandidate()}
                /> : null }

                <div className={classes.additionalinfowrapper}>
                    {/* <div className="actionbtn">
                        <Button variant="outlined" className={classes.searchsubmitbtn} startIcon={<AddIcon />} >
                            Add Collaborators
                        </Button>
                        <Button variant="outlined" className={classes.searchsubmitbtn} >
                            Preview
                        </Button>
                    </div> */}

                    <Grid container>

                        <Grid item lg={9}>
                            <div className={classes.advertiseHeader}>
                                <h3>Suggested Candidate from Top Hiring Platform</h3>
                                <span>View all</span>
                            </div>
                            <div >
                                <div className={classes.suggestedCandidateWrapper} >
                                    {
                                        candidateList.map((item, index) => (
                                            <div className={classes.suggestedCandidate} key={item.candidate_Guid}>

                                                <div className={classes.suggestedCandidateTitle} >
                                                    <h3>{item.candidate_Name}</h3>
                                                    <p>{item.job_Title}</p>
                                                </div>

                                                <div className={classes.suggestedCandidatePercentage}>

                                                    {/* <CircularProgress variant="determinate" value={75}  /> */}
                                                    <div className={classes.matchpercentageWrapper} >
                                                        <p>Matching Percentage</p>
                                                        <Box position="relative" display="inline-flex" >
                                                            <CircularProgress variant="determinate" value={item.candidate_Matched_Stats.candidate_Matched_Percentage} />

                                                        </Box>
                                                        <p className={classes.matchpercentage} >{item.candidate_Matched_Stats.candidate_Matched_Percentage}</p>
                                                    </div>
                                                </div>

                                                <div className={classes.suggestedCandidateContact}>
                                                    <Button variant="outlined" color="primary" onClick={() => this.showEmailSendAlertDialog(true, item)}>Contact via email</Button>
                                                    <Button variant="outlined" color="primary" onClick={() => this.showAlertDialog(true, item.candidate_Guid)}>View Profile</Button>
                                                </div>
                                            </div>
                                        ))}
                                </div>
                                <div>
                                </div>
                            </div>
                        </Grid>

                      </Grid>


                </div>
            </>
        )
    }
}

export default withStyles(styles)(Candidates);