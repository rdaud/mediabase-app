import React from 'react';
import styled, { keyframes } from "styled-components" 
import { COLOR } from '../../../../tokens/colors';
import plus from '../../../../assets/icons/plus.svg'


export const Link = styled.button`
  color: gray;
  transition: .2s;
  border-radius: 2px;

  :hover {
    background: rgba(255,255,255,.05);
    color: ${COLOR.white};
    transition: .2s;
  }
`

export const StatusBar = ({...rest}) => {

  return (
      <div {...rest} style={{
          background: `${COLOR.gray80}`,
          borderRadius: '20px',
          width: '120px',
          height: '8px',
      }}>
      
      </div>
  )
}


export const Table = styled.div`
  border-spacing: 0;
  width: 100%;
  font-size: 14px;
`

const fade = keyframes`
  from {
    opacity: .5;
    transform: translateY(-10px);
  }

  to {
    opacity: 1;
    transform: translateY(0px);
  }
`;


export const Thead = styled.div`
  overflow-y: auto;
  overflow-x: hidden;
  .tr {
    background: ${COLOR.gray70};
  }
`

export const Tr = styled.div`
  position: relative;
  padding: .5rem;
  border: 1px solid transparent;
 
`

export const Tbody = styled.div`

  overflow-y: scroll;
  overflow-x: hidden;
  height: calc(100vh - 145px);

    .tr {
      padding: .5rem;
      position: relative;
      border-bottom: 1px solid ${COLOR.gray90};

      &.depth-1 {
        background: black;
        border-bottom: 1px solid transparent;
      }

      &:hover {
        border: 1px solid ${COLOR.brandRed90};
        cursor: pointer;
      }
    }
`

export const Th = styled.div`
  color: ${COLOR.white};
  text-transform: uppercase;
  font-size: 12px;
  margin: 0;
  
  &:last-child {
    text-align: right;
  }
`

export const Td = styled.div`
  margin: 0;
  color: ${COLOR.white};
  &:last-child {
    text-align: right;
  }
`


export const Styles = styled.div`
  
  display: block;
  overflow: auto;
  width: 100%;
  max-width: 100%;

  
  .align-right {
    justify-content: flex-end;
    
  }

  .tableWrap {
    display: block;
    max-width: 100%;
    overflow-x: scroll;
    overflow-y: hidden;
  }

`



export const CustomTr = styled.tr`
  && {
    background: ${ props => props.expanded % 2 ? COLOR.gray100 : COLOR.gray100};
  }
`

export const CustomExpandedRow = styled.div`
  background-color: ${ props => props.depth === 1 ? 'black': COLOR.black};
  border: ${ props => props.isExpanded ? '1px solid red' : '1px solid transparent'}
`


const AdicionarCriativoLargeWrapper = styled.div`
  display: inline-flex;
  gap: 2px;
  cursor: pointer;
  align-items: center;
`

const Menu = styled.div`
  background: ${COLOR.gray80};
  width: auto;
  max-width: 150px;
`

const Criativo = styled.div`
  width: 12px;
  height: 12px;
  position: relative;
  background: ${COLOR.gray90};
  display: flex;
  align-items: center;
  justify-content: center;
  img:hover {
      filter: invert(30%) sepia(98%) saturate(4776%) hue-rotate(358deg) brightness(96%) contrast(93%);
  }

`

const Adicionar = styled.div`
  width: 12px;
  height: 12px;
  position: relative;
  background: ${COLOR.gray90};
  display: flex;
  align-items: center;
  justify-content: center;
  img:hover {
      filter: invert(30%) sepia(98%) saturate(4776%) hue-rotate(358deg) brightness(96%) contrast(93%);
  }
`


export const AdicionarCriativoLarge = () => {


    return (
        <>
            <AdicionarCriativoLargeWrapper>
                <Criativo style={{ width: '100%', padding: '0 8px', height: '24px', background: `${COLOR.gray100}`}}>
                    <p style={{ fontSize: '12px'}}>
                    Adicionar criativo
                    </p>
                </Criativo>
                <Adicionar style={{ width: '24px', padding: '0 8px', height: '24px', background: `${COLOR.gray100}`}}>
                    <img src={plus} width="16" height="16"></img>
                </Adicionar>
            </AdicionarCriativoLargeWrapper>
           
            <Menu></Menu>
        </>
    )
}


export const IndeterminateCheckbox = React.forwardRef(
  ({ indeterminate, ...rest }, ref) => {
    const defaultRef = React.useRef()
    const resolvedRef = ref || defaultRef

    React.useEffect(() => {
      resolvedRef.current.indeterminate = indeterminate
    }, [resolvedRef, indeterminate])

    return (
      <>
        <input type="checkbox" ref={resolvedRef} {...rest} />
      </>
    )
  }
)

export const RowSubComponent = () => (
  <div style={{display: 'inline-flex', overflow: 'hidden', width: '100%', height: '100%' }}>    
  <AdicionarCriativoLarge />
  </div>
)



