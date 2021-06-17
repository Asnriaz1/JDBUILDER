import React, { Component } from 'react';
import { styles } from "./style";
import { withStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import { MUIEditorState } from 'react-mui-draft-wysiwyg'
import { convertFromRaw } from 'draft-js'

const editorConfig = {}

class JDDisplayPreview extends Component {

    state = {
        editorState: MUIEditorState.createWithContent(
            editorConfig,
            convertFromRaw(this.props.rawContentRolesRes),
          ),
          email: null,
          currentData: new Date().getDate() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getFullYear()
    }
    render() {
        const {
            classes,
            jobOpeningData,
            additionalInfoSkillsData,
            additionalInfoLangData,
            jobSummary
        } = this.props;
        
        const config = {
            toolbar: {
               controls: [
                 ],
               },
               editor: {
                className: 'texteditorPreview',
              },
        };
        return (
            <div className={classes.previewWrapper}>

                <Grid container >

                    <div className={classes.previewHeader}>

                        <div className={classes.previewID}>
                            <h3>JOB ID:123ABC</h3>
                        </div>
                        <hr />
                        <h1 className={classes.jobTitle}>{jobOpeningData.jobTitleField.value} </h1>
                        <ul>
                            <li><span>Location:</span>Islamabad, Pakistan </li>
                            <li><span>Posted On:</span>{this.state.currentData.toString()} </li>
                            <li><span>Created On:</span>{this.state.currentData.toString()} </li>
                            {this.state.email ? <li><span>Assign Owner:</span>pasha@company.com </li> : null}
                        </ul>

                    </div>



                    <Grid container>

                        <Grid container className={classes.jobDescription}>
                            <Grid item lg={4}>
                                <span >Industry</span>
                                <p>{jobOpeningData.industryField.value.length ? jobOpeningData.industryField.value[0].value : ""}</p>
                            </Grid>
                            <Grid item lg={4}>
                                <span>Function</span>
                                <p>{jobOpeningData.functionField.value.length ? jobOpeningData.functionField.value[0].value : ""}</p>
                            </Grid>
                            <Grid item lg={4}>
                                <span>Type</span>
                                <p>{jobOpeningData.employmenTypeField.value.length ? jobOpeningData.employmenTypeField.value[0].value : ""}</p>
                            </Grid>
                        </Grid>


                        <Grid container className={classes.jobDescription}>
                            <Grid item lg={4}>
                                <span >Position</span>
                                <p>{jobOpeningData.positionField.value}</p>
                            </Grid>
                            <Grid item lg={4}>
                                <span>Experience</span>
                                <p>{jobOpeningData.minYearField.value}-{jobOpeningData.maxYearField.value} years</p>
                            </Grid>
                            <Grid item lg={4}>
                                <span>Salary Range</span>
                                <p>{jobOpeningData.monthlySalaryRangField.value.length ? jobOpeningData.monthlySalaryRangField.value[0].value : ""}</p>
                            </Grid>
                        </Grid>

                    </Grid>


                    <div className={classes.previewHeader}>
                        <div className={classes.line}>

                        </div>
                        <div className={classes.rolesTitle}>
                            <span>Roles and Responsibility</span>
                        </div>
                        <hr />
                        <div className={classes.rolesDescr} >
                            <RadioButtonUncheckedIcon />
                            {jobSummary}
                        </div>
                    </div>


                    <div className={classes.previewskills}>
                        <div className={classes.rolesTitle}>
                            <span>Skills & Language</span>
                        </div>
                        <hr />

                        <Grid container className={classes.skillsLanguage}>
                                <div className={classes.skillsandlangwrapper}>
                                    
                                <RadioButtonUncheckedIcon />
                                <div className={classes.line2}></div>
                                    {
                                        additionalInfoSkillsData.map((item, index) => (

                                            <Grid container style={{paddingLeft: 22}} key={index}>
                                                <Grid item lg={3} >
                                                    <p>{item.title}</p>
                                                </Grid>
                                                <Grid item lg={3}>
                                                    <p>{item.level}</p>
                                                </Grid>
                                                <Grid item lg={3}>
                                                    <p>{item.importance}</p>
                                                </Grid>
                                            
                                    
                                            </Grid>
                                        ))
                                    }
                                </div>

                            <div className={classes.skillsandlangwrapper}>
                                
                            <RadioButtonUncheckedIcon />
                                <div className={classes.line2}></div>
                                {
                                    additionalInfoLangData.map((item, index) => (

                                        <Grid container style={{paddingLeft: 22}} key={index}>
                                            <Grid item lg={3}>
                                                <p>{item.title}</p>
                                            </Grid>
                                            <Grid item lg={3}>
                                                <p>{item.level}</p>
                                            </Grid>
                                            <Grid item lg={3}>
                                                <p>{item.importance}</p>
                                            </Grid>
                                        
                                
                                        </Grid>
                                    ))
                                }
                            </div>

                        </Grid>
                    </div>



                </Grid>
            </div>
        )
    }
}

export default withStyles(styles)(JDDisplayPreview);