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
    border: ${ props => props.error ? "1px solid darkgray" : `1px solid ${COLOR.gray80}`};
    color: ${COLOR.white};
    font-size: 14px;
    position: absolute;
    opacity: 0;

    &:focus {
        outline: 0;
        border-color: ${COLOR.brandRed90} !important;
    }

    &:hover {
        border: 1px solid ${COLOR.gray70};
    }
`

export const SelectedValue = styled.div`
`

export const Control = styled.div`
    display: inline-flex;
    background-color: ${COLOR.gray90};
    height: ${ props => props.small ? "2rem" : "3rem" };
    width: 100%;
    min-width: 150px;
    align-items: center;
    padding: 1rem;
    color: ${COLOR.gray70} !important;
    position: relative;
    justify-content: space-between;
    outline: none;
    // border: 1px solid ${ props => props.lighter ? COLOR.gray70 : COLOR.gray100};
    font-size: 14px;
    margin: 0;
   
    &:hover {
        border-color: ${ props => props.lighter ? COLOR.white : COLOR.gray70 };
        cursor: pointer;
    }

`

export const Label = styled.label`
    color: ${COLOR.gray70};
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