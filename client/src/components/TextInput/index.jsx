import React, { useState } from 'react';
import { Wrapper, StyledInput, Label, AssistiveText, Error } from './styles';



export const TextInput = ({ label, error, assistiveText, placeholder,onChange, type}) => {

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
        <StyledInput error={error} onChange={onChange} onFocus={focusHandler} onBlur={blurHandler} placeholder={placeholder} type={type}/>
        { error && <Error>Alguma mensagem de erro</Error>}
        { assistiveText && <AssistiveText>Alguma mensagem de erro</AssistiveText>}


        </Wrapper>
        
    );
}
