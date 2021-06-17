import { connect } from "react-redux";
import JDDisplayPreview from "./component";

const mapStateToProps = state => ({
    jobOpeningData: state.JOBOPENING.forms.jobOpeningForm.fields,
    rawContentRolesRes: state.JOBOPENING.data.rawContentRolesRes,
    additionalInfoSkillsData: state.ADDITIONALINFO.data.skillsData,
    additionalInfoLangData: state.ADDITIONALINFO.data.languagesData,
    jobSummary: state.JOBSUMMARY.data.rawContentSummaryAsHTML
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
)(JDDisplayPreview);