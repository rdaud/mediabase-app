import axios from "axios";
import { closeAddCriativoModalRequest } from "./campaignsActions";


/**
 * 
 * Create Criativo
 */

export const createCriativoRequest = () => {
    return {
      type: 'CREATE_CRIATIVO_REQUEST',
      loading: true
    }
  }

  const createCriativoSuccess = (payload) => {
    return {
      type: 'CREATE_CRIATIVO_SUCCESS',
      loading: false,
      payload
    }
  }

  const createCriativoFailure = (payload) => {
    return {
      type: 'CREATE_CRIATIVO_FAILURE',
      loading: false,
      payload
    }
  }

  export const createCriativo = ({ nome, imagem, descricao }) => {
  
    return function (dispatch,getState) {

      dispatch(createCriativoRequest());
      
      const { token } = getState().authentication
      const { currentPageCampaign: { _id } } = getState().campaigns

      let data = new FormData();
      data.append('nome', nome)
      data.append('imagem', imagem)
      data.append('descricao', descricao)


        const url = `/campaigns/${_id}/criativos`
        axios.post(url, data,{
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${token}`
        }
        })
      .then((response) => {
        const data = response.data;
          dispatch(createCriativoSuccess(data));
          alert('Criativo criado com sucesso');
          window.location.reload();

        })
      .catch((error) => {
          dispatch(createCriativoFailure(JSON.stringify(error)));
          alert(error);
      }); 
    };
  }
  
  /**
 * 
 * Get Criativos
 */

  export const getCriativosRequest = () => {
    return {
      type: 'GET_CRIATIVOS_REQUEST',
    }
  }

  export const getCriativosFailure = () => {
    return {
      type: 'GET_CRIATIVOS_FAILURE',
    }
  }


  const getCriativosSuccess = (payload) => {
    return {
      type: 'GET_CRIATIVOS_SUCCESS',
      loading: false,
      payload
    }
  }

  export const getCriativos = () => {
    return function(dispatch,getState) {

    const { token } = getState().authentication
    const { currentPageCampaign: { _id } } = getState().campaigns

      dispatch(getCriativosRequest());
      const url = `/criativos/${_id}`

      axios.get(url,{
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        }
      })
      .then((response) => {
        return dispatch(getCriativosSuccess(response.data))
      })
      .catch((error) => {
        dispatch(getCriativosFailure())
        return console.log(error)
      });
    };
  };

  /**
 * 
 * Get Criativo by Id
 */

   export const getCriativoByIdRequest = () => {
    return {
      type: 'GET_CRIATIVO__BY_ID_REQUEST',
    }
  }

  export const getCriativoByIdFailure = () => {
    return {
      type: 'GET_CRIATIVO_BY_ID_FAILURE',
    }
  }

  const getCriativoByIdSuccess = (payload) => {
    return {
      type: 'GET_CRIATIVO_BY_ID_SUCCESS',
      loading: false,
      payload
    }
  }

  export const getCriativoById = ({ id }) => {
    return function(dispatch,getState) {

    const { token } = getState().authentication

      dispatch(getCriativoByIdRequest());
      const url = `/criativo/${id}`

      axios.get(url,{
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        }
      })
      .then((response) => {
        return dispatch(getCriativoByIdSuccess(response.data))
      })
      .catch((error) => {
        dispatch(getCriativoByIdFailure())
        return console.log(error)
      });
    };
  };