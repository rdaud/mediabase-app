import styled, { keyframes, css } from "styled-components";
import { COLOR } from "../../tokens/colors";



const toastAnimation = keyframes`
    0%,100% {
        opacity: 0;
        transform: translateY(0rem);
    }

    20% {
        opacity: 1;
        transform: translateY(-2rem);
    }

    75% {
        opacity: 1;
        transform: translateY(-2rem);
    }
`

const animationStyles = css`
    animation-name: ${toastAnimation};
    animation-duration: 2s;
    animation-iteration-count: 1;
    animation-direction: forwards;
    animation-timing-function: ease-in-out;
`



export const Wrapper = styled.div`
    position: absolute;
    bottom: 0;
    opacity: 0;
    left: 50%;
    transform: translateX(-50%);
    background: ${ props => props.status === 'success' ? COLOR.alertGreen : COLOR.alertYellow };
    padding: 0.5rem 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: .125rem;
    z-index: 9999;
    color: ${ props => props.status === 'success' ? COLOR.white : COLOR.black };
    box-shadow: 0 5px 20px 2px ${COLOR.black};

    ${animationStyles}


`

