import styled from "styled-components";
import { COLOR } from "../../../../tokens/colors";

export const FormatsSection = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 2rem;  
`

export const ActionsWrapper = styled.div`
    position: relative;
    display: inline-flex;
    width: 100%;
    gap: 1rem;  

    & > div:last-child {
        align-self: flex-end;
        flex-grow: 2;
        text-align: right;
    }
`

export const FormatosList = styled.ul`
    display: flex;
    flex-direction: column;
    margin-top: 4rem;
    gap: 2rem;
    padding-left: 0 !important;
`

export const EmptyStateContainer = styled.div`

    width: 100%;
    border: 1px dashed ${COLOR.gray90};
    position: relative;
    flex-grow: 1;
    color: ${COLOR.white};
    display: flex;
    justify-content: center;
    align-items: center;

    span {
        color: ${COLOR.brandRed90};
        cursor: pointer;
    }
`

export const FormatWrapper = styled.li`
    display: inline-flex;
    gap: 2rem;
    justify-content: flex-start;
    border-bottom: 1px solid rgba(255,255,255,.1);
    padding-bottom: 2rem;
`

export const Checkbox = styled.div`
    color: white;
    cursor: pointer;
`

export const FormatName = styled.h5`
    margin-bottom: 0 !important;
`

export const Button = styled.div`
    aligns-self: flex-end;
    flex-grow: 2;
    text-align: right;
    color: white;
`

export const ButtonWrapper = styled.div`
    padding: 0 !important;
    margin: 0 !important;
    line-height: 0;
`