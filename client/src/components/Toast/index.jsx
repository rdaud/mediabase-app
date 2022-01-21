import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Wrapper } from './styles';
import { Section2 } from '..';


export const Toast = ({ status }) => {

    const newDiv = document.createElement('div')
    newDiv.className = 'toast-portal'
    const rootDom = document.getElementById('root')
    rootDom.insertAdjacentElement('beforebegin',newDiv)
    console.log('hey')
    useEffect(() => { 
        return () => {
            // Remove DOM element when closing the modal
            newDiv.remove()
        }
    })

    return createPortal(
        <>
            <Wrapper status={status}>
                <Section2>
                { status === 'success' && `Informações salvas!`}
                { status === 'failure' && `Erro`}
                </Section2>
            </Wrapper>
        </>,
        newDiv
    )
}

