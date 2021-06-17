import { connect } from "react-redux";
import PatientDetail from "./component";
import { fetchDataIfNeeded, pageUnload, PatientDetailActions, removeFile } from "./actions";
import { PermanentActions } from "../../actions/permanentActions";
import { CommonActions } from "../../../chargeMaster/actions/commonActions";
import { updateFiles } from "../addTemporaryPatient/dropzoneUploadFiles/actions";

const mapStateToProps = state => ({
	data: state.FACESHEET.data,
	showLoader: state.FACESHEET.UISettings.showLoader,
	template: state.fetchedTemplate.fetchedTemplate
});

const mapDispatchToProps = (dispatch, props) => ({
	fetchDataIfNeeded: data => {
		dispatch(fetchDataIfNeeded(data));
	}
});

const mergeProps = (stateProps, dispatchProps, ownProps) => ({
	...stateProps,
	...dispatchProps,
	...ownProps,
	patientDetail: stateProps.data.patientDetail.result,
	identificationFiles:
		!!stateProps.data.patientDetail.result.patientDocs &&
		!!stateProps.data.patientDetail.result.patientDocs.identification &&
		stateProps.data.patientDetail.result.patientDocs.identification.length > 0
			? stateProps.data.patientDetail.result.patientDocs.identification.map(item => {
					item.type = item.contentType;
					item.name = item.fileName;
					item.url = item.fileDownloadUri;
					return item;
			  })
			: [],
	clinicalFiles:
		!!stateProps.data.patientDetail.result.patientDocs && !!stateProps.data.patientDetail.result.patientDocs.clinical && stateProps.data.patientDetail.result.patientDocs.clinical.length > 0
			? stateProps.data.patientDetail.result.patientDocs.clinical.map(item => {
					item.type = item.contentType;
					item.name = item.fileName;
					return item;
			  })
			: [],
	isTemporary: !!stateProps.data.patientDetail.result.registrationType && stateProps.data.patientDetail.result.registrationType === "Temporary" ? true : false,
	updateIdentificationFiles: acceptedFiles => {
		dispatchProps.updateFiles(acceptedFiles, stateProps.data.patientDetail.result.mrNumber, 1);
	},
	fetchDataIfNeeded: () => {
		dispatchProps.fetchDataIfNeeded(stateProps.data);
	}
});

export default connect(
	mapStateToProps,
	Object.assign({}, PermanentActions, CommonActions, PatientDetailActions),
	// mapDispatchToProps,
	mergeProps
)(PatientDetail);
