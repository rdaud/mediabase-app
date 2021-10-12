import jwt from "jsonwebtoken";



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
    : null,
  error: "",
  loading: false,
  isAuthenticated: false,
};


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
      return { ...state };
  }
};



export default authReducer 