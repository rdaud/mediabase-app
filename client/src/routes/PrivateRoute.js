import React, { useEffect, useState } from "react";
import { Route, Redirect } from "react-router-dom";
import { connect, useDispatch } from 'react-redux';
import { getUser } from "../redux/actions/usersActions";
import { Navbar } from "../components";
import styled from "styled-components";


 const Hero = styled.div`
    background: #161616;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    position: relative;
    display: flex;
    flex-direction: row;
`

const PrivateRoute = ({
  isAuthenticated,
  component: Component,
  ...rest
}) => {

  
  return (
  
    <Route {...rest} render={ (props) => (
          localStorage.getItem('USER-ID') ? (
            <Hero>
              <Navbar />
              <Component {...props} />
            </Hero>
          ) : (
            <Redirect to="/entrar" />
          )
    )} />
  );

}


const mapStateToProps = (state) => {
  return (
    {
      isAuthenticated: state.authentication.isAuthenticated
    }
  )
};

export default connect(mapStateToProps)(PrivateRoute);



