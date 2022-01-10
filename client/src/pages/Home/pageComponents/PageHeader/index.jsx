import React, { useState } from 'react';
import { Button } from "../../../../components";
import { useDispatch } from "react-redux";
import { Wrapper } from './styles';
import { Heading1 } from '../../../../components/Typography';
import plus from '../../../../assets/icons/plus.svg';


export const PageHeader = ({ setOpen }) => {

    const dispatch = useDispatch()

    return (
        <Wrapper>
            <Heading1>Campanhas</Heading1>
            <Button variation="primary" onClick={setOpen} iconLeft={plus}>Adicionar campanha</Button>
        </Wrapper>
    )
}
