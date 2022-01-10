import React from 'react';
import { Wrapper,
        Counter,
        Remove,
        AddCriativo,
        ChangePrazo,
        ChangeVeiculação,
        ChangeStatus,
        Export,
        ExportarCSV,
        Cancelar,
        InnerWrapper
    } from './styles'


export const Toolbar = ({counter, handleClickOnCancelar}) => {
    return (
        <Wrapper>
      <InnerWrapper>
        <Counter>
            {counter > 1 ? `${counter} items selecionados` : `${counter} item selecionado`} 
            </Counter>
        <Remove />
        <AddCriativo />
        <ChangePrazo />
        <ChangeVeiculação />
        <ChangeStatus />
        <Export />
        <ExportarCSV />
      </InnerWrapper>
      <InnerWrapper>
        <Cancelar onClick={handleClickOnCancelar}/>
      </InnerWrapper>
      </Wrapper>
    )
  }