import React, { useState, Component } from 'react';
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
        background-color: #161616;
    }
`

const StyledCloseButton = styled.div`
    width: 56px;
    height: 56px;
    background: white;
`


export function ThemeButton(props) {
    return (
        <StyledButton type="submit">{props.children}</StyledButton>
    )
}

export function SystemButton(props) {
    return (
        <StyledCloseButton>{props.children}</StyledCloseButton>
    )
}



