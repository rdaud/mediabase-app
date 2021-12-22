import styled from 'styled-components';
import { COLOR } from '../../tokens/colors';


export const StyledButton = styled.button`

    background-color: ${ props => props.disabled === true ? 'gray' : props.cor || "#EB330F" };
    padding: .5rem 1.2rem !important;
    position: relative;
    height: 3rem;
    outline: none;
    display: inline-flex;
    align-items: center;
    overflow: hidden;

    &::after {
        content: '';
        width: 32px;
        position: absolute;
        right: -14px;
        top: -14px;
        display: inline;
        height: 24px;
        transform: rotate(45deg);
        background-color: ${ props => props.corDaOrelha || "#161616" };
    }

`

export const StyledStatusButton = styled.button`

    background-color: transparent;
    height: 3rem;
    color: ${COLOR.white} !important;
    position: relative;
    margin: 0 !important;
    line-height: 0px;
    outline: none;
    font-size: 0.875rem;

    & > div {
        display: none;
    }

`

export const StyledRegularButton = styled.button`

    background-color: transparent;
    height: 3rem;
    display: inline-flex;
    align-items: center;
    padding: 1rem 1rem;
    color: ${COLOR.white} !important;
    position: relative;
    outline: none;
    border: 1px solid ${COLOR.gray90};

`

export const Dot = styled.span`
    width: 8px;
    height: 8px;
    border-radius: 25px;
    margin-right: 0.125rem;
    background: ${ props => props.status === 'Finalizada' ? COLOR.alertGreen : props.status === 'Em produção' ? COLOR.alertYellow : COLOR.white };
    position: relative;
    display: inline-block;
`

export const StyledCloseButton = styled.button`
    width: 56px;
    height: 56px;
    background: transparent;
`

export const Icon = styled.span`
  position: relative;
  display: inline-block;
`

export const StatusButtonWrapper = styled.div`
    padding-left: 1rem;
    padding-right: 1rem;
    height: 3rem;
    border-bottom: 1px solid ${COLOR.gray90};
    width: max-content;
    height: 48px;

`