import { Redirect, Route } from "react-router-dom";
import React, {Component} from 'react';

class PublicRoute extends Component {
    render() {
        const { component: Component, isAuthendicated, ...rest } = this.props;
        return (
            <Route 
                {...rest}
                render={props =>
                    !isAuthendicated ? (
                        <>
                            <Component {...props} />
                        </>
                    ) : (
                        <>
                            <Redirect
                                to={{
                                    pathname: "/",
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

export default PublicRoute;