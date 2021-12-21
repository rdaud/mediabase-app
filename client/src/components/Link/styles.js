import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(Link)`
    color: ${ props => props.color };
    text-decoration: underline !important;
    cursor: pointer;
    font-size: ${ props => props.fontSize }px;
    &:hover {
        color: ${ props => props.hoverColor };
    }
`
