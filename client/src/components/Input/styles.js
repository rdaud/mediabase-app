import styled from 'styled-components';
import { COLOR } from '../../tokens/colors';


export const SearchWrapper = styled.div`

    min-width: 150px;
    max-width: 300px;
    border: 1px solid transparent;
    border-color: ${ props => props.onfocus ? COLOR.white : COLOR.gray90 };
    padding-left: 1rem;
    display: inline-flex;
    align-itens: center;
    box-sizing: border-box;

    span {
        color: ${COLOR.gray90};
        margin-right: .5rem;
        align-self: center;
    }

    // &:hover {
    //     border-color: yellow;
    // }

`

export const StyledInput = styled.input`
    padding-left: -3rem;
    height: 48px;
    width: 100%;
    background: transparent;
    border: 0;
    color: ${COLOR.white};

    &:focus {
        outline: none;
    }
`