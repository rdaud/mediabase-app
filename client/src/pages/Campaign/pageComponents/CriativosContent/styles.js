import styled from "styled-components";
import { COLOR } from "../../../../tokens/colors";
import { Heading2, Section2, } from "../../../../components";
import { ReactComponent as Plus} from "../../../../assets/icons/plus.svg"

export const FormatWrapper = styled.div`
 
`

export const OutterWrapper = styled.div`
    width: 100%;
    height: 100%;
    padding: 2rem;
`

export const Wrapper = styled.div`
    height: 100%;
    width: 100%;
    position: relative;
    padding: 2rem;
    background: ${COLOR.gray100} !important;
`

export const InnerWrapper = styled.div`
  
    display: inline-flex;
    gap: 2rem;
    flex-wrap: wrap;
`

export const EmptyStateContainer = styled.div`
    width: 100%;
    height: 100%;
    margin: 2rem;
    border: 1px dashed ${COLOR.gray70};
    position: relative;
    color: ${COLOR.white};
    display: flex;
    justify-content: center;
    align-items: center;

    span {
        color: ${COLOR.brandRed90};
        cursor: pointer;
    }
`

const CriativoWrapper = styled.div`
    height: 440px;
    width: 280px;
    position: relative;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    background: ${COLOR.black};
    cursor: pointer;
    transform: translateY(0px);
    transition: all .1s linear;

    &:hover {
        box-shadow: 10px 10px 30px rgba(0,0,0,.3);
        transition: all .2s ease-in;
        transform: translateY(-10px);
    }
`

const Corte = styled.div`
    width: 86px;
    height: 56px;
    position: absolute;
    right: -34px;
    top: -24px;
    display: inline;
    transform: rotate(45deg);
    background-color: ${COLOR.gray80};
`

const Imagem = styled.div`
    height: 160px;
    width: 100%;
    background: ${COLOR.gray80};
`
const Conteudo = styled.div`
    height: 100%;
    width: 100%;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    background: ${COLOR.black};
    gap: 1rem;
`

const Descricao = styled.div`
   
`

export const Criativo = ({nome,imagem,descricao,onClick}) => {

  

    return (
        <CriativoWrapper onClick={onClick}>
            <Corte />
            <Imagem><img width="280" src={imagem}></img></Imagem>
            <Conteudo>
                <Heading2 style={{textTransform: 'uppercase', lineHeight: 1, fontSize: '1rem !important'}}>{nome}</Heading2>
                <Descricao>
                    <Section2 style={{color: "white"}}>DESCRIÇÃO</Section2>
                    <p style={{color: `${COLOR.gray70}`, fontSize: "14px", paddingTop: '.5rem'}}>{descricao}</p>
                </Descricao>
            </Conteudo>
        </CriativoWrapper>
    )
}

const CriativoButtonWrapper = styled.div`
    height: 440px;
    width: 280px;
    position: relative;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    align-items: center;
    justify-content: center;
    background: rgba(0,0,0,.2);

    &:hover {
        background: rgba(0,0,0,.4);
        cursor: pointer;
        transition: background 1s;
    }
`

const Adicionar = styled.div`
    width: 24px;
    height: 24px;
    background: ${COLOR.brandRed90};
    display: flex;
    align-items: center;
    justify-content: center;
`

export const CriativoButton = ({onClick}) => {
    return (
        <CriativoButtonWrapper onClick={onClick}>
            <Corte />
            <Adicionar>
                <Plus />
            </Adicionar>
        </CriativoButtonWrapper>
    )
}