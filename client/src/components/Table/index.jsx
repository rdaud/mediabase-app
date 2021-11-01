import React from 'react';
import DataTable from 'react-data-table-component';
import { useHistory } from "react-router-dom";
import { Hero, customStyles } from './styles';
import moment from 'moment';

console.log(moment().format('DD/MM/YYYY'))

const columns = [
    {
        name: 'Nome',
        selector: row => row.nome,
        omit: true
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
        selector: row => `${moment(row.dataDeVeiculacaoInicio).format('DD/MM/YYYY')} até ${moment(row.dataDeVeiculacaoFim).format('DD/MM/YYYY')}`,
    },
];



export const CampaignsTable = (props) => {

    const history = useHistory();

    const handleRowClick = ({ _id }) => {
        const url = `/home/campanha/${_id}`
        history.push(url)
    }

    return (
        <Hero>
            <DataTable
                columns={columns}
                data={props.data}
                theme="dark"
                fixedHeader
                highlightOnHover="true"
                onRowClicked={handleRowClick}
                customStyles={customStyles}
            />
        </Hero>
    )
}


