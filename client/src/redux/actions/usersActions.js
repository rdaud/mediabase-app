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


  return function (dispatch) {
    dispatch(signUpRequest());
    axios.post('/users',user,{
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
      }
    })
    .then((response) => {
        const data = response.data;
        dispatch(signUpSuccess(data));
        localStorage.setItem("USER-TOKEN", data.token);
        localStorage.setItem("USER-ID", data.user._id);
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

export const signInSuccess = (data) => {
  return {
    type: 'SIGN_IN_SUCCESS',
    payload: data
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

    dispatch(signInRequest())

    const { email = "", password = "" } = userLoginData
    const userLogin = { email, password }


    axios.post('/users/login',userLogin,headers)
    .then((response) => {
      const data = response.data;
      localStorage.setItem("USER-TOKEN", data.token);
      localStorage.setItem("USER-ID", data.user._id);
      localStorage.setItem("USER-NAME", data.user.name);
      localStorage.setItem("USER-EMAIL", data.user.email);
      alert('Logado com sucesso');
      dispatch(signInSuccess(data))
      history.push("/home");
    }).catch( error => {
      dispatch(signInFailure(error))
      alert('Email ou senha incorretos!');

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

export const signOut = function (history,token) {


  return function (dispatch,getState) {

    dispatch(signOutRequest());

    
    axios.post('/users/logoutAll',token,{
      headers: {
        'Authorization': `Bearer ${token}`,
        'Access-Control-Allow-Origin': '*',
      }
    }).then(result => {
      dispatch(signOutSuccess());
      localStorage.clear();
      history.push("/entrar");
    }).catch( error => {
      dispatch(signOutFailure());
      console.log(error)
    })

  };
};


// Read users

export const getUserRequest = function () {
  return {
    type: 'GET_USER_REQUEST',
  };
};

export const getUserSuccess = function (data) {
  return {
    type: 'GET_USER_SUCCESS',
    payload: data
  };
};

export const getUserFailure = function (data) {
  return {
    type: 'GET_USER_FAILURE',
    payload: data
  };
};

export const getUser = function () {

  return function (dispatch,getState) {

    dispatch(getUserRequest());

    const { token } = getState().authentication


    axios.get('/users/me',{
      headers: {
        'Authorization': `Bearer ${token}`,
        'Access-Control-Allow-Origin': '*',
      }
    }).then(result => {
      console.log(result)
      dispatch(getUserSuccess(result.data));
    }).catch( error => {
      dispatch(getUserFailure());
      console.log(error)
    })

  };
};


// Get avatar

export const getAvatarRequest = function () {
  return {
    type: 'GET_AVATAR_REQUEST',
  };
};

export const getAvatarSuccess = function (data) {
  return {
    type: 'GET_AVATAR_SUCCESS',
    payload: data
  };
};

export const getAvatarFailure = function (data) {
  return {
    type: 'GET_AVATAR_FAILURE',
    payload: data
  };
};

export const getAvatar = function () {

  return function (dispatch,getState) {

    dispatch(getAvatarRequest());

    const { token } = getState().authentication
    const url = `/users/${localStorage.getItem("USER-ID")}/avatar`

    axios.get(url,{
      headers: {
        'Authorization': `Bearer ${token}`,
        'Access-Control-Allow-Origin': '*',
      }
    }).then(result => {
      console.log(result)
      dispatch(getAvatarSuccess(result.data));
    }).catch( error => {
      dispatch(getAvatarFailure());
      console.log(error)
    })

  };
};