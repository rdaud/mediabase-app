import React,{ useEffect, useState } from 'react'
import { useDispatch, useSelector,connect } from 'react-redux'

import 
{   FormatWrapper,
    Wrapper,
    EmptyStateContainer,
    Criativo,
    CriativoButton,
    InnerWrapper,
    OutterWrapper
} from './styles';
import { getCriativos } from '../../../../redux/actions/criativoActions'
import { AddCriativoModal, EditCriativoModal } from '..'

const NoDataComponent = ({onClick}) => {
    return (
        <Wrapper>
             <EmptyStateContainer>
                <p>Essa campanha não possui criativos. Clique em <span onClick={onClick}>Adicionar criativo</span> para iniciar.</p>
             </EmptyStateContainer>
        </Wrapper>
    )
}



const Criativos = ({ criativos, loading }) => {

    const dispatch = useDispatch()
    const [ selectedCriativo, setSelectedCriativo ] = useState('')
    const { editCriativoModal, selected } = useSelector( state => state.criativos )



    // Manage modal open state
    const [ openAddCriativo, setOpenAddCriativo ] = useState(false)
    const [ openEditCriativo, setEditCriativo ] = useState(false)


    const handleClickOnAddCriativo = () => {
        setOpenAddCriativo(true)
    }

    const handleClickOnCloseButton = () => {
        setOpenAddCriativo(false)
        setEditCriativo(false)
    }

    const handleClickOnCriativo = (id) => {
        setSelectedCriativo(id)
        setEditCriativo(true)
    }

    useEffect(() => {
        dispatch(getCriativos())
    },[])
    
   
console.log(selectedCriativo)
    return (   
        <OutterWrapper>
            { openAddCriativo && <AddCriativoModal handleClickOnCloseButton={ handleClickOnCloseButton } /> }
            { openEditCriativo && <EditCriativoModal criativo={ selectedCriativo } handleClickOnCloseButton={ handleClickOnCloseButton } /> }
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
    const { criativos, loading } = state.criativos
    return { criativos, loading }
  }

const connectedStore = connect(mapStateToProps)(Criativos)

export { connectedStore as Criativos }