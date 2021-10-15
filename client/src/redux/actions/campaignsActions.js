import axios from "axios";

/**
 * 
 *  Create campaigns actions
 */


const createCampaignRequest = () => {
    return {
      type: 'CREATE_CAMPAIGN_REQUEST'
    }
  }
  
  const createCampaignSuccess = (payload) => {
    return {
      type: 'CREATE_CAMPAIGN_SUCCESS',
      payload
    }
  }
  
  const createCampaignFailure = (payload) => {
    return {
      type: 'CREATE_CAMPAIGN_FAILURE',
      payload
    }
  }
  
  const createCampaign = (payload,token) => {
  
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  
    return function (dispatch) {
      dispatch(createCampaignRequest());
      axios.post('/campaigns',payload,headers)
      .then((response) => {
        const { data } = response.data;
          dispatch(createCampaignSuccess(data));
          alert('Campanha criada com sucesso');
      })
      .catch((error) => {
        dispatch(createCampaignFailure(error));
        alert(error)
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
  
  const getCampaignsSuccess = (payload) => {
    return {
      type: 'GET_CAMPAIGNS_SUCCESS',
      payload
    };
  };
  
  const getCampaignsFailure = (payload) => {
    return {
      type: 'GET_CAMPAIGNS_FAILURE',
      payload
    };
  };
  

  export const getCampaigns = (token) => {
  
    
    return function(dispatch) {
  
      dispatch(getCampaignsRequest());

      axios.get('/campaigns',{
        headers: {
          'Authorization': `Bearer ${token}` 
        }
      })
      .then((response) => {
        return dispatch(getCampaignsSuccess(response.data))
      })
      .catch((error) => {
        dispatch(getCampaignsFailure(error))
        return console.log(error)
      });
    };
  };
  