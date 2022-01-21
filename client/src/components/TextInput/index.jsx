import React, { useState } from 'react';
import { Wrapper, StyledInput, Label, AssistiveText, ErrorText } from './styles';



export const TextInput = ({ label, error, assistiveText, placeholder, onChange, onBlur, onFocus, type, value, key, ...rest}) => {

    return (
        
        <Wrapper>
             { label && <Label>{label}</Label>}
            <StyledInput {...rest} value={value} onChange={onChange} onFocus={onFocus} onBlur={onBlur} placeholder={placeholder} type={type}/>
            { assistiveText && <AssistiveText>{assistiveText}</AssistiveText> }
            { error && <ErrorText>{error}</ErrorText> }
        </Wrapper>
        
    );
}
