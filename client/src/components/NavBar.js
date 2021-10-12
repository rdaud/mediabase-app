import '../App.scss';
import React from 'react';
import logo from '../utils/logo-vertical.svg'
import styled from 'styled-components'


const Navigation = styled.nav`
    height: 100vh;
    width: 64px;
    position: relative;
    top: 0;
    left: 0;
    background: black;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`

const NavItem = styled.div`
    margin: 1rem;
    & img {
        transform: scale(.8);
    }
`

const Avatar = styled.div`
    width: 44px;
    height: 44px;
    background: darkgray;
    border-radius: 5rem;
    background-repeat: none;
`


function NavBar() {
    return (
        <Navigation>
            <NavItem>
            <img src={logo} alt="Mediabase" />
            </NavItem>
            <NavItem>
                <Avatar>
                </Avatar>
            </NavItem>
        </Navigation>
    )
}

export default NavBar

