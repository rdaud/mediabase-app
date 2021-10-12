import React from 'react';
import styled from 'styled-components'
import { ThemeButton } from "./Button";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from 'react-router-dom';
import { signOut, getCampaigns } from '../redux/action-creators'




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
    const state = useSelector(state => state.campanhas)

    return (
        <Hero>
            <Header>
                <h1>Campanhas</h1>
                <ThemeButton>+ Adicionar campanha</ThemeButton>
            </Header>
            <button onClick={() => {
                dispatch(signOut(history))
            }}>
                Logout
            </button>

            <button onClick={() => {
                const data = dispatch(getCampaigns())
                console.log(state)
            }}>
                Get table data
            </button>

            {props.children}
        </Hero>
    )
}

export default ContentContainer

