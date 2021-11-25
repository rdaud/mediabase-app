import styled from 'styled-components';
import { COLOR } from '../../tokens/colors';


export const Wrapper = styled.div`
    position: relative;
    width: auto;
    height: auto;

`




export const Control = styled.input`
    display: inline-flex;
    background-color: transparent;
    height: ${ props => props.small ? "2rem" : "3rem" };
    width: 100%;
    min-width: 150px;
    align-items: center;
    cursor: pointer;

    padding: 1rem;
    color: ${COLOR.white} !important;
    position: relative;
    justify-content: space-between;
    outline: none;
    border: 1px solid ${ props => props.lighter ? COLOR.gray70 : COLOR.gray100};
    font-size: 14px;
    margin: 0;
   
    &:hover {
        border-color: ${COLOR.gray90};
        background: rgba(255,255,255,.1);
    }

`


export const Label = styled.label`
    color: ${COLOR.gray70};
`

export const Options = styled.div`
    position: absolute;
    width: 100%;
    background-color: ${COLOR.black};
    top: calc(3rem - 1px);
    left: 0;
    z-index: 9999;
    display: none;
    flex-direction: column;
    border: 1px solid ${COLOR.gray100};
`

export const Option = styled.div`
    width: auto;
    padding: 1rem 1rem;
    height: 3rem;
    position: relative;
    display: flex;
    align-items: center;
    text-align: left;
    color: ${COLOR.gray90};
    font-size: 14px;
    margin: 0;
    border: 1px solid transparent;

    &:hover {
        border-color: ${COLOR.gray90};
        cursor: pointer;

    }
  
`