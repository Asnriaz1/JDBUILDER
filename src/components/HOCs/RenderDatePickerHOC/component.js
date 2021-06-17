import React, { Component } from "react";
import equal from "deep-equal";

const RenderDatePickerHOC = WrappedComponent => {
	return class extends Component {
		shouldComponentUpdate(nextProps) {
			if(!!nextProps.disabled && nextProps.disabled === true) {
				return false;
			}
			return !equal(this.props, nextProps, true);
		}

		render() {
			return <WrappedComponent {...this.props} />;
		}
	};
};

export default RenderDatePickerHOC;
