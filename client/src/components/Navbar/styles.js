import styled from 'styled-components';

import { COLOR } from "../../tokens/colors";


export const Navigation = styled.nav`
    height: 100vh;
    min-width: 64px;
    position: relative;
    top: 0;
    left: 0;
    background: ${COLOR.gray90};
    border-right: 1px solid ${COLOR.gray80};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`


export const MenuItens = styled.div`
    position: relative;
    height: 64px;
    width: auto;
    display: flex;
    justify-content: center;
    align-items: center;


`

export const NavItem = styled.div`
    position: relative;
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    padding-bottom: .5rem;
`


export const Logo = styled.div`
    margin: 1rem;
    & img {
        transform: scale(.8);
    }
`

export const Avatar = styled.div`
    width: 44px;
    height: 44px;
    position: relative;
    border-radius: 10rem;
    background: ${COLOR.gray90};
    border: 1px solid transparent;
    border-color: ${COLOR.gray80};
    overflow: hidden;
    display: block;
    margin: 0 auto;

    span {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translateY(-50%) translateX(-50%);
        color: ${COLOR.gray90};
    }
`
