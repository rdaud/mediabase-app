import React from 'react';
import { Hero } from './styles';


export const MainContainer = ({children, ...rest}) => {

    return (
        <Hero { ...rest }>
            { children }
        </Hero>
    )
}


