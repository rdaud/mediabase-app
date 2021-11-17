import React from 'react';
import { StyledLink } from './styles';


export const Link = ({children, ...rest}) => {
    return (
        <StyledLink {...rest}>
            {children}
        </StyledLink>
    )
}