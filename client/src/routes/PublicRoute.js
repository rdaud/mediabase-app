import React from 'react';
import { useSelector, connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { useCookies } from 'react-cookie';



const PublicRoute = ({
  isAuthenticated,
  component: Component,
  ...rest
}) => {
  
  return (
    <Route {...rest} component={ (props) => (
          isAuthenticated ? (
            <Redirect to="/home" />
          ) : (
            <Component {...props} />
          )
    )} />
  )
};



const mapStateToProps = (state) => {
  return (
    {
      isAuthenticated: state.authentication.isAuthenticated
    }
  )
};

export default connect(mapStateToProps)(PublicRoute);