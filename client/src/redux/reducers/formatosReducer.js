
const initState = {
    loading: false,
    error: "",
    formatos: []
}


const formatosReducer = (state = initState, action) => {
  
    switch (action.type) {
        case 'GET_FORMATOS_REQUEST':
        return {
          ...state,
          loading: true
        };
      case 'GET_FORMATOS_SUCCESS':
        return {
          ...state,
          loading: false,
          formatos: [...state.formatos, ...action.payload ]
        };
      case 'GET_FORMATOS_FAILURE':
        return {
          ...state,
          error: action.payload
        };
      default:
        return { ...state }; 
    };
  
  }

  export default formatosReducer