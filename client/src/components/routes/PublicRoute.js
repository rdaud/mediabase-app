import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';


export const PublicRoute = ({
  component,
  path,
  ...rest
}) => {

  const { isAuthenticated } = useSelector(
    (state) => state.authentication
  );


  return isAuthenticated ? (
    <Redirect to={"/home"} />
  ) : (
    <Route exact path={path} component={component} {...rest} />
    );
};