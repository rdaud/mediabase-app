import axios from "axios";



/** User actions */


const signUpRequest = () => {
  return {
    type: "SIGN_UP_REQUEST",
  };
};



const signUpSuccess = (payload) => {
  return {
    type: "SIGN_UP_SUCCESS",
    payload
  };
};



const signUpFailure = (error) => {
  return {
    type: "SIGN_UP_FAILURE",
    payload: error,
  };
};



export const signUp = (user, history) => {

  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
  }

  return function (dispatch) {
    dispatch(signUpRequest());
    axios.post('/users',user,headers)
    .then((response) => {
      const { data } = response.data;
        dispatch(signUpSuccess(data));
        localStorage.setItem("USER-INFO",data)
        alert('Cadastrado com sucesso');
        history.push("/home");
    })
    .catch((error) => {
      dispatch(signUpFailure(error));
      alert(error)
    });
  };
};

//Sign in action creators

const signInRequest = () => {
  return {
    type: 'SIGN_IN_REQUEST',
  };
};

export const signInSuccess = (payload) => {
  return {
    type: 'SIGN_IN_SUCCESS',
    payload
  };
};

const signInFailure = (error) => {
  return {
    type: 'SIGN_IN_FAILURE',
    payload: error,
  };
};

export const signIn = (userLoginData = {}, history) => {

  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
  }

  return (dispatch) => {

    const { email = "", password = "" } = userLoginData
    const userLogin = { email, password }


    axios.post('/users/login',userLogin,headers)
    .then((response) => {
      const data = response.data;
      // localStorage.setItem("USER-TOKEN", data.token);
      // localStorage.setItem("USER-ID", data.user._id);
      alert('Logado com sucesso');
      dispatch({ type: "SIGN_IN_SUCCESS", payload: data })
      history.push("/home");
    }).catch( error => {
      dispatch(signInFailure(error))
    })

    } 
  
};

//sign out action creators

export const signOutRequest = function () {
  return {
    type: 'SIGN_OUT_REQUEST',
  };
};

export const signOutSuccess = function () {
  return {
    type: 'SIGN_OUT_SUCCESS',
  };
};

export const signOutFailure = function () {
  return {
    type: 'SIGN_OUT_FAILURE',
  };
};

export const signOut = function (history) {


  return function (dispatch) {

    dispatch(signOutRequest());
    history.push("/entrar");

    if (localStorage.getItem("USER_TOKEN")) {
      dispatch(signOutFailure());
    } else {
      dispatch(signOutSuccess());
    }
  };
};




