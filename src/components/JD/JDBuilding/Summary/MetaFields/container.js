import { connect } from "react-redux";
import JobSummaryMetaFields from "./component";
import {
    textFieldChangeHandler,
    summaryDataActiveHandler,
    saveUpdatedSummaryEditor,
    saveUpdatedSummaryAsHTML
} from "../actions";

const mapStateToProps = state => ({
    fields: state.JOBSUMMARY.forms.jobSummaryForm.fields,
    dataList: state.JOBSUMMARY.data.dataList,
    rawContentSummary: state.JOBSUMMARY.data.rawContentSummary,
    rawContentSummaryAsHTML: state.JOBSUMMARY.data.rawContentSummaryAsHTML
})

const mapDispatchToProps = (dispatch, props) => ({
    textFieldChangeHandler: (name, e) => {
        if (typeof e.value !== "string") {
            e.value = "";
        }
        dispatch(textFieldChangeHandler(name, e.value));
    },
    summaryDataActiveHandler: (value) => {
        dispatch(summaryDataActiveHandler(value));
    },
    saveUpdatedSummaryEditor: (rawContents) => {
        dispatch(saveUpdatedSummaryEditor(rawContents));
    },
    saveUpdatedSummaryAsHTML: (content) => {
        dispatch(saveUpdatedSummaryAsHTML(content));
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
)(JobSummaryMetaFields);