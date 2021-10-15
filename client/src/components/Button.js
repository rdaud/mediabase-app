import React from 'react';
import styled from 'styled-components';


const StyledButton = styled.button`

    background-color: #EB330F;
    padding: 0.5rem 1.2rem !important;
    height: 3rem;
    color: white;
    position: relative;
    margin: 0 !important;
    line-height: 0px;
    text-transform: uppercase;
    outline: none;
    border-style: none;
    font-size: 0.825rem;


    &::after {
        content: '';
        width: 32px;
        position: absolute;
        right: -14px;
        top: -14px;
        display: inline;
        height: 24px;
        transform: rotate(45deg);
        background-color: ${ props => props.corDaOrelha || "#161616" };
    }
`

const StyledCloseButton = styled.button`
    width: 56px;
    height: 56px;
    background: white;
    cursor: pointer;
`


export function ThemeButton(props) {
    return (
        <StyledButton type="submit" {...props}>{props.children}</StyledButton>
    )
}

export function SystemButton(props) {
    return (
        <StyledCloseButton type="button" {...props}> {props.children} </StyledCloseButton>
    )
}



