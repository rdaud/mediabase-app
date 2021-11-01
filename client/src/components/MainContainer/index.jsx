import React from 'react';
import { Hero } from './styles';


export const MainContainer = (props) => {

    return (
        <Hero>
            {props.children}
        </Hero>
    )
}


