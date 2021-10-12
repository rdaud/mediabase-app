const campanhasReducer = (state = {
    veiculo: "", meio: "", nomeDoFormato: "", formatoDoArquivo: [], tamanho: ""
  }, action) => {
  
    switch (action.type) {
      case "REQUEST_CAMPANHAS":
        return {
        ...state,
      };
      case "REQUEST_CAMPANHAS_SUCCESS":
        return {
          ...state,
        ...action.payload
          
        };
      default:
        return { ...state }; 
    }
  
  }

  export default campanhasReducer