import React, { useState } from 'react';
import { CampaignsSectionWrapper, CampaignSectionHeader, CampaignSectionBody } from './styles';
import { ThemeButton, TabBar, Tab } from '../../../../components';
import { Formatos, Criativos } from '../';
import { COLOR } from '../../../../tokens/colors';

export const ContentPlate = ({ hasFormatos }) => {

    const [ isFormatosSelected, setIsFormatosSelected ] = useState(true)

    return (
        <CampaignsSectionWrapper>
            <TabBar>
                <Tab onClick={() => setIsFormatosSelected(true)}
                     isFormatosSelected={isFormatosSelected}
                     tabShow={isFormatosSelected ? 'block' : 'none'}>
                     Formatos
                </Tab>
                <Tab onClick={() => setIsFormatosSelected(false)}
                     isFormatosSelected={isFormatosSelected}
                     tabShow={isFormatosSelected ? 'none' : 'block'}>
                     Criativos
                </Tab>
            </TabBar>            
            <CampaignSectionBody>                      
                { isFormatosSelected ?
                <Formatos /> : <Criativos />}
            </CampaignSectionBody>
        </CampaignsSectionWrapper>
    )
}