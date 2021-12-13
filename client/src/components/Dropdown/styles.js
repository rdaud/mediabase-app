import styled from 'styled-components';
import { COLOR } from '../../tokens/colors';

export const DropdownWrapper = styled.div`

    display: ${ props => props.isShown ? 'flex' : 'none'};
    position: absolute;
    background-color: rgb(30,30,30);
    bottom: ${props => props.bottom};
    left: ${props => props.left};
    right: ${props => props.right};
    top: ${props => props.top};
    border-radius: 0.2rem;
    min-width: 180px;
    box-shadow: 0px 8px 16px 0px rgb(0 0 0 / 20%);
    z-index: 1;
    flex-direction: column;

`

export const DropdownItemWrapper = styled.button`
    width: auto;
    padding: .5rem;
    position: relative;
    border: 1px solid transparent;
    &:hover {
        border-color: ${COLOR.gray70};
        background: ${COLOR.gray80};
    }
    & > p, a {
        color: white;
        font-size: 0.875rem;
        margin: 0;
    }
`