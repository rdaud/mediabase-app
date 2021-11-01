import '../../App.scss';
import React from 'react';
import icon from '../../assets/icons/close.svg'
import { SystemButton } from "../";
import { Hero, Header, ModalContainer } from './styles';


export const Modal = (props) => {

    return (
        <Hero>
            <ModalContainer {...props}>
                <Header>
                    <h2>{props.headerTitle}</h2>
                    <SystemButton onClick={props.handleClickOnCloseButton}>
                        <img src={icon} alt="Fechar" />
                    </SystemButton>
                </Header>
                {props.children}
            </ModalContainer>
        </Hero>
    )
}


