import { connect } from "react-redux";
import LoadingSpinner from "./component";

const mapStateToProps = state => ({
	loading: state.LOADING_SPINNER.loading,
	text: state.LOADING_SPINNER.text,
	size: state.LOADING_SPINNER.size
});

const mapDispatchToProps = (dispatch, props) => ({});

const mergeProps = (stateProps, dispatchProps, ownProps) => ({
	...stateProps,
	...dispatchProps,
	...ownProps
});

export default connect(
	mapStateToProps,
	mapDispatchToProps,
	mergeProps
)(LoadingSpinner);
