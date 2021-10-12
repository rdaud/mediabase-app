import React, { useState } from 'react';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect, BrowserRouter } from "react-router-dom";
import { createBrowserHistory } from 'history';



import HomePage from "./components/routes/HomePage";
import SignUpPage from "./components/routes/SignUpPage";
import SignInPage from "./components/routes/SignInPage";
import Modal from "./components/Modal";

import { PrivateRoute } from "./components/routes/PrivateRoute";
import { PublicRoute } from "./components/routes/PublicRoute";



export default function App() {

  return (
   
      <BrowserRouter >
        <Switch>

          <PublicRoute exact path="/entrar" component={SignInPage}/>
          <PublicRoute exact path="/cadastrar" component={SignUpPage}/>
          <PublicRoute exact path="/modal" component={Modal}/>
          <PrivateRoute path="/home" component={HomePage} />
          <PublicRoute exact path="/" render={() => {
                      return (            
                        <Redirect to="/entrar" component={SignInPage}/> 
                      )
                    }
                  }
          /> 
        </Switch>
      </BrowserRouter>

      
   
  );
  
}



