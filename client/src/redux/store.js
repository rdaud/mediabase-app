import { applyMiddleware, compose, combineReducers } from "redux";
import { configureStore } from '@reduxjs/toolkit'
import {
  persistStore,
  persistReducer,

} from 'redux-persist'
import storage from "redux-persist/lib/storage";
import { getAvatarApi } from "./services/avatarApi";
import authenticationReducer from "./reducers/authReducer";
import campaignsReducer from "./reducers/campaignsReducer";
import formatosReducer from "./reducers/formatosReducer";
import criativosReducer from "./reducers/criativosReducer";


const rootReducer = combineReducers({
  authentication: authenticationReducer,
  campaigns: campaignsReducer,
  formatos: formatosReducer,
  criativos: criativosReducer
})

const persistConfig = {
  key: 'root',
  storage,
}


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {

  const persistedReducer = persistReducer(persistConfig, rootReducer)

  const store = configureStore({
    reducer: persistedReducer,
  })

  const persistor = persistStore(store)

  return { store, persistor }
}



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