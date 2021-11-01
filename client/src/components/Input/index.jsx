import React, { useState } from 'react';
import search from '../../assets/icons/search.svg';
import { SearchWrapper, StyledInput } from './styles';



export const Search = () => {

    const [ onFocus, setOnFocus ] = useState(false);

    const focusHandler = () => {
        setOnFocus(true)
    };

    const blurHandler = () => {
        setOnFocus(false)
    };

    return (
        <SearchWrapper onfocus={onFocus}>
        <img src={search} />
        <StyledInput onFocus={focusHandler} onBlur={blurHandler} id="input" placeholder="Buscar" label=""/>
        </SearchWrapper>
    );
}
