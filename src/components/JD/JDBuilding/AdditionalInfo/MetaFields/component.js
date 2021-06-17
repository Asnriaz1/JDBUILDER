import React, { Component } from 'react';
import { styles } from "./styles";
import { withStyles } from "@material-ui/core/styles";
import { Grid, Button, Tooltip, MenuItem } from "@material-ui/core";
// import CustomTextValidator from "../../../../common/ReduxBased/CustomTextValidator/component";
import ReactSelectValidator from "../../../../common/ReduxBased/CustomReactSelectValidator/ReactSelectValidator";
import CancelIcon from '@material-ui/icons/Cancel';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { ValidatorForm } from "react-material-ui-form-validator";
import axios from 'axios';

class AdditionalInfoMetaFields extends Component {


    submitSkillFormHandler = () => {
              this.props.submitSkillFormHandler();
    }
    submitLanguageFormHandler = () => {
        this.props.submitLanguageFormHandler();
    }
    componentDidMount = () => {
        this.props.fetchDataIfNeeded();
    }
  
    render() {
        const {
            classes,
            fields,
            selectFieldChangeHandler,
            textFieldChangeHandler,
            skillsData,
            languagesData,
            recommendedSkills,
            submitLanguageFormHandler,
            recommendedSkillActiveHandler,
            removeSkillHandler,
            submitSkillFormHandler,
            submitRecommenedSkillFormHandler,
            removeLanguageHandler
        } = this.props;

        return (
            <>
                <div className={classes.metafieldwrapper}>
                    <Grid container>
                        <Grid item xs={12} md={8} >
                            <Grid container item xs={12} md={12}>
                                <Grid item xs={12} md={4} className={classes.additionalInfofields}>
                                    <span className={classes.metatitle}>{fields.skillsField.label}</span>
                                </Grid>

                                <Grid item xs={12} md={3} className={classes.additionalInfofields}>
                                    <span className={classes.metatitle}>{fields.skillsLevelField.label}</span>
                                </Grid>

                                <Grid item xs={12} md={3} className={classes.additionalInfofields}>
                                    <span className={classes.metatitle}>{fields.skillsImportanceField.label}</span>
                                </Grid>
                            </Grid>


                         <Grid container item xs={12} md={12} className={classes.boxDistance}>

                                    <Grid item xs={12} md={4} className={classes.additionalInfofields} >

                                        <ReactSelectValidator
                                            id={fields.skillsField.name}
                                            fullWidth={true}
                                            isClearable={true}
                                            placeholder={fields.skillsField.placeholder}
                                            name={fields.skillsField.name}
                                            value={fields.skillsField.value}
                                            onChange={value => {
                                                selectFieldChangeHandler(
                                                    fields.skillsField.name,
                                                    value
                                                );
                                            }}
                                            options={fields.skillsField.options}
                                            isSearchable={true}
                                            className="skillsField"
                                        />
                                          
                                      
                                    </Grid>


                                    <Grid item xs={12} md={3} className={classes.additionalInfofields}>
                                        <ReactSelectValidator
                                            id={fields.skillsLevelField.name}
                                            validations={true}
                                            fullWidth={true}
                                            type="text"
                                            placeholder={fields.skillsLevelField.placeholder}
                                            name={fields.skillsLevelField.name}
                                            value={fields.skillsLevelField.value}
                                            onChange={value => {
                                                selectFieldChangeHandler(
                                                    fields.skillsLevelField.name,
                                                    value
                                                );
                                            }}
                                            options={fields.skillsLevelField.options}
                                            className="skillsLevelField"
                                        />
                                    </Grid>

                                    <Grid item xs={12} md={3} className={classes.additionalInfofields}>
                                        <ReactSelectValidator
                                            id={fields.skillsImportanceField.name}
                                            validations={true}
                                            fullWidth={true}
                                            type="text"
                                            placeholder={fields.skillsImportanceField.placeholder}
                                            name={fields.skillsImportanceField.name}
                                            value={fields.skillsImportanceField.value}
                                            onChange={value => {
                                                selectFieldChangeHandler(
                                                    fields.skillsImportanceField.name,
                                                    value
                                                );
                                            }}
                                            options={fields.skillsImportanceField.options}
                                            errorMessages={["Required"]}
                                            className="skillsImportanceField"
                                        />
                                    </Grid>

                                    <Grid item xs={12} md={1} className={classes.additionalInfofields}>
                                        <Button variant="contained" color="primary" onClick={this.props.submitSkillFormHandler}>Add
                                    </Button>
                                    </Grid>
                                </Grid>


                            {
                                skillsData.map((item, index) => (

                                    <Grid container item xs={12} md={12} key={index}>
                                        <Grid item xs={12} md={4} className={classes.additionalInfofields}>
                                            <div >
                                                <span >{item.title}</span>
                                            </div>
                                        </Grid>
                                        <Grid item xs={12} md={3} className={classes.additionalInfofields}>
                                            <span className={classes.metatitle}>{item.level}</span>
                                        </Grid>

                                        <Grid item xs={12} md={3} className={classes.additionalInfoLastfield}>
                                            <span className={classes.metatitle}>{item.importance}</span>
                                            <CancelIcon onClick={(e) => removeSkillHandler(item.id)} />
                                        </Grid>
                                    </Grid>
                                ))
                            }



                            <Grid container item xs={12} md={12} className={classes.additionalInfoLanguage}>

                                <Grid item xs={12} md={4} className={classes.additionalInfofields}>
                                    <span className={classes.metatitle}>{fields.languageField.label}</span>
                                </Grid>

                                <Grid item xs={12} md={3} className={classes.additionalInfofields}>
                                    <span className={classes.metatitle}>{fields.languageLevelField.label}</span>
                                </Grid>

                                <Grid item xs={12} md={3} className={classes.additionalInfofields}>
                                    <span className={classes.metatitle}>{fields.languageImportanceField.label}</span>
                                </Grid>

                            </Grid>


                        
                                <Grid container item xs={12} md={12} className={classes.boxDistance}>

                                    <Grid item xs={12} md={4} className={classes.additionalInfofields}>
                                        <ReactSelectValidator
                                            id={fields.languageField.name}
                                            validations={true}
                                            fullWidth={true}
                                            type="text"
                                            placeholder={fields.languageField.placeholder}
                                            name={fields.languageField.name}
                                            value={fields.languageField.value}
                                            onChange={value => {
                                                selectFieldChangeHandler(
                                                    fields.languageField.name,
                                                    value
                                                );
                                            }}
                                            options={fields.languageField.options}
                                            errorMessages={["Required"]}
                                            className="skillsField"
                                        />
                                    </Grid>

                                    <Grid item xs={12} md={3} className={classes.additionalInfofields}>
                                        <ReactSelectValidator
                                            id={fields.languageLevelField.name}
                                            validations={true}
                                            fullWidth={true}
                                            type="text"
                                            placeholder={fields.languageLevelField.placeholder}
                                            name={fields.languageLevelField.name}
                                            value={fields.languageLevelField.value}
                                            onChange={value => {
                                                selectFieldChangeHandler(
                                                    fields.languageLevelField.name,
                                                    value
                                                );
                                            }}
                                            options={fields.languageLevelField.options}
                                            errorMessages={["Required"]}
                                            className="skillsLevelField"
                                        />
                                    </Grid>

                                    <Grid item xs={12} md={3} className={classes.additionalInfofields}>
                                        <ReactSelectValidator
                                            id={fields.languageImportanceField.name}
                                            validations={true}
                                            fullWidth={true}
                                            type="text"
                                            placeholder={fields.languageImportanceField.placeholder}
                                            name={fields.languageImportanceField.name}
                                            value={fields.languageImportanceField.value}
                                            onChange={value => {
                                                selectFieldChangeHandler(
                                                    fields.languageImportanceField.name,
                                                    value
                                                );
                                            }}
                                            options={fields.languageImportanceField.options}
                                            errorMessages={["Required"]}
                                            className="languageImportanceField"
                                        />
                                    </Grid>

                                    <Grid item xs={12} md={1} className={classes.additionalInfofields}>
                                        <Button variant="contained" color="primary" onClick={this.props.submitLanguageFormHandler}>
                                            Add
                                    </Button>
                                    </Grid>
                                </Grid>
        

                            {
                                languagesData.map((item, index) => (
                                    <Grid container item xs={12} md={12}>
                                        <Grid item xs={12} md={4} className={classes.additionalInfofields}>
                                            <span className={classes.metatitle}>{item.title}</span>
                                        </Grid>

                                        <Grid item xs={12} md={3} className={classes.additionalInfofields}>
                                            <span className={classes.metatitle}>{item.level}</span>
                                        </Grid>

                                        <Grid item xs={12} md={3} className={classes.additionalInfoLastfield}>
                                            <span className={classes.metatitle}>{item.importance}</span>
                                            <CancelIcon onClick={(e) => removeLanguageHandler(item.id)} />
                                        </Grid>
                                    </Grid>
                                ))
                            }

                        </Grid>



                        <Grid item xs={12} md={4}>
                            <Grid container item xs={12} md={12} >


                                <div className={classes.additionalInfoRecommendedSkills}>
                                    <span className="title" >Recommended Skills</span>
                                    {
                                        recommendedSkills.map((item, index) => (
                                
                                            <Tooltip
                                                title={
                                                    <>
                                                        <p color="inherit">{item.title}</p>
                                                        <b>Level: </b>{item.level} <br />
                                                        <b>Importance: </b> {item.importance}
                                                    </>
                                                }
                                                key={item.id}
                                                arrow >
                                                <div onClick={() => submitRecommenedSkillFormHandler(item)} >
                                                    <CheckCircleIcon className={classes.svgbgactive} />
                                                    <span className={classes.svgbgactive}>{item.title}</span>
                                                </div>
                                            </Tooltip>
                                        ))
                                    }

                                </div>
                            </Grid>

                        </Grid>

                    </Grid>
                </div>
            </>
        )
    }
}

export default withStyles(styles)(AdditionalInfoMetaFields);