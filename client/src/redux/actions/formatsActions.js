import axios from "axios";

// Fetch Formatos from Airtable

const getFormatosSuccess = (data) => {
    return {
      type: 'GET_FORMATOS_SUCCESS',
      payload: data
    };
  };
  
  const getFormatosRequest = () => {
    return {
      type: 'GET_FORMATOS_REQUEST'
    };
  };
  
  const getFormatosFailure = (error) => {
    return {
      type: 'GET_FORMATOS_FAILURE',
      payload: error
    };
  };
  
  
  export const getFormatos = () => {
  
    return (dispatch,getState) => {
  
      dispatch(getFormatosRequest());

      let arr = [];
  
      axios.get('/formats',{
        'Content-Type': 'application/json',
      }).then(result => {
        dispatch(getFormatosSuccess(result.data))
      }).catch(error => {
        console.log(error)
        dispatch(getFormatosFailure(error))
      })
    }
  }

