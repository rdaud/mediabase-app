import React, { useState } from 'react';
import styled from 'styled-components'
import { connect } from 'react-redux'
import DataTable from 'react-data-table-component';




const Hero = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
`

const columns = [
    {
        name: 'Nome',
        selector: row => row.Nome,
    },
    {
        name: 'Cliente',
        selector: row => row.Cliente,
    },
    {
        name: 'Produto',
        selector: row => row.Produto,
    },
    {
        name: 'Status',
        selector: row => row.Status,
    },
    {
        name: 'Data de veiculação',
        selector: row => `${row.Veiculacao.inicio} - ${row.Veiculacao.fim}`,
    },
];

const data = [
    {
        id: 1,
        Nome: 'Next Joy',
        Cliente: 'Bradesco',
        Produto: 'Next',
        Status: 'Em planejamento',
        Veiculacao: {
            inicio: '01/08/2021',
            fim: '01/09/2021'
        }
    },
    {
        id: 2,
        Nome: 'Next Joy',
        Cliente: 'Bradesco',
        Produto: 'Next',
        Status: 'Em planejamento',
        Veiculacao: {
            inicio: '01/08/2021',
            fim: '01/09/2021'
        }
    },
    {
        id: 3,
        Nome: 'Next Joy',
        Cliente: 'Bradesco',
        Produto: 'Next',
        Status: 'Em planejamento',
        Veiculacao: {
            inicio: '01/08/2021',
            fim: '01/09/2021'
        }
    },
    {
        id: 4,
        Nome: 'Next Joy',
        Cliente: 'Bradesco',
        Produto: 'Next',
        Status: 'Em planejamento',
        Veiculacao: {
            inicio: '01/08/2021',
            fim: '01/09/2021'
        }
    },
  
]

const mapStateToProps = (state) => {
    return {
        campaigns: state.campaigns
    }
}

function Table(props) {


    const [data,setData] = useState([])



    return (
        <Hero>
            <DataTable
                columns={columns}
                data={data}
                theme="dark"
                highlightOnHover="true"
                expandableRows="true"          
            />
        </Hero>
    )
}

export default connect(mapStateToProps)(Table)

