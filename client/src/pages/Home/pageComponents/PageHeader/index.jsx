import React from 'react';
import { ThemeButton } from "../../../../components";
import { useDispatch } from "react-redux";
import { openAddCampaignModalRequest } from '../../../../redux/actions/campaignsActions';
import { Wrapper } from './styles';
import { Heading1 } from '../../../../components/Typography';
import plus from '../../../../assets/icons/plus.svg';


export const PageHeader = (props) => {

    const dispatch = useDispatch()

    const handleCreateCampaignClick = () => {
        dispatch(openAddCampaignModalRequest())
    }
   
    return (
        <Wrapper>
            <Heading1>Campanhas</Heading1>
            <ThemeButton onClick={handleCreateCampaignClick} iconLeft={plus}>Adicionar campanha</ThemeButton>
        </Wrapper>
    )
}
