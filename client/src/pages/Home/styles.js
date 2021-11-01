import styled from "styled-components";

export const Hero = styled.div`
    background: #161616;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    position: relative;
    display: flex;
    flex-direction: row;
`

export const ActionsWrapper = styled.div`
    position: relative;
    padding: 0 2rem;
    display: inline-flex;
    width: 100%;
    gap: 1rem;  

    & > div:last-child {
        align-self: flex-end;
        flex-grow: 2;
        text-align: right;
    }
`

export const ButtonWrapper = styled.div`
    padding: 0 !important;
    margin: 0 !important;
    line-height: 0;
`