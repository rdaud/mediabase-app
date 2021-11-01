import styled from "styled-components";
import { Section4 } from '../Typography';


export const TabBarWrapper = styled.div`
    width: 100%;
    display: inline-flex;
    gap: 1.5rem;
    justify-content: flex-start;
    cursor: pointer;
    padding-left: 2rem;
`

export const TabWrapper = styled.div`
    width: auto;
    text-align: center;
    height: 40px;
    position: relative;
    background: transparent;
`

export const StyledSection4 = styled(Section4)`

    &::after {
        content: '';
        position: absolute;
        bottom: 0px;
        left: 0;
        height: 4px;
        width: 100%;
        background: red;
        display: ${ props => props.tabShow };
    }

`

export const InnerWrapper = styled.div`
    position: relative;
    margin: 0 auto;
    height: 100%;
    display: inline-flex;
    justify-content: center;
    align-items: center;
`
