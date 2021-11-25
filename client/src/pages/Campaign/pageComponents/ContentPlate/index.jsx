import React, { useState } from 'react';
import { Wrapper, Body } from './styles';
import {  TabBar, Tab } from '../../../../components';
import { Formatos, Criativos } from '../';

export const ContentPlate = () => {

    const [ isFormatosSelected, setIsFormatosSelected ] = useState(true)

    return (
        <Wrapper>
            <TabBar style={{flexGrow: 0}}>
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
            <Body>                      
                { isFormatosSelected ?
                <Formatos /> : <Criativos />}
            </Body>
        </Wrapper>
    )
}