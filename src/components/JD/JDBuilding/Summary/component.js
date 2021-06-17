import React, {Component} from 'react';
import { styles } from "./styles";
import { withStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import JobSummaryMetaFields from "./MetaFields/container";
import { ValidatorForm } from "react-material-ui-form-validator";
import AlertDialog from "../../../common/ReduxBased/confirmationDialog/container";
import {getAppStoreValue} from "../../../common/Helpers";
import Login from "../../../Login/container";
import CollaboratorAndPreview from "../CollaboratorAndPreview/container";
import { NavLink } from 'react-router-dom';

class JobSummary extends Component {

    loginandSubmitTemplateHandler = (value) => {
        this.props.showLoginPopupHandler(value);
    }

    componentDidMount = () => {
        debugger
        this.props.fetchDataSummary();
    }
    render() {
        const {
            classes,
            submitTemplateHandler,
            headerPathActiveHandler,
            submitbutton,
            loginandSubmitTemplateHandler,
            login
        } = this.props;

        const userText = getAppStoreValue("userText");

        return (
            <>
                <div className={classes.jobsummarywrapper}>
                {userText ? 
                    <></>:
                    <AlertDialog
                        customClass={classes.removeSubActionMainDialog}
                        maxWidth={'sm'}
                        open={login}
                        showTitle={true}
                        title="Please login to proceed"
                        message={<Login isPopup={true} submitandSaveBtn={loginandSubmitTemplateHandler}/>}
                        applyButtonText={"Done"}
                        hideApplyButton={true}
                        cancelAlertDialog={() => this.loginandSubmitTemplateHandler(false)}
                        closeAlertDialog={() => this.loginandSubmitTemplateHandler(false)}
                        applyAlertDialog={() => this.loginandSubmitTemplateHandler(false)}
                    />
                }
                    <CollaboratorAndPreview />
                    
                    <ValidatorForm
                        // onSubmit={this.SubmitHandler}
                        // autoComplete="off"
                        >
                        <JobSummaryMetaFields />
                    </ValidatorForm>

                    <NavLink
                        to="/create/info"
                        className={classes.jdbuildingbackbtn}
                    >
                        <Button variant="contained" color="primary" type="submit">
                            Back
                        </Button>
                    </NavLink>

                    {
                        userText ?
                        
                    <NavLink
                    to="/create/advertise"
                    className={classes.jdbuildingnextbtn}
                    onClick={() => {headerPathActiveHandler(2); submitTemplateHandler()} }

                >
                            <Button variant="contained" color="primary" type="submit"  >
                                Save &amp; Next
                            </Button> 
                        </NavLink>
                        : 

                        <>
                            <Button variant="contained" color="primary" onClick={() => this.loginandSubmitTemplateHandler(true)}>
                                Save
                            </Button>
                        </>
                    }
                    
                </div>
            </>
        )
    }
}

export default withStyles(styles)(JobSummary);