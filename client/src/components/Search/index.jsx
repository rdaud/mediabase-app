import React, { useState } from 'react';
import search from '../../assets/icons/search.svg';
import { SearchWrapper, StyledInput } from './styles';



export const Search = (props) => {

    const [ onFocus, setOnFocus ] = useState(false);

    const focusHandler = () => {
        setOnFocus(true)
    };

    const blurHandler = () => {
        setOnFocus(false)
    };

    return (
        <SearchWrapper onfocus={onFocus} {...props} >
            <img src={search} />
            <StyledInput onFocus={focusHandler} {...props} onBlur={blurHandler} id="input" placeholder="Buscar" label=""/>
        </SearchWrapper>
    );
}
