import styled from "styled-components"
import { COLOR } from "../../../../tokens/colors"


export const FormWrapper = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    padding: 0 2rem 2rem 2rem; 
    background: ${COLOR.gray80};
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
`
