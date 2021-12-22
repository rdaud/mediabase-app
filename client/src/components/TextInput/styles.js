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
    background: ${ props => 
        props.variation && props.variation === 'filled' && props.colorMode === 'light' ? COLOR.gray70 :
        props.variation && props.variation === 'filled' && props.colorMode === 'dark' ? COLOR.gray80 :
        props.variation && props.variation === 'outline' ? 'transparent' :
        'transparent'
    };    border-width: 1px;
    border-style: solid;
    border-color: ${ props => 
        props.variation && props.variation === 'outline' && props.colorMode === 'light' ? COLOR.gray70 :
        props.variation && props.variation === 'outline' && props.colorMode === 'dark' ? COLOR.gray80 :
        props.variation && props.variation === 'filled' ? 'transparent' :
        'transparent'
    };    color: ${COLOR.white};
    font-size: 14px;
    color: ${COLOR.white};

    &:focus {
        outline: 0;
        border-color: ${COLOR.brandRed90} !important;
    }

    &:hover {
        border: 1px solid ${COLOR.gray60};
    }
`

export const Label = styled.label`
    color: ${COLOR.gray60};
`
export const AssistiveText = styled.p`
    color: ${COLOR.white};
    font-size: .750rem;
`

export const ErrorText = styled.p`
    color: ${COLOR.brandRed90};
    font-size: .750rem;
`

export const Error = styled.p`
    color: darkgray;
    font-size: .750rem;
`