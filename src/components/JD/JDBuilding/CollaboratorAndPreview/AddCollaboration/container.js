import { connect } from "react-redux";
import AddCollaboration from "./component";
import {
    handleLoadingSpinnerClose,
    handleLoadingSpinnerOpenWithOptions
} from "../../../../common/ReduxBased/LoadingSpinner/actions";
import {
    textFieldChangeHandler,
    saveAddedCollaborators
} from "../actions";
import ls from 'local-storage';
import instance, { BASE_URL_COL } from "../../../../../api/config";

const mapStateToProps = state => ({
    fields: state.ADD_COLLABORATOR.forms.addCollaboratorForm.fields,
    EmailField: state.ADD_COLLABORATOR.forms.addCollaboratorForm.fields.EmailField.value,
    NameField: state.ADD_COLLABORATOR.forms.addCollaboratorForm.fields.NameField.value,
    addedCollaborator: state.ADD_COLLABORATOR.data.addedCollaborator,
    jobCode :state.JOBOPENING.forms.jobOpeningForm.fields.jobCodeField.value,
    jobTitle:state.JOBOPENING.forms.jobOpeningForm.fields.jobTitleField.value,

})


const mapDispatchToProps = (dispatch, props) => ({
    textFieldChangeHandler: (name, e) => {
        if (typeof e.value !== "string") {
            e.value = "";
        }
        dispatch(textFieldChangeHandler(name, e));
    },
    // sendCollaboration: () => {
    //     // dispatch(handleLoadingSpinnerOpenWithOptions(true, "Sending Invite...", "large"));
    //     let data = {
    //         //Collab_email: this.state.ADD_COLLABORATOR.forms.addCollaboratorForm.fields.EmailField,
    //         Collab_Name: "Ahsan",
    //         Job_Title: "Intermediate Node.Js Developer",
    //         Job_Code: "JDB1569",
    //     }
    //     debugger
       
    //     instance.post(BASE_URL_COL+'User/SendCollabInvite', data)
    //     .then(res => {
    //         dispatch(handleLoadingSpinnerClose());
    //     })
    //     .catch(error => {
    //         dispatch(handleLoadingSpinnerClose());
    //     })
    // }

})

const mergeProps = (stateProps, dispatchProps, ownProps) => ({
    ...stateProps,
    ...dispatchProps,
    addCollaboratorHandler: () => {
        dispatchProps.addCollaboratorHandler(stateProps.fields.EmailField.value, stateProps.fields.NameField.value)
    },
    ...ownProps,
})

export default connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps
)(AddCollaboration);