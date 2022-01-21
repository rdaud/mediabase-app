import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import DataTable from 'react-data-table-component'

import {   
    Wrapper,
    EmptyStateContainer
} from './styles'

import { CampaignsTable } from '..'
import { COLOR } from '../../../../tokens/colors'

const space = " | "

const Tag = styled.small`
    background: #FBD6CF;
    color: ${COLOR.brandRed100};
    padding: 0 .2rem;
    font-size: 10px;
`



export const Formatos = () => {

    const { formatos, _id } = useSelector( state => state.campaigns.currentPageCampaign )

    return (
        <>
            <CampaignsTable
                data={formatos}
                
            />
        </>
    )
}