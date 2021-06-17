import { connect } from "react-redux";
import RoleBasedRenderHOC from "./component";
import { compose } from "redux";

const mapStateToProps = state => ({
	role: !!localStorage.getItem("roles") ? JSON.parse(localStorage.getItem("roles"))[0] : ""
});

const mapDispatchToProps = (dispatch, props) => ({});

const mergeProps = (stateProps, dispatchProps, ownProps) => ({
	...stateProps,
	...dispatchProps,
	...ownProps
});

export default compose(
	connect(
		mapStateToProps,
		mapDispatchToProps,
		mergeProps
	),
	RoleBasedRenderHOC
);
