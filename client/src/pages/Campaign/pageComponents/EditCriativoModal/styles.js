import styled from "styled-components"
import { COLOR } from "../../../../tokens/colors"


export const FormWrapper = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    padding: 2rem; 
    background: ${COLOR.gray90};
`

export const FormContainer = styled.form` 
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin: 0 auto;
    position: relative;
`

export const ImagemDeCapa = styled.div`
    width: 100%;
    height: 216px;
    background: black;
    position: relative;
`

export const AlterarImagem = styled.div`
    width: auto;
    padding: .250rem .5rem;
    position: absolute;
    bottom: 1rem;
    cursor: pointer;
    border: 1px solid ${COLOR.gray60};
    right: 1rem;
    font-size: 12px;
    border-radius: 2px;
    text-transform: uppercase;
`