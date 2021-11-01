import React, {useEffect} from 'react';
import DataTable from 'react-data-table-component';
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { Wrapper, customStyles } from './styles';
import moment from 'moment';
import { getCampaigns } from '../../../../redux/actions/campaignsActions';



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
    const { token } = useSelector(state => state.authentication)
    const { campaigns } = useSelector(state => state.campaigns)
    const dispatch = useDispatch()


    const handleRowClick = ({ _id }) => {
        const url = `/home/campanha/${_id}`
        history.push(url)
    }

    useEffect(() => { 
      dispatch(getCampaigns(token))
    },[dispatch])

    const allowed = ['_id','nome','cliente','status','produto','dataDeVeiculacaoInicio', 'dataDeVeiculacaoFim']

    const filteredData = [...campaigns].map((item,index) => { 
      const filtered = Object.keys(item)
      .filter(key => allowed.includes(key))
      .reduce((obj, key) => {
        obj[key] = item[key];
        return obj;
      }, {});

      return filtered
    })

    return (
        <Wrapper>
            <DataTable
                columns={columns}
                data={filteredData}
                theme="dark"
                fixedHeader
                highlightOnHover="true"
                onRowClicked={handleRowClick}
                customStyles={customStyles}
            />
        </Wrapper>
    )
}


