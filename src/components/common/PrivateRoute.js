import { Redirect, Route } from "react-router-dom";
import React, {Component} from 'react';

class PrivateRoute extends Component {
    render() {
        const { component: Component, isAuthenticated, ...rest } = this.props;
        return (
            <Route 
                {...rest}
                render={props =>
                    isAuthenticated ? (
                        <>
                            <Component {...props} />
                        </>
                    ) : (
                        <>
                            <Redirect
                                to={{
                                    pathname: "/login",
                                    state: {from: props.location}
                                }}
                            />
                        </>
                    )
                    }
                
            />

        )
    }
}

export default PrivateRoute;