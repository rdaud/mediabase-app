import axios from "axios";




export const openAddCampaignModalRequest = () => {
  return {
    type: 'OPEN_ADD_CAMPAIGN_MODAL_REQUEST'
  }
}


export const openAddCriativoModalRequest = () => {
  return {
    type: 'OPEN_ADD_CRIATIVO_MODAL_REQUEST'
  }
}

export const openEditCriativoModalRequest = (payload) => {
  return {
    type: 'OPEN_EDIT_CRIATIVO_MODAL_REQUEST',
    payload
  }
}



export const closeAddCampaignModalRequest = () => {
  return {
    type: 'CLOSE_ADD_CAMPAIGN_MODAL_REQUEST'
  }
}

export const closeEditCriativoModalRequest = () => {
  return {
    type: 'CLOSE_EDIT_CRIATIVO_MODAL_REQUEST'
  }
}

export const closeAddCriativoModalRequest = () => {
  return {
    type: 'CLOSE_ADD_CRIATIVO_MODAL_REQUEST'
  }
}

export const openAddFormatModalRequest = () => {
  return {
    type: 'OPEN_ADD_FORMAT_MODAL_REQUEST'
  }
}

export const closeAddFormatModalRequest = () => {
  return {
    type: 'CLOSE_ADD_FORMAT_MODAL_REQUEST'
  }
}

/**
 * 
 *  Create campaigns actions
 */

const createCampaignRequest = () => {
    return {
      type: 'CREATE_CAMPAIGN_REQUEST',
      loading: true
    }
  }
  
  const createCampaignSuccess = (payload) => {
    return {
      type: 'CREATE_CAMPAIGN_SUCCESS',
      loading: false,
      payload
    }
  }
  
  const createCampaignFailure = (payload) => {
    return {
      type: 'CREATE_CAMPAIGN_FAILURE',
      loading: false,
      payload
    }
  }
  
  export const createCampaign = ({ nome, cliente, produto, status, dataDeVeiculacaoInicio, dataDeVeiculacaoFim },history) => {
  
    return function (dispatch,getState) {

      dispatch(createCampaignRequest());
      
      const { token } = getState().authentication

      const campaignTest = {
        nome,
        cliente,
        produto,
        status,
        dataDeVeiculacaoInicio,
        dataDeVeiculacaoFim
      }


      axios.post('/campaigns',{
        nome,
        cliente,
        produto,
        status,
        dataDeVeiculacaoInicio,
        dataDeVeiculacaoFim
      },{
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      })
      .then((response) => {
        const data = response.data;
        console.log(data)
          dispatch(createCampaignSuccess(data));
          dispatch(closeAddCampaignModalRequest());
          history.push(`home/campanha/${data._id}`)
          alert('Campanha criada com sucesso');
        })
      .catch((error) => {
          dispatch(createCampaignFailure(JSON.stringify(error)));
          alert(error);
      }); 
    };
  }
  

  /**
   * 
   *  Get campaigns actions
   */
  
  const getCampaignsRequest = () => {
    return {
      type: 'GET_CAMPAIGNS_REQUEST'
    };
  };
  
  const getCampaignsSuccess = (data) => {
    return {
      type: 'GET_CAMPAIGNS_SUCCESS',
      payload: data
    };
  };
  
  const getCampaignsFailure = (data) => {
    return {
      type: 'GET_CAMPAIGNS_FAILURE',
      payload: data
    };
  };
  

  export const getCampaigns = (token) => {
  
    
    return function(dispatch) {
  
      dispatch(getCampaignsRequest());

      axios.get('/campaigns',{
        headers: {
          'Authorization': `Bearer ${token}`,
        }
      })
      .then((response) => {
        return dispatch(getCampaignsSuccess(response.data))
      })
      .catch((error) => {
        dispatch(getCampaignsFailure(JSON.stringify(error)))
        return console.log(error)
      });
    };
  };

  /**
   * 
   * Update campaigns
   */


  const updateCampaignRequest = () => {
    return {
      type: 'UPDATE_CAMPAIGN_REQUEST'
    };
  };

  const updateCampaignFailure = (data) => {
    return {
      type: 'UPDATE_CAMPAIGN_FAILURE',
      payload: data
    };
  };

  const updateCampaignSuccess = (data) => {
    return {
      type: 'UPDATE_CAMPAIGN_SUCCESS',
      payload: data
    };
  };

  export const updateCampaign = (payload) => {
    return function(dispatch, getState) {

      const { token } = getState().authentication
      const { currentPageCampaign: { _id } } = getState().campaigns

      dispatch(updateCampaignRequest());

      axios.patch(
        `/campaigns/${_id}`,
        payload,
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          }
        }
      )
      .then((response) => {
        const data = response.data;
        dispatch(updateCampaignSuccess(data));
        window.location.reload();
      })
      .catch((error) => {
        dispatch(updateCampaignFailure(JSON.stringify(error)));
        alert(error);
      }); 
    };

  }
  
  

   /**
   * 
   *  Get campaign by ID
   */

    const getCampaignByIdRequest = () => {
      return {
        type: 'GET_CAMPAIGN_BY_ID_REQUEST'
      };
    };
    
    const getCampaignByIdSuccess = (data) => {
      return {
        type: 'GET_CAMPAIGN_BY_ID_SUCCESS',
        payload: data
      };
    };
    
    const getCampaignByIdFailure = (data) => {
      return {
        type: 'GET_CAMPAIGN_BY_ID_FAILURE',
        payload: data
      };
    };


    export const getCampaignById = (id,token) => {
  
      return function(dispatch) {

        dispatch(getCampaignByIdRequest());
        const url = `/campaigns/${id}`

        axios.get(url,{
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          }
        })
        .then((response) => {
          return dispatch(getCampaignByIdSuccess(response.data))
        })
        .catch((error) => {
          dispatch(getCampaignByIdFailure())
          return console.log(error)
        });
      };
    };