import React, { useEffect, useState } from 'react';
import { Navbar, MainContainer, Search, RegularButton } from '../../components';
import { useDispatch, useSelector } from 'react-redux';
import { getFormatos } from '../../redux/actions/formatsActions';
import { AddCampaignModal, CampaignsTable, PageHeader } from './pageComponents';
import { Hero, ActionsWrapper, ButtonWrapper } from './styles';
import chevron from '../../assets/icons/chevron-down.svg'



export const HomePage = () => {

    const { addCampaignModal,  loading } = useSelector(state => state.campaigns)
    const [ isPageLoaded , setIsPageLoaded ] = useState(false)

    const dispatch = useDispatch()

    useEffect(() => { 
      if (!isPageLoaded) {
        dispatch(getFormatos())
        setIsPageLoaded(true)
      }
    },[isPageLoaded])


    return (
      <Hero>
        { addCampaignModal && <AddCampaignModal loading={loading}/> }
        <Navbar />
        <MainContainer>
            <PageHeader />
            <ActionsWrapper>
            <ButtonWrapper>
                <RegularButton iconRight={chevron}>Clientes</RegularButton>
              </ButtonWrapper>
              <ButtonWrapper>
                <RegularButton iconRight={chevron}>Produtos</RegularButton>
              </ButtonWrapper>
              <ButtonWrapper>
                <RegularButton iconRight={chevron}>Status</RegularButton>
              </ButtonWrapper>
              <ButtonWrapper>
                <Search />
              </ButtonWrapper>
            </ActionsWrapper>
            <CampaignsTable />
        </MainContainer>
      </Hero>
    );

}
