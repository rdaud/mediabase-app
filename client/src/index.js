import React from 'react';
import { render }  from 'react-dom';
import { Provider } from "react-redux";
import { CookiesProvider } from 'react-cookie'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from "./redux/store";


const renderApp = () => (
  render (
      <Provider store={store}>
        <App />
      </Provider>,
    document.getElementById('root')
  )
);


if (process.env.NODE_ENV !== 'production' && module.hot) {
  module.hot.accept('./index', renderApp)
}

renderApp();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

