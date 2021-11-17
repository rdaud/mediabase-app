import styled from 'styled-components';
import { COLOR } from '../../tokens/colors';
import { SystemButton } from "../";


export const Hero = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 9999;
    background-color: rgba(0,0,0,.9);
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Header = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    padding: 2rem 2rem 0 2rem;
`

export const ModalContainer = styled.div`
    width:  ${ props => props.modalWidth || "1024px" };;
    height: 600px;
    background-color: ${COLOR.black};
    position: relative;
    margin: 0 auto;
    overflow-y: hidden;
    border-radius: .4rem;
`
export const StyledSystemButton = styled(SystemButton)`
    position: absolute;
    right: 0;
    top: 0;
`