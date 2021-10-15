const campaignsReducer = (state = [], action) => {
  
    switch (action.type) {
      case "GET_CAMPAIGNS_REQUEST":
      case 'CREATE_CAMPAIGN_REQUEST':
      case 'CREATE_CAMPAIGN_FAILURE':
      case 'GET_CAMPAIGNS_FAILURE':
        return {
        ...state,
      };
      case "GET_CAMPAIGNS_SUCCESS":
      case "CREATE_CAMPAIGN_SUCCESS":
        return {
          ...state,
          campaigns: state.campaigns.concat(action)
          
        };
      default:
        return { ...state }; 
    }
  
  }

  export default campaignsReducer