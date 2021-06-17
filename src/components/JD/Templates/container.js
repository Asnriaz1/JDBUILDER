import { connect } from "react-redux";
import Templates from "./component";

const mapStateToProps = state => ({
    lookingVal: state.JDLANDING.forms.landingSearchForm.fields.lookingField.value.length ? state.JDLANDING.forms.landingSearchForm.fields.lookingField.value[0].label : "",
    forVal: state.JDLANDING.forms.landingSearchForm.fields.forField.value.length ? state.JDLANDING.forms.landingSearchForm.fields.forField.value[0].label : ""
})

const mapDispatchToProps = (dispatch, props) => ({
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
)(Templates);