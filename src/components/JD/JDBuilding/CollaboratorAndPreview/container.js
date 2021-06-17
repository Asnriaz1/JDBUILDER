import { connect } from "react-redux";
import CollaboratorAndPreview from "./component";
import {
    handleLoadingSpinnerClose,
    handleLoadingSpinnerOpenWithOptions
} from "../../../common/ReduxBased/LoadingSpinner/actions";
import instance, { BASE_URL_COL } from "../../../../api/config";

const mapStateToProps = state => ({
    templateSpecId: state.JDLANDING.data.templateSpecId,
    templateId: state.JDLANDING.data.templateId,
    addedCollaborator: state.ADD_COLLABORATOR.data.addedCollaborator
})

const mapDispatchToProps = (dispatch, props) => ({
    sendCollaboration: (addedCollaborator) => {
        dispatch(handleLoadingSpinnerOpenWithOptions(true, "Sending Invite...", "large"));

        instance.post(BASE_URL_COL+'User/SendCollabInvite', addedCollaborator)
        .then(res => {
            dispatch(handleLoadingSpinnerClose());
        })
        .catch(error => {
            dispatch(handleLoadingSpinnerClose());
        })
    }
    
})

const mergeProps = (stateProps, dispatchProps, ownProps) => ({
    ...stateProps,
    ...dispatchProps,
    sendCollaboration: () => {
        dispatchProps.sendCollaboration(stateProps.addedCollaborator)
    },
    ...ownProps,
})

export default connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps
)(CollaboratorAndPreview);