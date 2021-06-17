import React, { Component } from 'react';
import { styles } from "./style";
import { withStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import Avatar from '@material-ui/core/Avatar';
import LinearProgress from '@material-ui/core/LinearProgress';
import ReactMarkdown from 'react-markdown'



class CvPreview extends Component {

    componentDidMount = () => {
        this.props.fetchDataIfNeeded();
    }
    render() {
        const {
            classes,
            userid,
            profileData
        } = this.props;

        return (
            profileData ?
            <div className={classes.previewWrapper}>
                    <Grid container>
                        <Grid item lg={3}>
                            <img className={classes.cvAvatar} src={profileData.personal_info.image} alt=""/>
                        </Grid>
                        <Grid item lg={9}>
                            <div className={classes.cvHeader}>
                                <h1>{profileData.personal_info.name}</h1>
                                <h3>{profileData.personal_info.headline}</h3>
                                <p>{profileData.personal_info.email}</p>
                                <p>{profileData.personal_info.phone}</p>
                            </div>
                        </Grid>
                    </Grid>

                    <Grid container>
                        <Grid item lg={3}>
                            <h1 className={classes.cvHeading}>Matched Skills</h1>
                            {
                                profileData.skills ? profileData.skills.map((item, index) => (
                                        <div className={classes.cvSkills} key={index}>
                                            <p>{item.name}</p>
                                        </div>
                                )) : ""
                            }
                            <h1 className={classes.unmatchHeading}>Unmatched Skills</h1>
                            {
                                profileData.missing ? profileData.missing.map((item, index) => (
                                        <div className={classes.cvunmatchedSkills} key={index}>
                                            <p>{item.name}</p>
                                        </div>
                                )) : ""
                            }
                        </Grid>
                        <Grid item lg={9}>
                            <div>
                                <div className={classes.cvSummary}>
                                    <h2 className={classes.cvHeading}>Summary</h2>
                                    <p>{profileData.personal_info.summary}</p>
                                </div>

                                <div className={classes.space}>
                                </div>

                                <div className={classes.cvEmployment}>
                                    <h2 className={classes.cvHeading}>Employment History</h2>
                                    {
                                        profileData.experiences.jobs ? profileData.experiences.jobs.map((item, index) => (
                                            <Grid key={index}>
                                                <div className={classes.employmentHistory} >
                                                    <p>{item.title} , {item.company}</p>
                                                    <span className={classes.locationmark}>{item.location}</span>
                                                    <p>{item.date_range}</p>
                                                    <div className={classes.details}>
                                                            {item.description}
                                                    </div>
                                                </div>
                                            </Grid>
                                        )) : ""
                                    }
                                </div>

                                <div className={classes.space}>
                                </div>

                                <div className={classes.cvEducation}>
                                    <h2 className={classes.cvHeading}>Education</h2>
                                    {
                                        profileData.experiences.education? profileData.experiences.education.map((item, index) => (
                                            <Grid key={index}>
                                                <div className={classes.cvEducation} >
                                                    <p>{item.degree} , {item.name}</p>
                                                    <span className={classes.locationmark}>{item.location}</span>
                                                    <span>{item.date_range}</span>
                                                  
                                                </div>
                                            </Grid>
                                        )) : ""
                                    }
                                </div>

                            </div>
                        </Grid>
                    </Grid>
            </div> : "No result found."
        )
    }
}

export default withStyles(styles)(CvPreview);