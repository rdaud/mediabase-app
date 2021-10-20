import { applyMiddleware, createStore, compose } from "redux";
import { configureStore } from '@reduxjs/toolkit'
import thunk from "redux-thunk";
import { combineReducers } from "redux";
import authenticationReducer from "./reducers/authReducer";
import campaignsReducer from "./reducers/campaignsReducer";



const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let initState = {
  authentication: {
    user: null,
    token: "",
    error: "",
    loading: false,
    isAuthenticated: false
  },
  campaigns: {
    status: "idle",
    loading: false,
    error: "",
    addCampaignModal: true,
    campaigns: []
  }
}



export default configureStore({
    reducer: {
      authentication: authenticationReducer,
      campaigns: campaignsReducer
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
    devTools: process.env.NODE_ENV !== 'production',
    initState

});



// export default function makeStore(initialState = initState) {

//   const store = createStore(
//     combineReducers({
//       authenticationReducer,
//       campaignsReducer
//     }),
//     initialState,
//     composeEnhancers(applyMiddleware(thunk))
//   );

//   return store;
// }