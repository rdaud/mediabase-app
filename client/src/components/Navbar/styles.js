import styled from 'styled-components';
import { COLOR } from "../../tokens/colors";


export const Navigation = styled.nav`
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
    margin-bottom: .5rem;
    display: ${ props => props.isShown ? 'block' : 'inline-block'};
    width: 100%;
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
    background: ${COLOR.black};
    border-radius: .125rem;
    display: block;
    margin: 0 auto;
    box-shadow: 0px 8px 16px 0px #101010;


    span {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translateY(-50%) translateX(-50%);
        color: ${COLOR.gray90};
    }
`
