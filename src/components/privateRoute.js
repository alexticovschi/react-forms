import React from 'react';
import { Route, Redirect } from 'react-router-dom';


const PrivateRoute = (props) => {
    const isLogged = props.isLogged;
    const Component = props.component;

    if(isLogged) {
        console.log('User logged in');
    } else {
        console.log('User not logged in');
    }

    return (
        <Route {...props} component={(props) => (
                // If user is logged in return Component, else redirect to login
                isLogged ? <Component {...props}/> : <Redirect to="/login" />
            )}
        />
    )
}

export default PrivateRoute;