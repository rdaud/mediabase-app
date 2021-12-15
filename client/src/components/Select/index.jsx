import React, { useState, useRef, useContext, createContext } from 'react';
import { Styles, Wrapper, InlineOptions, InlineControl, Icon, Control, SelectedValue, Label, Option, Options } from './styles'
import { Info1 } from '../Typography';
import chevron from '../../assets/icons/chevron-down.svg'
import { COLOR } from '../../tokens/colors';
import { useEffect } from 'react';



export const Select = ({ value, options, prompt, onChange, label, style, ...rest }) => {

    const [ isOpen, setIsOpen ] = useState(false)
    const ref = useRef(null)

    useEffect(() => {
        document.addEventListener('click', close)
        return () => document.removeEventListener('click', close)
    },[])

    function close(e) {
        setIsOpen( e && e.target === ref.current)
    }
 
    return (
        <>
        <Styles>
            { label && <Label>{label}</Label>}
            <Wrapper>
                <Control ref={ref} onClick={(e) => {
                    e.stopPropagation()
                    setIsOpen(!isOpen)
                }} style={style} {...rest}>
                    <SelectedValue isDefault={!value}>
                        { value || prompt }
                    </SelectedValue>
                    <Icon className={`${isOpen ? "animate" : null}`}>
                        <img src={chevron} alt="chevron-down" />
                    </Icon>

                </Control>
                <Options className={`${isOpen ? "open" : null}`}>
                <Option
                    value=""
                    onClick={() => {
                                onChange('')
                                setIsOpen(false)
                            }}
                            isDefault={true}
                    >{prompt}
                    </Option>

                    { options.map((item,index) => {
                        return (
                            <Option
                            key={index}
                            onClick={() => {
                                onChange(item)
                                setIsOpen(false)
                            }}
                            className={`${value === item ? 'selected' : null}`}
                            >{item}</Option>
                        )
                    })}
                </Options>
             
            </Wrapper>  

            </Styles>

           
        </>

    )
}



export const InlineSelect = ({ value, options, prompt, onChange, style, ...rest }) => {

    const [ isOpen, setIsOpen ] = useState(false)
    const ref = useRef(null)

    useEffect(() => {
        document.addEventListener('click', close)
        return () => document.removeEventListener('click', close)
    },[])

    function close(e) {
        setIsOpen( e && e.target === ref.current)
    }
 
    return (
        <>
        <Styles>
            <div>
                <InlineControl ref={ref} onClick={(e) => {
                    e.stopPropagation()
                    setIsOpen(!isOpen)
                }} style={style} {...rest}>
                    <SelectedValue isDefault={!value}>
                        { value || prompt }
                    </SelectedValue>
                    <Icon className={`${isOpen ? "animate" : null}`}>
                        <img src={chevron} alt="chevron-down" />
                    </Icon>

                </InlineControl>
                <InlineOptions className={`${isOpen ? "open" : null}`}>
             

                    { options.map((item,index) => {
                        return (
                            <Option
                            key={index}
                            onClick={() => {
                                onChange(item)
                                setIsOpen(false)
                            }}
                            className={`${value === item ? 'selected' : null}`}
                            >{item}</Option>
                        )
                    })}
                </InlineOptions>
             
            </div>  

            </Styles>

           
        </>

    )
}