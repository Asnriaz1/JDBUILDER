import React, { Component } from 'react';
import { styles } from "./styles";
import { withStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import JobOpeningMetaFields from "./MetaFields/container";
import { ValidatorForm } from "react-material-ui-form-validator";
import { NavLink, withRouter } from "react-router-dom";
import AlertDialog from "../../../common/ReduxBased/confirmationDialog/container";
import Login from "../../../Login/container";
import CollaboratorAndPreview from "../CollaboratorAndPreview/container";
import { getAppStoreValue } from "../../../common/Helpers";
import ls from 'local-storage';
import instance, { BASE_URL, BASE_URL_SQL } from "../../../../api/config";
import Snackbar from '@material-ui/core/Snackbar';


const accessToken = getAppStoreValue("access_token")
class JobOpening extends Component {
    state = {
        open: false

    }
    componentDidMount = () => {
        const userId = getAppStoreValue('user_id');
        const userName = getAppStoreValue('nameTitle')
        let isLogin = userId && userName ? true : false
        if (isLogin) {
            this.props.getJobCode();
        }
        this.props.fetchDataSuggestedTemplate();
    }

    SubmitHandler = () => {
        this.props.history.push('/create/info');
        this.props.headerPathActiveHandler(0);
    }

    saveJobOpening = () => {

        var experience = { "min_exp": this.props.minYearField, "max_exp": this.props.maxYearField }
        var rolesDataFilter = this.props.rolesData.filter((item) => {
            return item.isActive == true
        }).map(item => item.id)

        var resDataFilter = this.props.resData.filter((item) => {
            return item.isActive == true
        }).map(item => item.id)

        console.log('these are props', this.props)


        let salary_range = {
            min_sal: null,
            max_sal: null
        };
        if (this.props.salaryTypeField === "yearly") {

            let min_max = this.props.yearlySalaryRangField[0].value.split('-');
            salary_range.min_sal = parseInt(min_max[0]);
            salary_range.max_sal = parseInt(min_max[1]);

        }
        else if (this.props.salaryTypeField === "hourly") {
            let min_max = this.props.hourlyMaxRateField[0].value.split('-');
            salary_range.min_sal = parseInt(min_max[0]);
            salary_range.max_sal = parseInt(min_max[1]);

        }
        else if (this.props.salaryTypeField === "monthly") {

            let min_max = this.props.monthlySalaryRangField[0].value.split('-');
            salary_range.min_sal = parseInt(min_max[0]);
            salary_range.max_sal = parseInt(min_max[1]);

        }
        let savedTempId = ls.get('suggestedTempId')
        let paramVal = this.props.templateId ? this.props.templateId : savedTempId


        let data = {

            job_code: this.props.jobCodeField,
            template_id: paramVal,
            title: this.props.jobTitle,
            _selected_rr: {
                htmlstring: this.props.rolesResHTMLData,
                rol: rolesDataFilter,
                res: resDataFilter
            },
            salary_detail: {
                sal_range: salary_range,
                type: this.props.salaryTypeField,
                currency: 'Dollar',
                visible: true
            },
            exp: experience,
            _selected_industry: this.props.industryField[0].id,
            _selected_function: this.props.functionField[0].id,
            employment_type: this.props.employmenTypeField[0].value,
            positions: parseInt(this.props.positionField),
            remote_work: this.props.remoteWorkingField,
            qualification: this.props.QualificationField[0].value,
            address: this.props.AddressField,


        }
        console.log(data)


        instance.post(BASE_URL + 'UserTemplates',data)
            .then((data) => {
                console.log(data)
                this.props.history.push('/create/info');
            })
            .catch(error => {
                this.setState({
                open: true
                });
            })

    }
    render() {
        const {
            classes,
            headerPathActiveHandler,
            isLogin
        } = this.props;
        const userText = getAppStoreValue("userText");

        return (
            <>
                <div className={classes.jobopeningwrapper}>

                    <CollaboratorAndPreview />

                    <ValidatorForm
                        onSubmit={userText?this.saveJobOpening:this.SubmitHandler}
                    // autoComplete="off"
                    >
                        <JobOpeningMetaFields />

                        {/* <NavLink
                            to="/create/info"
                            className={classes.jdbuildingnextbtn}
                            onClick={() => headerPathActiveHandler(0)}
                        > */}
                        {userText ?
                            <Button variant="contained" color="primary" type="submit" >
                                Save & Next
                            </Button>
                            :
                            <Button variant="contained" color="primary" type="submit">
                                Next
                            </Button>
                        }
                        {/* </NavLink> */}
                    </ValidatorForm>
                </div>
                <Snackbar
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    open={this.state.open}
                    autoHideDuration={600}

                    message="Please fill all the details"
                    action={
                        <React.Fragment>

                        </React.Fragment>
                    }
                />
            </>

        )
    }
}

export default withStyles(styles)(withRouter(JobOpening));