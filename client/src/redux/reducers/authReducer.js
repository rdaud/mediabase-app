import jwt from "jsonwebtoken";
import { createReducer, createAction } from "@reduxjs/toolkit";

export const isValidToken = (token) => {
  let decoded = jwt.decode(token);
  return new Date(decoded.exp * 1000) > new Date() ? decoded : null;
};

const initState = {
  user: localStorage.getItem("USER-TOKEN")
    ? isValidToken(localStorage.getItem("USER-TOKEN"))
    : null,
  token: localStorage.getItem("USER-TOKEN")
    ? localStorage.getItem("USER-TOKEN")
    : [],
  error: "",
  loading: false,
  isAuthenticated: false,
};

// const signInRequest = createAction("SIGN_IN_REQUEST")
// const signUpRequest = createAction("SIGN_UP_REQUEST")
// const getUserRequest = createAction("GET_USER_REQUEST")
// const getAvatarRequest = createAction("GET_AVATAR_REQUEST")
// const signInFailure = createAction("SIGN_IN_FAILURE")
// const signInSuccess = createAction("SIGN_IN_SUCCESS")
// const signUpSuccess = createAction("SIGN_UP_SUCCESS")
// const signUpFailure = createAction("SIGN_UP_FAILURE")
// const signOutFailure = createAction("SIGN_OUT_FAILURE")



/**
 * Without createReducer
 *  */ 

const authReducer = function (state = initState, action) {

  switch (action.type) {
  
    case "SIGN_IN_REQUEST":
    case "SIGN_UP_REQUEST":
    case "SIGN_OUT_REQUEST":
      return {
        ...state,
        loading: true,
        isAuthenticated: false,
      };
    case "GET_USER_REQUEST":
      return {
        ...state
      };
      case "GET_AVATAR_REQUEST":
        return {
          ...state
        };
    case "GET_USER_SUCCESS":
        return {
          ...state,
          isAuthenticated: true,
          user: {
            name: action.payload.name,
            email: action.payload.email,
            password: action.payload.password
          }
        };
        case "GET_AVATAR_SUCCESS":
          return {
            ...state,
            user: {
              avatar: action.payload
            }
          };
          case "GET_AVATAR_FAILURE":
      return {
        ...state,
        error: action.payload
      };
    case "GET_USER_FAILURE":
      return {
        ...state,
        isAuthenticated: false,
        error: action.payload
      };
    case "SIGN_IN_FAILURE":
    case "SIGN_UP_FAILURE":
    case "SIGN_OUT_FAILURE":
      return {
        ...state,
        loading: false,
        error: action.payload,
        user: null,
        isAuthenticated: false,
      };
    case "SIGN_IN_REQUEST":
        return {
            loading: true
        }
    case "SIGN_UP_SUCCESS":
    case "SIGN_IN_SUCCESS":
      return {
        ...state,
        loading: false,
        isAuthenticated: true,
        user: action.payload.user,
        token: action.payload.token
      };
    case "SIGN_OUT_SUCCESS":
      return {
        ...state,
        isAuthenticated: false,
        loading: false,
        user: null,
        token: "",
      };
    default:
      return state;
  }
};

export default authReducer 




/**
 * Implementation of createReducer
 */

//  const authReducer = createReducer(initState, (builder) => {
//   builder
//     .addMatcher(isAnyOf(signInRequest,signUpRequest), (state,action) => {  
//         state.loading = true;
//         state.isAuthenticated = false;  
//     })
//     .addCase("SIGN_OUT_REQUEST", (state,action) => { 
//         state.isAuthenticated = false;   
//     })
//     .addMatcher(isAnyOf(getUserRequest,getAvatarRequest), (state,action) => {
//         return state
//     })
//     .addCase("GET_USER_SUCCESS", (state,action) => {  
//         state.isAuthenticated = true;
//         state.user.name = action.payload.name;
//         state.user.email = action.payload.email;
//         state.user.password = action.payload.password;  
//     })
//     .addCase("GET_AVATAR_SUCCESS", (state,action) => {
//         state.user.avatar = action.payload;
//     })
//     .addCase("GET_AVATAR_FAILURE", (state,action) => {
//         state.error = action.payload
//     })
//     .addCase("GET_USER_FAILURE", (state,action) => {
//         state.isAuthenticated = false;
//         state.error = action.payload 
//     })
//     .addCase("GET_USER_FAILURE", (state,action) => {
//         state.isAuthenticated = false;
//         state.error = action.payload 
//     })
//     .addMatcher(isAnyOf(signInFailure,signUpFailure,signOutFailure), (state,action) => {
//         state.loading = false;
//         state.error = action.payload;
//         state.user = null;
//         state.isAuthenticated = false;
//     })
//     .addCase("SIGN_IN_REQUEST", (state,action) => {
//         state.loading = true
//     })
//     .addMatcher(isAnyOf(signInSuccess,signUpSuccess), (state,action) => {
//         state.loading = false
//         state.isAuthenticated = true
//         state.user = action.payload.user
//         state.token = action.payload.token
//     })
//     .addCase("SIGN_OUT_SUCCESS", (state,action) => {
//         state.isAuthenticated = false
//         state.loading = false
//         state.user = null
//         state.token = ""
//     })
//     .addDefaultCase((state, action) => {
//         return state
//     }) 
// }) 