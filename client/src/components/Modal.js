import '../App.scss';
import React from 'react';
import styled from 'styled-components'
import icon from '../utils/close-icon.svg'
import { useHistory } from 'react-router-dom'








const Hero = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 9999;
    background-color: black;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Header = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

const ModalContainer = styled.div`
    width:  ${ props => props.modalWidth || "1024px" };;
    height: 608px;
    background-color: #323232;
    position: relative;
    margin: 0 auto;
    padding: 2rem;
    overflow-y: hidden;
`

const CloseButton = styled.div`
    width: 56px;
    height: 56px;
    display: flex;
    justify-content: center;
    align-items: center;
`








function Modal(props) {

    const history = useHistory()

    const handleClickOnCloseButton = e => {
        e.stopPropagation();
        history.goBack();
    };
    

    return (
        <Hero>
            <ModalContainer {...props}>
                <Header>
                    <h2>{props.headerTitle}</h2>
                    <CloseButton onClick={handleClickOnCloseButton}> <img src={icon} alt="Fechar" />
                    </CloseButton>
                </Header>
                {props.children}
            </ModalContainer>
        </Hero>
    )
}

export default Modal

