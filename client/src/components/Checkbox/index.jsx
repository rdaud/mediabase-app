import React, { useState } from 'react';
// import { StyledLink } from './styles';
import styled from 'styled-components';


const Wrapper = styled.div`
    position: relative;
    width: 24px;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Default = styled.input`
    width: 12px;
    height: 12px;
    border: 1px solid white;
    background: transparent;
`

const Checked = styled.input`
    width: 12px;
    height: 12px;
    border: 1px solid red;
    background: red !important;
`

const Partial = styled.input`
    width: 12px;
    height: 12px;
    border: 1px solid white;
    background: transparent;
`

const RedBar = styled.div`
    width: 8px;
    height: 1px;
    background: red;
`

export const Checkbox = () => {

    const [ isClicked, setIsClicked ] = useState(false)
    return (
        <Wrapper>
            { !isClicked && <Default type="checkbox" onClick={() => setIsClicked(!isClicked)}/> }
            { isClicked && <Checked type="checkbox" onClick={() => setIsClicked(!isClicked)}/> }
            {/* { isClicked && <Partial /> } */}
        </Wrapper>
    )
}