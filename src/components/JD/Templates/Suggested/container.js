import { connect } from "react-redux";
import SuggestedTemplates from "./component";
import {
    saveUpdatedTemplates,
    saveTemplateIdHandler
} from "../../actions";

import instance, { BASE_URL } from "../../../../api/config";
import {
    handleLoadingSpinnerClose,
    handleLoadingSpinnerOpenWithOptions
} from "../../../common/ReduxBased/LoadingSpinner/actions";
import ls from 'local-storage'

const mapStateToProps = state => ({
    templates: state.JDLANDING.data.templatesData,
    templateJobId: state.JDLANDING.data.templateJobId,
    templateSpecId: state.JDLANDING.data.templateSpecId
})

const mapDispatchToProps = (dispatch, props) => ({
    saveUpdatedTemplates: (templateJobId, templateSpecId) => {
        ls.set('jobCode', '');
        let savedJobId = ls.get('jobId')
        let savedSpecId = ls.get('specId')
        dispatch(handleLoadingSpinnerOpenWithOptions(true, "Loading Templates...", "large"));

        savedJobId = templateJobId ? templateJobId : savedJobId
        savedSpecId = templateSpecId ? templateSpecId : savedSpecId

        let paramVal = savedSpecId ? 'specId='+savedSpecId : 'jobId='+savedJobId
        
        instance.get(BASE_URL+'Templates?'+paramVal)
        .then(res => {
            dispatch(saveUpdatedTemplates(res.data));
            dispatch(handleLoadingSpinnerClose());
        })
        .catch(error => {
            dispatch(handleLoadingSpinnerClose());
        })
    },
    saveTemplateIdHandler: (value) => {
        ls.set('suggestedTempId', value);
        dispatch(saveTemplateIdHandler(value));
    }
})

const mergeProps = (stateProps, dispatchProps, ownProps) => ({
    ...stateProps,
    ...dispatchProps,
    saveUpdatedTemplates: () => {
        dispatchProps.saveUpdatedTemplates(stateProps.templateJobId, stateProps.templateSpecId)
    },
    ...ownProps,
})

export default connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps
)(SuggestedTemplates);