import { RestOutlined } from '@ant-design/icons';
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

export const IndeterminateCheckbox = React.forwardRef(
    ({ indeterminate, ...rest }, ref) => {
      const defaultRef = React.useRef()
      const resolvedRef = ref || defaultRef
  
      React.useEffect(() => {
        resolvedRef.current.indeterminate = indeterminate
      }, [resolvedRef, indeterminate])
  
      return (
        <>
          <input type="checkbox" ref={resolvedRef} {...rest} />
        </>
      )
    }
  )