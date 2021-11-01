import React from 'react';
import { DropdownItemWrapper, DropdownWrapper } from './styles';



export const DropdownItem = (props) => {
    return (  
        <DropdownItemWrapper {...props}>
           <p> {props.children} </p>
        </DropdownItemWrapper>
    );
}

export const Dropdown = (props) => {
    return (  
        <DropdownWrapper {...props}>
            {props.children}
        </DropdownWrapper>
    );
}

