import React, { useState } from 'react';
import search from '../../assets/icons/search.svg';
import { Wrapper, StyledInput } from './styles';



export const Search = (props) => {

    const [ onFocus, setOnFocus ] = useState(false);

    const focusHandler = () => {
        setOnFocus(true)
    };

    const blurHandler = () => {
        setOnFocus(false)
    };

    return (
        <Wrapper onfocus={onFocus} {...props} >
            <img src={search} />
            <StyledInput onFocus={focusHandler} {...props} onBlur={blurHandler}  placeholder="Buscar" label=""/>
        </Wrapper>
    );
}
