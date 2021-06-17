import React, { Component } from "react";

const WindowDimensionsHOC = WrappedComponent => {
	return class extends Component {
		shouldComponentUpdate(nextProps) {
			return !(JSON.stringify(this.props) === JSON.stringify(nextProps));
		}

		render() {
			return <WrappedComponent {...this.props} />;
		}
	};
};

export default WindowDimensionsHOC;
