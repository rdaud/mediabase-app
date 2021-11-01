import { applyMiddleware, createStore, compose, combineReducers } from "redux";
import { configureStore } from '@reduxjs/toolkit'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from "redux-persist/lib/storage";

import authenticationReducer from "./reducers/authReducer";
import campaignsReducer from "./reducers/campaignsReducer";
import formatosReducer from "./reducers/formatosReducer";

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['campaigns', 'formatos', 'authentication']
}

const reducers = combineReducers({
  authentication: authenticationReducer,
  campaigns: campaignsReducer,
  formatos: formatosReducer
})


const persistedReducer = persistReducer(persistConfig, reducers)


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;




const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    devTools: process.env.NODE_ENV !== 'production'
});

let persistor = persistStore(store);

export { store, persistor }



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