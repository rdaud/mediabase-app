import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Switch, Redirect, BrowserRouter } from "react-router-dom";

import { SignUpPage, SignInPage, CampaignPage, HomePage, Playground, ProfilePage } from "./pages";
import PrivateRoute from "./routes/PrivateRoute";
import PublicRoute from "./routes/PublicRoute";


export default function App() {


  return (
      <BrowserRouter>
        <Switch>
          <PublicRoute  exact path="/entrar" component={SignInPage}/>
          <PublicRoute  exact path="/cadastrar" component={SignUpPage}/>
          <PrivateRoute exact path="/campanha/:id" component={CampaignPage} />
          <PrivateRoute exact path="/home" component={HomePage} />
          <PrivateRoute exact path="/perfil" component={ProfilePage} />
          <PrivateRoute exact path="/playground" component={Playground} />
          <PublicRoute exact path="/" component={SignInPage}>
            <Redirect to="/entrar" />
          </PublicRoute>
        </Switch>
      </BrowserRouter>
  );
}

