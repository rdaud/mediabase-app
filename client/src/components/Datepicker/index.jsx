import React, { useState, useRef, useContext, createContext } from 'react';
import { Wrapper, Icon, Control, SelectedValue, Label, Option, Options } from './styles'
import { Info1 } from '../Typography';
import { CalendarOutlined } from '@ant-design/icons';
import chevron from '../../assets/icons/chevron-down.svg'
import { useEffect } from 'react';



export const Datepicker = ({ value, options, placeholder, onChange, label, style, ...rest }) => {


 
    return (
        <>
            { label && <Label>{label}</Label>}
            <Wrapper>
                <Control type="date" placeholder={placeholder} value={value} onChange={onChange} style={style} />
                    
                <CalendarOutlined style={{
                    color:"red",
                    position: "absolute",
                    top: "50%",
                    right: "1rem",
                    transform: "translateY(-50%)"
                    }}/>
            </Wrapper>  

           
        </>

    )
}



