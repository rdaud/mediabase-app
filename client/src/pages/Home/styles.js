import styled from "styled-components";
import { COLOR } from "../../tokens/colors";

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

export const EmptyStateContainer = styled.div`

    width: 100%;
    border: 1px dashed ${COLOR.gray90};
    position: relative;
    color: ${COLOR.white};
    display: flex;
    justify-content: center;
    height: 100%;
    align-items: center;
    span {
        color: ${COLOR.brandRed90};
        cursor: pointer;
    }
`

export const EmptyStateWrapper = styled.div`
    opacity: relative;
    width: 100%;
    padding: 0 2rem 2rem 2rem;
    flex-grow: 3;
`