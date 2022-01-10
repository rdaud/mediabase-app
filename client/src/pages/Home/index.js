import React, { useEffect, useState } from 'react';
import { Navbar, MainContainer } from '../../components';
import { useDispatch, useSelector } from 'react-redux';
import { getFormatos } from '../../redux/actions/formatsActions';
import { openAddCampaignModalRequest, getCampaigns } from '../../redux/actions/campaignsActions';
import { AddCampaignModal, CampaignsTable, PageHeader } from './pageComponents';
import { Hero, EmptyStateContainer, EmptyStateWrapper } from './styles';



export const HomePage = () => {

    const { addCampaignModal,  loading, campaigns } = useSelector(state => state.campaigns)
    const { token } = useSelector(state => state.authentication)
    const [ isPageLoaded , setIsPageLoaded ] = useState(false)
    const dispatch = useDispatch()


    const handleClick = () => {
      dispatch(openAddCampaignModalRequest())
    }

    console.log(token)

    useEffect(() => { 
      dispatch(getCampaigns(token))
    },[])


    useEffect(() => { 
      if (!isPageLoaded) {
        dispatch(getFormatos())
        setIsPageLoaded(true)
      }
    },[isPageLoaded])

   


    return (
      <>
        { addCampaignModal && <AddCampaignModal loading={loading}/> }
        <MainContainer>
            <PageHeader />     
            { campaigns !== undefined && campaigns.length > 0 ? <CampaignsTable /> :
            <EmptyStateWrapper>
              <EmptyStateContainer>
                    <p>Você ainda não possui campanha adicionada. Clique em <span onClick={handleClick}>Adicionar campanha</span> para iniciar.</p>
              </EmptyStateContainer>
            </EmptyStateWrapper> }          
        </MainContainer>
      </>
    );

}
