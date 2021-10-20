const initState = {
  
    status: "readyToUpdate",
    loading: false,
    addCampaignModal: false,
    error: "",
    campaigns: []

}

let status;

const campaignsReducer = (state = initState, action) => {
  
    switch (action.type) {
      case "OPEN_ADD_CAMPAIGN_MODAL_REQUEST":
        return {
          ...state,
          addCampaignModal: true
        }
        case "CLOSE_ADD_CAMPAIGN_MODAL_REQUEST":
        return {
          ...state,
          addCampaignModal: false
        }
      case "GET_CAMPAIGNS_REQUEST":
      case 'CREATE_CAMPAIGN_REQUEST':
        return {
          ...state,
          loading: true,
        }
      case 'CREATE_CAMPAIGN_FAILURE':
      case 'GET_CAMPAIGNS_FAILURE':
        return {
          ...state,
          error: action.payload
        };
      case "GET_CAMPAIGNS_SUCCESS":
        return {
          ...state,
          loading: false,
          status: 'updated',
          campaigns: [ ...state.campaigns, ...action.payload ]
        }
      case "CREATE_CAMPAIGN_SUCCESS":
        return {
          ...state,
          loading: false,
          status: 'readyToUpdate',
          campaigns: [ ...state.campaigns, action.payload ]
        }
      default:
        return { ...state }; 
    }
  
  }

  export default campaignsReducer