import React, { Component } from 'react';
import { styles } from "./styles";
import { withStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import AdditionalInfoMetaFields from "./MetaFields/container";
import { NavLink } from "react-router-dom";
import CollaboratorAndPreview from "../CollaboratorAndPreview/container";
import { getAppStoreValue } from "../../../common/Helpers";
import instance, { BASE_URL, BASE_URL_SQL } from "../../../../api/config";
import { ValidatorForm } from "react-material-ui-form-validator";
import Snackbar from '@material-ui/core/Snackbar';

class AdditionalInfo extends Component {

    state = {
        open: false

    }
    componentDidMount = () => {
        this.props.fetchDataIfNeeded();
    }
    saveAdditionalInfo = () => {
        // debugger
        // if (this.props.skillsData.length>0 && this.props.languageData.length>0){

        // let _selected_languages = this.props.languageData ? this.props.languageData.map(item => {
        //     return {
        //         _id: item.id,
        //         level: item.level,
        //         importance: item.importance,
        //         title: item.title
        //     }

        // }) : []

        // console.log(_selected_languages)
        // let _selected_skills = this.props.skillsData ? this.props.skillsData.map(item => {
        //     return {
        //         _id: item.id,
        //         level: item.level,
        //         importance: item.importance,
        //         title: item.title
        //     }
        // }) : []



        // let additionalInfoData = {
        //     job_code: this.props.jobCodeField,
        //     template_id: this.props.templateId,
        //     title: this.props.jobTitle,
        //     _selected_skills: _selected_skills,
        //     _selected_languages: _selected_languages,

        // }
        // console.log('Additional Info Data is here', additionalInfoData);

        // instance.post(BASE_URL + 'UserTemplates?sectionId=UT2', additionalInfoData)
        //     .then(res => {
        //         this.props.history.push('/create/summary');

        //     })
        //     .catch(error => {
        //         this.props.history.push('/create/info');
        //     });
        // }
        // else 
        // this.setState({
        //     open:true
        // }) 

        this.props.history.push('/create/summary');
    }
    
    SubmitHandler = () => {
        debugger
        if (this.props.skillsData.length>0 && this.props.languageData.length>0){
        this.props.history.push('/create/summary');
        this.props.headerPathActiveHandler(1);
    }
    else 
    this.setState({
        open:true
    }) 
    }


    render() {
        const {
            classes,
            headerPathActiveHandler,
            SubmitHandler
        } = this.props;
        const userText = getAppStoreValue("userText");

        return (
            <>
                <div className={classes.additionalinfowrapper}>
                    <ValidatorForm
                        onSubmit={userText ? this.saveAdditionalInfo : this.SubmitHandler}
                    // autoComplete="off"
                    >
                        <CollaboratorAndPreview />

                        <AdditionalInfoMetaFields />

                        <NavLink
                            to="/create/jobopening"
                            className={classes.jdbuildingbackbtn}
                        >
                            <Button variant="contained" color="primary" type="submit">
                                Back
                            </Button>
                        </NavLink>
                        {userText ?
                            <Button variant="contained" color="primary" type="submit" >
                                Save & Next
                            </Button>
                            :
                            <Button variant="contained" color="primary" type="submit">
                                Next
                            </Button>
                        }
                    </ValidatorForm>
                    <Snackbar
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    open={this.state.open}
                    autoHideDuration={600}
                    severity="error"
                    message="Please fill all the details"
                    action={
                        <React.Fragment>

                        </React.Fragment>
                    }
                />
                </div>
            </>
        )
    }
}

export default withStyles(styles)(AdditionalInfo);