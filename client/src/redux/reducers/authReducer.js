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
    : [],
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
      return { ...state };
  }
};


export default authReducer 