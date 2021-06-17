import { connect } from "react-redux";
import JDHomeSearchForm from "./component";
import {
    selectFieldChangeHandler,
    saveUpdatedJobTitle,
    saveUpdatedJobSpec,
    saveUpdatedTemplateJobId,
    saveUpdatedTemplateSpecId
} from "../../actions"
import instance, { BASE_URL } from "../../../../api/config";
import {
    handleLoadingSpinnerClose,
    handleLoadingSpinnerOpenWithOptions
} from "../../../common/ReduxBased/LoadingSpinner/actions";
import ls from 'local-storage'

const mapStateToProps = state => ({
    fields: state.JDLANDING.forms.landingSearchForm.fields
})

const mapDispatchToProps = (dispatch, props) => ({
    selectFieldChangeHandler: (name, e) => {
        dispatch(selectFieldChangeHandler(name, e));
        if(name === "lookingField") {
            dispatch(selectFieldChangeHandler("forField", null));
            dispatch(saveUpdatedJobSpec(e ? e.spec : []));
            dispatch(saveUpdatedTemplateJobId(e))
            ls.set('jobId', e ? e.id : null);
            ls.set('jobIdLabel', e ? e.label : null);

            ls.set('specId', null);
            ls.set('specIdLabel', null);
        }
        if(name === "forField") {
            dispatch(saveUpdatedTemplateSpecId(e ? e.id : null));
            ls.set('specId', e ? e.id : null);
            ls.set('specIdLabel', e ? e.label : null);
        }
    },
    fetchDataIfNeeded: () => {
        dispatch(handleLoadingSpinnerOpenWithOptions(true, "Loading...", "large"));
        instance.get(BASE_URL+'Landing')
        .then(res => {
            dispatch(saveUpdatedJobTitle(res.data));
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
    ...ownProps,
})

export default connect(
    mapStateToProps,
    mapDispatchToProps,
    mergeProps
)(JDHomeSearchForm);