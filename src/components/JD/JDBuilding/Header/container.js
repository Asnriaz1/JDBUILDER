import { connect } from "react-redux";
import JDBuildingHeader from "./component";
import {
    pathChangeHandler
} from "../actions";
import ls from "local-storage";

const mapStateToProps = state => ({
    headerLinks: state.JDBUILDING.data.headerLinks,
    headerPath: state.JDBUILDING.data.activePath,
    title: state.JOBOPENING.forms.jobOpeningForm.fields.jobTitleField.value,
    jobcode: state.JOBOPENING.forms.jobOpeningForm.fields.jobCodeField.value,
})

const mapDispatchToProps = (dispatch, props) => ({
    pathChangeHandler: (value) => {
        dispatch(pathChangeHandler(value));
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
)(JDBuildingHeader);