export const LOADING_SPINNER_OPEN_WITH_OPTIONS = "LOADING_SPINNER_OPEN_WITH_OPTIONS";
export const LOADING_SPINNER_OPEN = "LOADING_SPINNER_OPEN";
export const LOADING_SPINNER_CLOSE = "LOADING_SPINNER_CLOSE";

//To open loading component with options - default -> loading = true, text = "Loading", size = "default"
export const handleLoadingSpinnerOpenWithOptions = (loading = true, text = "Loading", size = "default") => dispatch => {
	dispatch({
		type: LOADING_SPINNER_OPEN_WITH_OPTIONS,
		payload: {
			loading: loading,
			text: text,
			size: size
		}
	});
};
//To open loading component
export const handleLoadingSpinnerOpen = () => dispatch => {
	dispatch({
		type: LOADING_SPINNER_OPEN
	});
};
//To close loading component
export const handleLoadingSpinnerClose = () => dispatch => {
	dispatch({
		type: LOADING_SPINNER_CLOSE
	});
};
