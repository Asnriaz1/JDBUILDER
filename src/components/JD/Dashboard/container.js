import { connect } from "react-redux";
import UserDashboard from "./component";

const mapStateToProps = state => ({
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
)(UserDashboard);