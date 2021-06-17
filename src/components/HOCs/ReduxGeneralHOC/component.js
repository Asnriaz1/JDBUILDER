import React, { Component } from "react";
import equal from "deep-equal";

const ReduxGeneralHOC = WrappedComponent => {
	return class extends Component {
		shouldComponentUpdate(nextProps) {
			return !equal(this.props, nextProps, true);
		}

		render() {
			return <WrappedComponent {...this.props} />;
		}
	};
};

export default ReduxGeneralHOC;
