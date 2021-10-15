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
  
  const getFormatosFailure = () => {
    return {
      type: 'GET_FORMATOS_FAILURE'
    };
  };
  
  
  export const getFormatos = () => {
  
    const arr = [];
  
    return (dispatch,getState) => {
  
      dispatch(getFormatosRequest());
  
      axios.get('/formats',{
        'Content-Type': 'application/json',
      }).then(response => {
        response.data.forEach(element => {
          const rowData = element.fields
          arr.push(rowData)
        });
        dispatch(getFormatosSuccess(arr))
      }).catch( e => alert(e))
    }
  }