import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../reducers/rootReducer";
import thunk from "redux-thunk";
import initialState from "./initialState";
import { createLogger } from "redux-logger";
import { loadState, saveState } from "./localStorage"
import throttle from 'lodash/throttle';

// const middleware = [thunk, reduxImmutableStateInvariant()];
const middleware = [thunk];

middleware.push(createLogger({
	duration: true,
	diff: true
}));

let composedMiddleWare = compose(applyMiddleware(...middleware));

if (!!window.__REDUX_DEVTOOLS_EXTENSION__) {
	composedMiddleWare = compose(
		applyMiddleware(...middleware),
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	);
}


// localstorage
const persistedState = loadState();

const store = createStore(
	rootReducer,
	persistedState==null?initialState:persistedState,
	//initialState,
	composedMiddleWare
);

store.subscribe(throttle(() => {
	saveState({
		JDLANDING: store.getState().JDLANDING,
		LOGIN: store.getState().LOGIN,
		SIGNUP:  store.getState().SIGNUP,
		JOBOPENING:  store.getState().JOBOPENING,
		JOBSUMMARY:  store.getState().JOBSUMMARY,
		JDBUILDING:  store.getState().JDBUILDING,
		ALERT_DIALOG:  store.getState().ALERT_DIALOG,
		ADDITIONALINFO:  store.getState().ADDITIONALINFO,
		ADVERTISE:  store.getState().ADVERTISE,
		LOADING_SPINNER:  store.getState().LOADING_SPINNER,
		LANDING_DASHBOARD:  store.getState().LANDING_DASHBOARD,
		JOBS_DASHBOARD:  store.getState().JOBS_DASHBOARD,
		ADD_COLLABORATOR:  store.getState().ADD_COLLABORATOR,
		COMPANY_INFO:  store.getState().COMPANY_INFO
	});
}, 1000));

export default store;