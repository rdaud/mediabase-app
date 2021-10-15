import { applyMiddleware, createStore, compose } from "redux";
import thunk from "redux-thunk";
import { combineReducers } from "redux";
import authentication from "./reducers/authReducer";
import campaigns from "./reducers/campaignsReducer";



const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let initState = {
  authentication: {
    user: null,
    token: "",
    error: "",
    loading: false,
    isAuthenticated: false
  },
  campaigns: []
}



export default function makeStore(initialState = initState) {

  const store = createStore(
    combineReducers({
      authentication,
      campaigns
    }),
    initialState,
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
}