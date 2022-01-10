import '../../App.scss';
import React, { useEffect, createElement, useRef } from 'react';
import { createPortal } from 'react-dom';
import icon from '../../assets/icons/close.svg'
import { SystemButton } from "../";
import { Hero, Header, ModalContainer } from './styles';


const modalRoot = document.getElementById('modal');


export const Modal = ({ children, setOpen, headerTitle, handleClickOnCloseButton, ...rest }) => {

    return createPortal(
        <Hero >
            <ModalContainer {...rest}>
                <Header>
                    <h2>{headerTitle}</h2>
                    <SystemButton onClick={handleClickOnCloseButton}>
                        <img src={icon} alt="Fechar" />
                    </SystemButton>
                </Header>
                { children }
            </ModalContainer>
        </Hero>
        ,document.getElementById('modal')
    )
     
}


