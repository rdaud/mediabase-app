import React,{useEffect, useRef, useState} from 'react';
import { FormatWrapper, Wrapper, EmptyStateContainer, Criativo, CriativoButton, InnerWrapper, OutterWrapper } from './styles';
import { useDispatch, connect } from 'react-redux';
import { openAddCriativoModalRequest, openEditCriativoModalRequest } from '../../../../redux/actions/campaignsActions';
import { getCriativos } from '../../../../redux/actions/criativoActions';

const NoDataComponent = ({onClick}) => {
    return (
        <Wrapper>
             <EmptyStateContainer>
                <p>Essa campanha não possui criativos. Clique em <span onClick={onClick}>Adicionar criativo</span> para iniciar.</p>
             </EmptyStateContainer>
        </Wrapper>
    )
}



const Criativos = ({ criativos }) => {

    const dispatch = useDispatch()
    

    const [ selectedCriativo, setSelectedCriativo ] = useState('')

    function handleClickOnAddCriativo() {
        dispatch(openAddCriativoModalRequest())
    }

    function handleClickOnCriativo(id) {
        setSelectedCriativo(id)
        dispatch(openEditCriativoModalRequest(id))
    }

    useEffect(() => {
        dispatch(getCriativos())
    },[])

    console.log(selectedCriativo)

    return (
        <OutterWrapper>
            <FormatWrapper>
                { criativos.length > 0 ? 
                <InnerWrapper>
                    { criativos.map((item,index) => {
                        return (                      
                            <Criativo key={index} onClick={() => handleClickOnCriativo(item._id)} nome={item.nome} imagem={`/criativo/imagem/${item._id}`} descricao={item.descricao}/>                       
                        )
                    })}
                    <CriativoButton onClick={handleClickOnAddCriativo}/>
                </InnerWrapper>
                :  <NoDataComponent onClick={handleClickOnAddCriativo}/>
                }
            </FormatWrapper>
        </OutterWrapper>
    )
}

function mapStateToProps(state) {
    const { criativos } = state.criativos
    return { criativos }
  }

const connectedStore = connect(mapStateToProps)(Criativos)

export { connectedStore as Criativos }