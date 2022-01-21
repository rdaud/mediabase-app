import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import {  MainContainer } from '../../components'
import { getFormatos } from '../../redux/actions/formatsActions'
import {  getCampaigns } from '../../redux/actions/campaignsActions'
import { AddCampaignModal, CampaignsTable, PageHeader } from './pageComponents'
import { EmptyStateContainer, EmptyStateWrapper } from './styles'



export const HomePage = () => {

    const { addCampaignModal,  loading, campaigns } = useSelector(state => state.campaigns)

    // Manage modal open state
    const [ open, setOpen ] = useState(false)
    
    const { token } = useSelector(state => state.authentication)
    const [ isPageLoaded , setIsPageLoaded ] = useState(false)
    const dispatch = useDispatch()

    const handleClick = () => {
      setOpen(true)
    }

    const handleClickOnCloseButton = () => {
      setOpen(false)
    }


    useEffect(() => { 
      dispatch(getCampaigns(token))
    },[])


    useEffect(() => { 
      if (!isPageLoaded) {
        dispatch(getFormatos())
        setIsPageLoaded(true)
      }
    },[ isPageLoaded ])

    return (
      <>
        { open && <AddCampaignModal loading={loading} handleClickOnCloseButton={handleClickOnCloseButton} /> }
        <MainContainer>
            <PageHeader setOpen={ handleClick } />     
            { campaigns !== undefined && campaigns.length > 0 ? <CampaignsTable /> :
            <EmptyStateWrapper>
              <EmptyStateContainer>
                    <p>Você ainda não possui campanha adicionada. Clique em <span onClick={ handleClick }>Adicionar campanha</span> para iniciar.</p>
              </EmptyStateContainer>
            </EmptyStateWrapper> }          
        </MainContainer>
      </>
    );

}
