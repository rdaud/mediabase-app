import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, configureStore, useDispatch } from "react-redux";

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import makeStore from "./redux/store";

const store = makeStore();

console.log(store.getState())

ReactDOM.render(
  <Provider store={store}>
    <App />
    </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

