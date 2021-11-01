import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector, connect } from 'react-redux';




const PrivateRoute = ({
  isAuthenticated,
  component: Component,
  ...rest
}) => (
  
  <Route {...rest} component={ (props) => (
        localStorage.getItem('USER-ID') ? (
          <Component {...props} />
        ) : (
          <Redirect to="/entrar" />
        )
  )} />
);


const mapStateToProps = (state) => {
  return (
    {
      isAuthenticated: state.authentication.isAuthenticated
    }
  )
};

export default connect(mapStateToProps)(PrivateRoute);



