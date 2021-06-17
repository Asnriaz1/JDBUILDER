import React, { Component } from "react";

const RoleBasedRenderHOC = WrappedComponent => {
	return class extends Component {
		render() {
			const { accessToRole, role } = this.props;

			if (!!accessToRole) {
				if (accessToRole.indexOf(role) === -1) {
					return <WrappedComponent {...this.props} disabled isDisabled />;
				}
			}
			return <WrappedComponent {...this.props} />;
		}
	};
};

export default RoleBasedRenderHOC;
