import React, { useEffect, useState } from 'react';
import {  useDispatch, useSelector } from 'react-redux';
import { getFormatos } from '../../redux/actions/formatsActions';
import { getCampaigns, getCampaignById } from '../../redux/actions/campaignsActions';
import  { Navbar, MainContainer } from '../../components';
import  { PageHeader, ContentPlate, AddFormatModal }  from './pageComponents';
import { Hero } from './styles';
import { get } from 'mongoose';


export const CampaignPage = (props) => {

// State selectors
const { addFormatModal } = useSelector( state => state.campaigns )
const { token } = useSelector(state => state.authentication)
const dispatch = useDispatch();



useEffect(() => {
    dispatch(getCampaignById(props.match.params.id,token))
},[])

useEffect( () => {
   dispatch(getFormatos())
},[dispatch])

    return (
        <div>
            <Hero>
            { addFormatModal && <AddFormatModal /> }
                <Navbar />
                <MainContainer>
                    <PageHeader id={props.match.params.id}/>
                    <ContentPlate/>
                </MainContainer>
            </Hero>
        </div>
    )
}

