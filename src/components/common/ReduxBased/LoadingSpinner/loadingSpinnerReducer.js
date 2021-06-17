import { LOADING_SPINNER_OPEN_WITH_OPTIONS, LOADING_SPINNER_OPEN, LOADING_SPINNER_CLOSE } from "./actions";

export const loadingSpinnerReducer = (state = [], { type, payload }) => {
	switch (type) {
		//In case of loading with options
		case LOADING_SPINNER_OPEN_WITH_OPTIONS: {
			return {
				...state,
				loading: payload.loading,
				text: payload.text,
				size: payload.size
			};
		}
		//In case of loading
		case LOADING_SPINNER_OPEN: {
			return {
				...state,
				loading: true
			};
		}
		//In case of unloading
		case LOADING_SPINNER_CLOSE: {
			return {
				...state,
				loading: false
			};
		}
		default: {
			return {
				...state
			};
		}
	}
};
