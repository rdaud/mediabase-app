import styled from 'styled-components';
import { COLOR } from '../../tokens/colors';
import { SystemButton } from "../";


export const Hero = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 9999;
    background-color: rgba(0,0,0,.9);
    display: block;
    overflow-y: scroll;
`


export const ModalContainer = styled.div`
    width:  ${ props => props.width || "1024px" };
    height:  ${ props => props.height || "600px" };
    position: relative;
    left: 50%;
    top: 2rem;
    background: ${COLOR.gray90};
    transform: translateX(-50%);
    overflow-y: hidden;
    border-radius: .4rem;
    overflow: scroll;
`


export const Header = styled.div`
    position: relative;
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem 1rem 2rem;

`



export const StyledSystemButton = styled(SystemButton)`
    position: absolute;
    right: 0;
    top: 0;
`