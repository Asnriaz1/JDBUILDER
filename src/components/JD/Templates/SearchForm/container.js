import { connect } from "react-redux";
import JDHomeSearchForm from "./component";
import {
    selectFieldChangeHandler,
    saveUpdatedJobTitle,
    saveUpdatedJobSpec,
    saveUpdatedTemplateJobId,
    saveUpdatedTemplateSpecId,
    saveUpdatedTemplates
} from "../../actions";

import {
    handleLoadingSpinnerClose,
    handleLoadingSpinnerOpenWithOptions
} from "../../../common/ReduxBased/LoadingSpinner/actions";

import instance, { BASE_URL } from "../../../../api/config";
import ls from 'local-storage'

const mapStateToProps = state => ({
    fields: state.JDLANDING.forms.landingSearchForm.fields,
    templateJobId: state.JDLANDING.data.templateJobId,
    templateSpecId: state.JDLANDING.data.templateSpecId,
})

const mapDispatchToProps = (dispatch, props) => ({
    selectFieldChangeHandler: (name, e) => {
        dispatch(selectFieldChangeHandler(name, e));
        if(name === "lookingField") {
            dispatch(selectFieldChangeHandler("forField", null));
            dispatch(saveUpdatedJobSpec(e.spec));
            dispatch(saveUpdatedTemplateJobId(e));
            ls.set('jobId', e ? e.id : null);
            ls.set('jobIdLabel', e ? e.label : null);

            ls.set('specId', null);
            ls.set('specIdLabel', null);
            //in case we only have job id
            dispatch(handleLoadingSpinnerOpenWithOptions(true, "Loading Templates...", "large"));

            let paramVal = e.id

            instance.get(BASE_URL+'Templates?jobId='+paramVal)
            .then(res => {
                dispatch(saveUpdatedTemplates(res.data));
                dispatch(handleLoadingSpinnerClose());
            })
            .catch(error => {
                dispatch(handleLoadingSpinnerClose());
            })
        }
        if(name === "forField") {
            dispatch(saveUpdatedTemplateSpecId(e ? e.id : null));
            ls.set('specId', e ? e.id : null);
            ls.set('specIdLabel', e ? e.label : null);
            
            //in case we sepecid
            dispatch(handleLoadingSpinnerOpenWithOptions(true, "Loading Templates...", "large"));

            if(e) {
                let paramVal = e.id

                instance.get(BASE_URL+'Templates?specId='+paramVal)
                .then(res => {
                    dispatch(saveUpdatedTemplates(res.data));
                    dispatch(handleLoadingSpinnerClose());
                })
                .catch(error => {
                    dispatch(handleLoadingSpinnerClose());
                })
            }else {
                dispatch(handleLoadingSpinnerClose());
            }
        }
    },
    fetchDataIfNeeded: () => {
        instance.get(BASE_URL+'Landing')
        .then(res => {
            dispatch(saveUpdatedJobTitle(res.data));
        })
        .catch(error => {
            
        })
    },
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