import {
    handleLoadingSpinnerClose,
    handleLoadingSpinnerOpenWithOptions
} from "../../../common/ReduxBased/LoadingSpinner/actions";
import { connect } from "react-redux";
import AdditionalInfo from "./component";
import {
    headerPathActiveHandler,
    pathChangeHandler,
} from "../actions";
import {
    fetchDataIfNeeded
} from "./actions";

import instance, { BASE_URL } from "../../../../api/config";
import ls from 'local-storage'

const mapStateToProps = state => ({
    jobCodeField:state.JOBOPENING.forms.jobOpeningForm.fields.jobCodeField.value,
    templateId: state.JDLANDING.data.templateId,
    jobTitle:state.JOBOPENING.forms.jobOpeningForm.fields.jobTitleField.value,
    skillsData: state.ADDITIONALINFO.data.skillsData,
    languageData: state.ADDITIONALINFO.data.languagesData,

})

const mapDispatchToProps = (dispatch, props) => ({
    headerPathActiveHandler: (val) => {
        dispatch(headerPathActiveHandler(val));
        dispatch(pathChangeHandler("/create/summary"))
    },
    fetchDataIfNeeded: (templateId) => {
        dispatch(handleLoadingSpinnerOpenWithOptions(true, "Loading Recommended Skills...", "large"));
        let savedTempId = ls.get('suggestedTempId')
        let paramVal = templateId ? templateId : savedTempId

        instance.get(BASE_URL+'Templates?templateId='+paramVal+'&sectionId=TS2')
        .then(res => {
            dispatch(fetchDataIfNeeded(res.data));
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
    fetchDataIfNeeded: () => {
        dispatchProps.fetchDataIfNeeded(stateProps.templateId);
    },
    ...ownProps,
})

export default connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps
)(AdditionalInfo);