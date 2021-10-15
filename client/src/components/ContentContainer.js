import React from 'react';
import styled from 'styled-components'
import { ThemeButton } from "./Button";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from 'react-router-dom';
import { signOut } from '../redux/actions/usersActions';




const Hero = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
`
const Header = styled.div`
    width: 100%;
    position: relative;
    padding: 1.2rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`


function ContentContainer(props) {

    const dispatch = useDispatch()
    const history = useHistory()

    const handleClick = () => {
        history.push('/nova-campanha')
    }

    return (
        <Hero>
            <Header>
                <h1>Campanhas</h1>
                <ThemeButton onClick={handleClick}>+ Adicionar campanha</ThemeButton>
            </Header>
            <button onClick={() => {
                dispatch(signOut(history))
            }}>
                Logout
            </button>
            {props.children}
        </Hero>
    )
}

export default ContentContainer

