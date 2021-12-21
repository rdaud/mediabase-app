import styled from "styled-components";
import { COLOR } from "../../../../tokens/colors";

export const Wrapper = styled.section`
    width: 100%;
    height: 100%;
    display: flex;
    position: relative;
    flex-direction: column;
`


export const Body = styled.div`
    width: inherit;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    background: ${COLOR.gray90};
`