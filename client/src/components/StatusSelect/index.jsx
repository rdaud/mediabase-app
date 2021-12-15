import React, { useState, useRef } from 'react';
import { Styles, Wrapper, InlineOptions, InlineControl, Icon, Control, SelectedValue, Label, Option, Options } from './styles'
import chevron from '../../assets/icons/chevron-down.svg'
import { COLOR } from '../../tokens/colors';
import { useEffect } from 'react';
import styled from 'styled-components';


const Dot = styled.div`
    width: 8px;
    height: 8px;
    border-radius: 100%;
    position: relative;
    display: inline-block;
    background: ${ props => props.value === 'Em produção' ? 'red' : props.value === 'Finalizada' ? 'yellow' : 'white'};
`


export const StatusSelect = ({ ...rest }) => {

    const [ isOpen, setIsOpen ] = useState(false)
    const ref = useRef(null)
    const options = ['Em produção', 'Finalizada']
    const [ status, setStatus ] = useState(options[0])

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
                }} {...rest}>
                    <SelectedValue isDefault={!status}>
                    <Dot value={status} /> <span style={{ marginLeft: '.8rem'}}>{ status }</span>
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
                                setStatus(item)
                                setIsOpen(false)
                            }}
                            className={`${status === item ? 'selected' : null}`}
                            >{item}</Option>
                        )
                    })}
                </InlineOptions>
             
            </div>  

            </Styles>

           
        </>

    )
}