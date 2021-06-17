import { connect } from "react-redux";
import InfoDialog from "./component";
import {openInfoDialog, closeInfoDialog} from "./actions";

const mapStateToProps = state => ({
	open: state.ALERT_DIALOG.UISettings.infoDialog.open,
	displayType: state.ALERT_DIALOG.UISettings.infoDialog.displayType,
	title: state.ALERT_DIALOG.UISettings.infoDialog.title,
	text: state.ALERT_DIALOG.UISettings.infoDialog.text,
	heading: state.ALERT_DIALOG.UISettings.infoDialog.heading,
	image: state.ALERT_DIALOG.UISettings.infoDialog.image,
	maxWidth: state.ALERT_DIALOG.UISettings.infoDialog.maxWidth
});

const mapDispatchToProps = (dispatch, props) => ({
	openInfoDialog: () => {
		dispatch(openInfoDialog());
	},
	closeInfoDialog: () => {
		dispatch(closeInfoDialog());
	}
});

const mergeProps = (stateProps, dispatchProps, ownProps) => ({
	...stateProps,
	...dispatchProps,
	...ownProps
});

export default connect(
	mapStateToProps,
	mapDispatchToProps,
	mergeProps
)(InfoDialog);
