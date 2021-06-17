import React, { Component } from 'react';
import { styles } from "./style";
import { withStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";

import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import RadarChart from 'react-svg-radar-chart';
import 'react-svg-radar-chart/build/css/index.css'
import GetAppIcon from "@material-ui/icons/GetApp";
import Pdf from "react-to-pdf";
import Moment from 'react-moment'

const ref = React.createRef();

class JDDisplay extends Component {
    state = {
        email: null,
        currentData: new Date().getDate() + '-' + (new Date().getMonth() + 1) + '-' + new Date().getFullYear(),
        jobCode: ''
    }

    componentDidMount = () => {
        this.props.fetchDataIfNeeded();
        let jobCodeNew = window.location.pathname.replace('/user/jd/', '')
        this.setState({
            jobCode: jobCodeNew
        })
    }

    render() {
        const {
            classes,
            jobOpeningData,
            downloadData,
            jobCode
        } = this.props;

        const data = [
            {
              data: {
                Skills: 0.7,
                Experience: .8,
                Education: 0.9,
                JOBTYPE: 0.67,
                SALARY: 0.8
              },
              meta: { color: 'blue' }
            },
            {
              data: {
                Skills: 0.6,
                Experience: .85,
                Education: 0.5,
                JOBTYPE: 0.6,
                SALARY: 0.7
              },
              meta: { color: 'red' }
            }
          ];
 
        const captions = {
            // columns
            Skills: 'Skills ',
            Experience: 'Design',
            Education: 'Education',
            JOBTYPE: 'JOBTYPE',
            SALARY: 'SALARY'
        }; 
        var roles=downloadData._selected_rr.htmlstring;
             roles.replace( "3+", '');
             console.log(roles)
        return (
            downloadData ? 
           
            <div className={classes.previewWrapper} ref={ref} style={{width: 1180}}>
                <Grid container item xs={12} lg={12} >

                    <Grid item lg={12} >

                        <div className={classes.previewHeader}>

                            <div className={classes.previewID}>
                                <h3>JOB ID: {this.state.jobCode ? this.state.jobCode : downloadData.job_code}</h3>

                                <Pdf targetRef={ref} filename="JD.pdf">
                                    {({ toPdf }) => <GetAppIcon onClick={toPdf} className={classes.downloadbtn}/>}
                                </Pdf>
                            </div>
                            <hr />
                            <h1 className={classes.jobTitle}>{downloadData.title} </h1>
                            <ul>
                                <li><span>Location:</span>Pakistan </li>

                                <li><span>Created On:</span><Moment date={downloadData.last_modified} format="MMMM Do YYYY, h:mm:ss a"></Moment> </li>
                               
                            </ul>

                        </div>

                            <Grid container className={classes.jobDescription}>
                                <Grid item lg={4}>
                                    <span >Industry</span>
                                    <p>{downloadData._selected_industry} </p>
                                </Grid>
                                <Grid item lg={4}>
                                    <span>Function</span>
                                    <p>{downloadData._selected_function} </p>
                                </Grid>
                                <Grid item lg={4}>
                                    <span>Type</span>
                                    <p>{downloadData.employment_type} </p>
                                </Grid>
                            </Grid>


                            <Grid container className={classes.jobDescription}>
                                <Grid item lg={4}>
                                    <span >Position</span>
                                    <p>{downloadData.positions} </p>
                                </Grid>
                                <Grid item lg={4}>
                                    <span>Minimum Experience</span>
                                    <p>{downloadData.exp.min_exp} years</p>
                                    <span>Maximum Experience</span>
                                    <p>{downloadData.exp.max_exp} years</p>
                                </Grid>
                                <Grid item lg={4}>
                                    <span>Salary Range</span>
                                    <p>{downloadData.salary_detail.currency} {downloadData.salary_detail.sal_range.min_sal} - {downloadData.salary_detail.sal_range.max_sal}{' '}{downloadData.salary_detail.type} </p>
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
                                <p>{roles}
                                    </p>
                            </div>
                        </div>


                        <div className={classes.previewskills}>
                            <div className={classes.rolesTitle}>
                                <span>Skills & Language</span>
                            </div>
                            <hr />

                            <div className={classes.skillsandlangwrapper}>
                                    
                                    <RadioButtonUncheckedIcon />
                                        {
                                            downloadData._selected_skills.map((item, index) => (
    
                                                <Grid container key={index} style={{maxWidth: "100%"}}>
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


                                    <div className={classes.skillsandlangwrapper}>
                                
                                <RadioButtonUncheckedIcon />
                                    {
                                        downloadData._selected_languages.map((item, index) => (
    
                                            <Grid container style={{maxWidth: "100%"}}>
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
                        </div>



                    </Grid>

                    {/* <Grid item lg={4}>
                        <div className={classes.jdMeter}>
                            <span className="title" >JD Meter</span>
                        <RadarChart
                            captions={captions}
                            data={data}
                            size={300}
                        />
                        </div>
                    </Grid> */}
                </Grid>
            </div> : 
            <div className={classes.previewWrapper} ref={ref} style={{width: 1180}}>Loading...</div>
        )
    }
}

export default withStyles(styles)(JDDisplay);