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
    border-radius: 0.250rem;
    height: 48px;
    width: 100%;
    margin-bottom: 1rem;

    background: ${COLOR.gray100};
    border: ${ props => props.error ? "1px solid darkgray" : "1px solid transparent"};
    color: ${COLOR.white};

    &:focus {
        outline: 0;
        border-color: ${COLOR.brandRed90} !important;
    }

    &:hover {
        border: 1px solid ${COLOR.gray90};
    }
`

export const Label = styled.label`

`
export const AssistiveText = styled.p`
    color: ${COLOR.white};
    font-size: .750rem;
`

export const Error = styled.p`
    color: darkgray;
    font-size: .750rem;
`