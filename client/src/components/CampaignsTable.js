import React, { useEffect } from 'react';
import styled from 'styled-components'
import { connect } from 'react-redux'
import DataTable from 'react-data-table-component';
import { useSelector } from "react-redux";





const Hero = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
`

const columns = [
    {
        name: 'Nome',
        selector: row => row.nome,
    },
    {
        name: 'Cliente',
        selector: row => row.cliente,
    },
    {
        name: 'Produto',
        selector: row => row.produto,
    },
    {
        name: 'Status',
        selector: row => row.status,
    },
    {
        name: 'Data de veiculação',
        selector: row => `${row.dataDeVeiculacaoInicio} - ${row.dataDeVeiculacaoFim}`,
    },
];





function CampaignsTable(props) {

    console.log(props.data)
    return (
        <Hero>
            <DataTable
                columns={columns}
                data={props.data}
                theme="dark"
                highlightOnHover="true"
                expandableRows="true"          
            />
        </Hero>
    )
}


export default CampaignsTable