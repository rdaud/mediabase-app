import React, { useEffect, useState } from 'react';
import {  useDispatch, useSelector } from 'react-redux';
import { getFormatos } from '../../redux/actions/formatsActions';
import { getCampaignById } from '../../redux/actions/campaignsActions';
import  { MainContainer } from '../../components';
import  { PageHeader, ContentPlate, AddFormatModal, AddCriativoModal, EditCriativoModal }  from './pageComponents';


export const CampaignPage = (props) => {

    // State selectors
    const { addFormatModal, addCriativoModal } = useSelector( state => state.campaigns )
    const { editCriativoModal, selected } = useSelector( state => state.criativos )
    const { token } = useSelector(state => state.authentication)

    const dispatch = useDispatch();
    const [ loadFormatos, setLoadFormatos] = useState(false)

    useEffect(() => {
        dispatch(getCampaignById(props.match.params.id,token))
    },[])

    useEffect( () => {
        dispatch(getFormatos())
    },[loadFormatos])

    return (
        <>
            { addFormatModal && <AddFormatModal id={props.match.params.id}/> }
            { addCriativoModal && <AddCriativoModal /> }
            { editCriativoModal && <EditCriativoModal criativo={selected}/> }
            <MainContainer>
                <PageHeader id={props.match.params.id}/>
                <ContentPlate/>
            </MainContainer>
        </>
    )
}

