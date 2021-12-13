const initState = {
    loading: false,
    error: "",
    editCriativoModal: false,
    selected: {},
    criativos: []
}


const criativosReducer = (state = initState, action) => {
  
    switch (action.type) {
      case "GET_CRIATIVOS_REQUEST":
      case "GET_CRIATIVO_BY_ID_REQUEST":
        return {
          ...state,
          loading: true
        };
        case 'GET_CRIATIVOS_FAILURE':
        case 'GET_CRIATIVO_BY_ID_FAILURE':
          return {
            ...state,
            loading: false
          };
      case 'GET_CRIATIVOS_SUCCESS':
        return {
          ...state,
          loading: false,
          criativos: [ ...action.payload ]
        };
      case 'GET_CRIATIVO_BY_ID_SUCCESS':
        return {
          ...state,
          loading: false,
          selected: action.payload
        };

        case "OPEN_EDIT_CRIATIVO_MODAL_REQUEST":
          return {
            ...state,
            editCriativoModal: true,
            selected: action.payload
          };

          case "CLOSE_EDIT_CRIATIVO_MODAL_REQUEST":
            return {
              ...state,
              editCriativoModal: false,
              selected: {}
          };
      default:
        return { ...state }; 
    }
  
  }

  export default criativosReducer