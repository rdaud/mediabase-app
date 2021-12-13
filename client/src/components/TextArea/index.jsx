import React, { useState } from 'react';
import { Wrapper, StyledTextArea, Label, AssistiveText, Error } from './styles';



export const TextArea = ({ label, error, assistiveText, placeholder,onChange, type, value}) => {

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
        <StyledTextArea  error={error} value={value} onChange={onChange} onFocus={focusHandler} onBlur={blurHandler} placeholder={placeholder} type={type}/>
       
        </Wrapper>
        
    );
}
