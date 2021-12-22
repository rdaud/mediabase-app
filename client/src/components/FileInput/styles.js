import styled from 'styled-components';
import { COLOR } from '../../tokens/colors';


export const Wrapper = styled.div`
    min-width: 150px;
    flex-basis: ${ props => props.width || "100%"};
    display: flex;
    flex-direction: column;
    align-itens: center;

`

export const StyledInput = styled.input`
    box-sizing: border-box;
    padding-left: 1rem;
    height: 48px;
    width: 100%;

    font-size: 14px;
    position: absolute;
    opacity: 0;

    &:focus {
        outline: 0;
        border-color: ${COLOR.brandRed90} !important;
    }

    &:hover {
        border: 1px solid ${COLOR.gray70};
        cursor: pointer;

    }
`

export const SelectedValue = styled.div`
    color: ${COLOR.gray60};
`

export const Control = styled.div`
    display: inline-flex;
    height: ${ props => props.small ? "2rem" : "3rem" };
    width: 100%;
    min-width: 150px;
    align-items: center;
    padding: 1rem;
    color: ${COLOR.gray60} !important;
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
    };    color: ${COLOR.white};
    background: ${ props => 
        props.variation && props.variation === 'filled' && props.colorMode === 'light' ? COLOR.gray70 :
        props.variation && props.variation === 'filled' && props.colorMode === 'dark' ? COLOR.gray80 :
        props.variation && props.variation === 'outline' ? 'transparent' :
        'transparent'
    };
    font-size: 14px;
    margin: 0;
   
    &:hover {
        border-color: ${ props => props.colorMode === 'dark' ? COLOR.gray60 : COLOR.gray70 };
    }

`

export const Label = styled.label`
    color: ${COLOR.gray60};
`
export const AssistiveText = styled.p`
    color: ${COLOR.white};
    font-size: .750rem;
    padding-top: .5rem;
`

export const Error = styled.p`
    color: darkgray;
    font-size: .750rem;
`

export const Remover = styled.span`
    font-weight: bold;
    text-decoration: underline;
    margin-left: 1rem;
    cursor: pointer;
`