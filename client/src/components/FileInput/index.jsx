import React, { useState } from 'react';
import { Wrapper, StyledInput, Label, AssistiveText, Error, Remover, SelectedValue, Control } from './styles';
import { UploadOutlined } from '@ant-design/icons'



export const FileInput = ({ label, error, assistiveText, onClick, placeholder,onChange, type, value, ...rest}) => {

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
            <Control {...rest}>
                <StyledInput type="file" error={error} onChange={onChange} onFocus={focusHandler} onBlur={blurHandler}/>
                <SelectedValue >
                    { placeholder}
                </SelectedValue>
                <UploadOutlined style={{color: "white"}}/>
            </Control>
            { assistiveText &&
            <AssistiveText>{assistiveText}
                <Remover type="button" onClick={onClick}>Remover</Remover>
            </AssistiveText> }
        </Wrapper>
        
    );
}
