import React from 'react';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect, BrowserRouter } from "react-router-dom";

import HomePage from "./pages/HomePage";
import SignUpPage from "./pages/SignUpPage";
import SignInPage from "./pages/SignInPage";
import AddFormatPage from "./pages/AddFormatPage";
import AddCampaignPage from "./pages/AddCampaignPage";

import PrivateRoute from "./routes/PrivateRoute";
import PublicRoute from "./routes/PublicRoute";



export default function App() {

  return (
   
      <BrowserRouter>
        <Switch>
          <PublicRoute  exact path="/entrar" component={SignInPage}/>
          <PublicRoute  exact path="/cadastrar" component={SignUpPage}/>
          <PrivateRoute exact path="/adicionar-formato" component={AddFormatPage}/>
          <PrivateRoute exact path="/nova-campanha" component={AddCampaignPage}/>
          <PrivateRoute exact path="/home" component={HomePage} />
          <PublicRoute exact path="/" component={SignInPage}>
            <Redirect to="/entrar" />
          </PublicRoute>
        </Switch>
      </BrowserRouter>

      
   
  );
  
}

// render={() => (            
//   <Redirect to="/entrar" component={SignInPage}/> 
// )

