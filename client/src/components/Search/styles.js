import styled from 'styled-components';
import { COLOR } from '../../tokens/colors';


export const Wrapper = styled.div`

    min-width: 150px;
    max-width: 300px;
    outline: 1px solid transparent;
    outline-color: ${ props => props.lighter ? COLOR.gray70 : COLOR.gray100 };
    padding-left: 1rem;
    display: inline-flex;
    align-itens: center;

    span {
        color: ${COLOR.gray90};
        margin-right: .5rem;
        align-self: center;
    }

    &:hover {
        outline-color: ${ props => props.lighter ? COLOR.white : COLOR.gray70 };
    }

  

`

export const StyledInput = styled.input`
    padding-left: -3rem;
    height: 48px;
    width: 100%;
    background: transparent;
    color: ${COLOR.white};
    font-size: 14px !important;
    outline: none;
    border: 0;

    &:focus {
        outline: none;
    }
    
`