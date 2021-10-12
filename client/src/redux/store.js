import { applyMiddleware, createStore, compose } from "redux";
import thunk from "redux-thunk";
import { combineReducers } from "redux";
import authentication from "./reducers/authReducer";
import campanhas from "./reducers/campanhasReducer";



const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let initState = {
  authentication: {
    user: null,
    token: "",
    error: "",
    loading: false,
    isAuthenticated: false
  },
  campanhas: []
}



export default function makeStore(initialState = initState) {

  const store = createStore(
    combineReducers({
      authentication,
      campanhas
    }),
    initialState,
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
}