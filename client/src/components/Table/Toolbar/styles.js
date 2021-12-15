import React, {useState} from 'react';
import styled from "styled-components";
import { COLOR } from "../../../tokens/colors";
import { ReactComponent as Trash } from "../../../assets/icons/trash.svg"
import { ReactComponent as Criativo } from "../../../assets/icons/criativo.svg"
import { ReactComponent as Hourglass } from "../../../assets/icons/hourglass.svg"
import { ReactComponent as Calendar } from "../../../assets/icons/calendar.svg"
import { ReactComponent as Status } from "../../../assets/icons/check.svg"
import { ReactComponent as Download } from "../../../assets/icons/download.svg"
import { ReactComponent as Document } from "../../../assets/icons/document.svg"
import { ReactComponent as Close } from "../../../assets/icons/close.svg"







export const Wrapper = styled.div`
    position: fixed;
    display: inline-flex;
    gap: 1rem;
    z-index: 9999;
    bottom: 32px;
    left: 50%;
    transform: translateX(-50%);
    height: 48px;
    boxshadow: 10px 10px 10px rgba(0,0,0,.5);
    border-radius: .250rem;

`

export const InnerWrapper = styled.div`
    position: relative;
    background: ${COLOR.gray80};
    display: inline-flex;
    height: 48px;
    boxshadow: 10px 10px 10px rgba(0,0,0,.5);
    border-radius: .250rem;
`


export const Counter = styled.div`
    height: 100%;
    width: max-content;
    padding: 0 1rem;
    background: ${COLOR.brandRed90};
    display: flex;
    align-items: center;
    color: ${COLOR.white};

`

const ItemWrapper = styled.div`
    width: 48px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        background: ${COLOR.gray90};
        cursor: pointer;
    }
`

const Label = styled.label`
    position: absolute;
    width: max-content;
    top: -2.5rem;
    color: white;
    background: black;
    padding: .250rem .5rem;
`

export const Remove = () => {

    const [ isHovered, setIsHovered ] = useState(false)

    return (

        <ItemWrapper
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
           { isHovered && <Label>Remover</Label> } 
            <Trash />
        </ItemWrapper>
    )

}

export const AddCriativo = () => {
    const [ isHovered, setIsHovered ] = useState(false)

    return (
        <ItemWrapper 
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}>
                       { isHovered && <Label>Adicionar criativo</Label> } 

            <Criativo />
        </ItemWrapper>
    )

}

export const ChangePrazo = () => {
    const [ isHovered, setIsHovered ] = useState(false)

    return (
        <ItemWrapper 
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}>
                       { isHovered && <Label>Mudar prazo</Label> } 

            <Hourglass />
        </ItemWrapper>
    )

}


export const ChangeVeiculação = () => {
    const [ isHovered, setIsHovered ] = useState(false)

    return (
        <ItemWrapper 
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}>
                       { isHovered && <Label>Mudar veiculação</Label> } 

            <Calendar />
        </ItemWrapper>
    )

}

export const ChangeStatus = () => {
    const [ isHovered, setIsHovered ] = useState(false)

    return (
        <ItemWrapper 
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}>
                       { isHovered && <Label>Mudar status</Label> } 

            <Status />
        </ItemWrapper>
    )

}

export const Export = () => {
    const [ isHovered, setIsHovered ] = useState(false)

    return (
        <ItemWrapper 
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}>
                       { isHovered && <Label>Fazer o download</Label> } 

            <Download />
        </ItemWrapper>
    )

}

export const ExportarCSV = () => {
    const [ isHovered, setIsHovered ] = useState(false)

    return (
        <ItemWrapper 
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}>
                       { isHovered && <Label>Exportar CSV</Label> } 

            <Document />
        </ItemWrapper>
    )

}

export const Cancelar = ({...props}) => {
    const [ isHovered, setIsHovered ] = useState(false)

    return (
        <ItemWrapper {...props}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}>
                       { isHovered && <Label>Cancelar</Label> } 

            <Close />
        </ItemWrapper>
    )

}