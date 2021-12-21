import '../../App.scss';
import React from 'react';
import icon from '../../assets/icons/close.svg'
import { SystemButton } from "../";
import { Hero, Header, ModalContainer } from './styles';


export const Modal = ({ children, headerTitle, headerBackground, handleClickOnCloseButton, ...rest }) => {

    return ( 
        <Hero>
            <ModalContainer {...rest}>
                <Header headerBackground={headerBackground}>
                    <h2>{ headerTitle }</h2>
                    <SystemButton onClick={handleClickOnCloseButton}>
                        <img src={icon} alt="Fechar" />
                    </SystemButton>
                </Header>
                { children }
            </ModalContainer>
        </Hero>
    )
}


