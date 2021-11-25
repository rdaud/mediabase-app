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
    background: rgba(0,0,0,.3);
    border: ${ props => props.error ? "1px solid darkgray" : `1px solid ${COLOR.gray80}`};
    color: ${COLOR.white};
    font-size: 14px;

    &:focus {
        outline: 0;
        border-color: ${COLOR.brandRed90} !important;
    }

    &:hover {
        border: 1px solid ${COLOR.gray70};
        cursor: pointer;
    }
`

export const Label = styled.label`
    color: ${COLOR.gray70};
`
export const AssistiveText = styled.p`
    color: ${COLOR.white};
    font-size: .750rem;
`

export const Error = styled.p`
    color: darkgray;
    font-size: .750rem;
`