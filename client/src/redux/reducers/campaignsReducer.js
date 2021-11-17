const initState = {
  
    status: "readyToUpdate",
    loading: false,
    addCampaignModal: false,
    error: "",
    campaigns: [],
    currentPageCampaign: {}

}


const campaignsReducer = (state = initState, action) => {
  
    switch (action.type) {
      case "OPEN_ADD_CAMPAIGN_MODAL_REQUEST":
        return {
          ...state,
          addCampaignModal: true
        };
        case "OPEN_ADD_FORMAT_MODAL_REQUEST":
          return {
            ...state,
            addFormatModal: true
        };
        case "CLOSE_ADD_FORMAT_MODAL_REQUEST":
          return {
            ...state,
            addFormatModal: false
        };
        case "CLOSE_ADD_CAMPAIGN_MODAL_REQUEST":
        return {
          ...state,
          addCampaignModal: false
        };
      case "GET_CAMPAIGNS_REQUEST":
      case 'CREATE_CAMPAIGN_REQUEST':
      case 'GET_CAMPAIGN_BY_ID_REQUEST':
      case 'UPDATE_CAMPAIGN_REQUEST':
        return {
          ...state,
          loading: true,
        };
      case 'CREATE_CAMPAIGN_FAILURE':
      case 'GET_CAMPAIGNS_FAILURE':
      case 'GET_CAMPAIGN_BY_ID_FAILURE':
      case 'UPDATE_CAMPAIGN_FAILURE':
        return {
          ...state,
          error: action.payload
        };
      case "GET_CAMPAIGNS_SUCCESS":
        return {
          ...state,
          loading: false,
          status: 'updated',
          campaigns: [ ...action.payload ]
        };
      case 'UPDATE_CAMPAIGN_SUCCESS':
        return {
          ...state
        }
      case "GET_CAMPAIGN_BY_ID_SUCCESS":
        return {
          ...state,
          loading: false,
          currentPageCampaign: action.payload
        };
      case "CREATE_CAMPAIGN_SUCCESS":
        return {
          ...state,
          loading: false,
          status: 'readyToUpdate',
          campaigns: [ ...state.campaigns, action.payload ]
        };
      default:
        return { ...state }; 
    }
  
  }

  export default campaignsReducer