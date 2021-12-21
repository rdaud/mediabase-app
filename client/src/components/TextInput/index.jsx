import React, { useState } from 'react';
import { Wrapper, StyledInput, Label, AssistiveText, Error } from './styles';



export const TextInput = ({ label, error, assistiveText, placeholder,onChange, type, value, ...rest}) => {

    const [ onFocus, setOnFocus ] = useState(false);

    const focusHandler = () => {
        setOnFocus(true)
    };

    const blurHandler = () => {
        setOnFocus(false)
    };

    return (
        
        <Wrapper>
             { label && <Label>{label}</Label>}
            <StyledInput {...rest} error={error} value={value} onChange={onChange} onFocus={focusHandler} onBlur={blurHandler} placeholder={placeholder} type={type}/>
        { assistiveText && <AssistiveText>{assistiveText}</AssistiveText> }
        </Wrapper>
        
    );
}
