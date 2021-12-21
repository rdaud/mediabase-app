import styled from 'styled-components';
import { COLOR } from '../../tokens/colors';


export const Wrapper = styled.div`
    position: relative;
    width: auto;
    height: auto;
`

export const Icon = styled.span`
  position: relative;
  transform: rotate(0DEG);
  transition: transform .2s;
  
`

export const SelectedValue = styled.div`
    color: ${ props => props.isDefault ? COLOR.gray60 : COLOR.white };
`

export const Control = styled.div`
    display: inline-flex;
    background-color: transparent;
    height: ${ props => props.small ? "2rem" : "3rem" };
    width: 100%;
    min-width: 150px;
    align-items: center;
    padding: 1rem;
    color: ${COLOR.white} !important;
    background: ${ props => 
        props.variation && props.variation === 'filled' && props.colorMode === 'light' ? COLOR.gray70 :
        props.variation && props.variation === 'filled' && props.colorMode === 'dark' ? COLOR.gray80 :
        props.variation && props.variation === 'outline' ? 'transparent' :
        'transparent'
    };
    position: relative;
    justify-content: space-between;
    outline: none;
    border-width: 1px;
    border-style: solid;
    border-color: ${ props => 
        props.variation && props.variation === 'outline' && props.colorMode === 'light' ? COLOR.gray70 :
        props.variation && props.variation === 'outline' && props.colorMode === 'dark' ? COLOR.gray80 :
        props.variation && props.variation === 'filled' ? 'transparent' :
        'transparent'
    };
    font-size: 14px;
    margin: 0;
   
    &:hover {
        border-color: ${ props => props.lighter ? COLOR.white : COLOR.gray60 };
        cursor: pointer;
    }

`

export const InlineControl = styled.div`
    display: inline-flex;
    background-color: transparent;
    width: auto;
    align-items: center;
    color: ${COLOR.white} !important;
    position: relative;
    justify-content: flex-start;
    outline: none;
    font-size: 14px;
    margin: 0;
   
    &:hover {
        cursor: pointer;
    }

`


export const Label = styled.label`
    color: ${COLOR.gray70};
`

export const Options = styled.div`
    position: absolute;
    width: 100%;
    background-color: ${COLOR.black};
    top: calc(3rem);
    left: 0;
    z-index: 9999;
    display: none;
    flex-direction: column;
    border: 1px solid ${COLOR.gray100};
`

export const InlineOptions = styled.div`
    position: absolute;
    background-color: ${COLOR.black};
    top: calc(3rem);
    z-index: 9999;
    display: none;
    flex-direction: column;
    border: 1px solid ${COLOR.gray100};
`

export const Option = styled.div`
    width: auto;
    padding: 1rem 1rem;
    height: 3rem;
    position: relative;
    display: flex;
    align-items: center;
    text-align: left;
    color: ${ props => props.isDefault ? COLOR.gray70 : COLOR.white };
    font-size: 14px;
    margin: 0;
    border: 1px solid transparent;

    &:hover {
        border-color: ${COLOR.gray70};
        cursor: pointer;
    }
  
`


export const Styles = styled.div`
  .animate {
    transform: rotate(180DEG);
    transition: transform .2s;
  }
`