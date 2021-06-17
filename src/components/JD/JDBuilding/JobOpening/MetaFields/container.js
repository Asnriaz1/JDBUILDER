import { connect } from "react-redux";
import JobOpeningMetaFields from "./component";
import {
    textFieldChangeHandler,
    toggleAddRoleExpansionPanel,
    toggleAddResExpansionPanel,
    radioChangeHandler,
    switchChangeHandler,
    selectFieldChangeHandler,
    rolesActiveHandler,
    resActiveHandler,
    saveUpdatedRolesResEditor,
    saveUpdatedRolesResAsHTML
} from "../actions";
import instance, { BASE_URL } from "../../../../../api/config";

const mapStateToProps = state => ({
    fields: state.JOBOPENING.forms.jobOpeningForm.fields,
    addRoleIsExpanded: state.JOBOPENING.UISettings.addRoleIsExpanded,
    addResIsExpanded: state.JOBOPENING.UISettings.addResIsExpanded,
    rolesData: state.JOBOPENING.data.rolesData,
    resData: state.JOBOPENING.data.resData,
    rawContentRolesRes: state.JOBOPENING.data.rawContentRolesRes,
    rolesResHTMLData: state.JOBOPENING.data.rolesResHTMLData
})

const mapDispatchToProps = (dispatch, props) => ({
    textFieldChangeHandler: (name, e) => {
        if (typeof e.value !== "string") {
            e.value = "";
           
        }
        dispatch(textFieldChangeHandler(name, e.value));
    },
    toggleAddRoleExpansionPanel: (val) => {
        dispatch(toggleAddRoleExpansionPanel(val));
    },
    toggleAddResExpansionPanel: (val) => {
        dispatch(toggleAddResExpansionPanel(val));
    },
    radioChangeHandler: (e) => {
        dispatch(radioChangeHandler(e.target.value));
    },
    switchChangeHandler: (name, e) => {
        dispatch(switchChangeHandler(name, e.target.checked))
    },
    selectFieldChangeHandler: (name, e) => {
        dispatch(selectFieldChangeHandler(name, e));
    },
    rolesActiveHandler: (value) => {
        dispatch(rolesActiveHandler(value));
    },
    resActiveHandler: (value) => {
        dispatch(resActiveHandler(value));
    },
    // fetchDataIfNeeded: () => {
    //     instance.get('https://dev.specialisedjobs.com:5005/Templates?jobId=5fbe0370dfb2eef85a7b0a82')
    //     .then(res => {
    //     })
    //     .catch(error => {
            
    //     })
    // },
    saveUpdatedRolesResEditor: (rawContent) => {
        dispatch(saveUpdatedRolesResEditor(rawContent))
    },
    saveUpdatedRolesResAsHTML: (content) => {
        dispatch(saveUpdatedRolesResAsHTML(content));
    }
})

const mergeProps = (stateProps, dispatchProps, ownProps) => ({
    ...stateProps,
    ...dispatchProps,
    ...ownProps,
})

export default connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps
)(JobOpeningMetaFields);