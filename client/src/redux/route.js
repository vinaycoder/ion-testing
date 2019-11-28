import React from "react";
import { Redirect, Route, withRouter } from "react-router-dom";

export const AuthRoute = ({ loggedIn, path, component: Component }) => (
    <Route
      path={path}
      render={props => (
        loggedIn ?
        <Redirect to='/dashboard' /> :
        <Component {...props} />
      )}
    />
  )
  export  const ProtectedRoute = ({ loggedIn, path, component: Component }) => (
    <Route
      path={path}
      render={props => (
        loggedIn ?
        <Component {...props} /> :
        <Redirect to='/login' />
      )}
    />
  );