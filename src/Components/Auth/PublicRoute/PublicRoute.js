import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useAuth } from '../../../context/AuthContext';

const PublicRoute = ({ children, ...rest }) => {
    const { currUser } = useAuth();
    return (
        <Route
            {...rest}
            render={({ location }) =>
                !currUser ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/shop",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
};

export default PublicRoute;