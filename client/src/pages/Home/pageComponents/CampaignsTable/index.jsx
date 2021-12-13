import React, { useState, useEffect} from 'react';
import DataTable from 'react-data-table-component';
import { useHistory } from "react-router-dom";
import { Search, Select } from '../../../../components';
import { useSelector } from 'react-redux';
import { Wrapper, ActionsWrapper, ButtonWrapper, customStyles } from './styles';
import moment from 'moment';
import styled from 'styled-components';



const columns = [
    {
        name: 'Nome',
        selector: row => row.nome,
        omit: false,
        sortable: true,
    },
    {
        name: 'Cliente',
        selector: row => row.cliente,
        sortable: true,
    },
    {
        name: 'Produto',
        selector: row => row.produto,
        sortable: true,
    },
    {
        name: 'Status',
        selector: row => row.status,
        sortable: true,
    },
    {
        name: 'Data de veiculação',
        selector: row => `${moment(row.dataDeVeiculacaoInicio).format('DD/MM/YYYY')} até ${moment(row.dataDeVeiculacaoFim).format('DD/MM/YYYY')}`,
    },
];

const TextField = styled.input`
	height: 32px;
	width: 200px;
	border-radius: 3px;
	border-top-left-radius: 5px;
	border-bottom-left-radius: 5px;
	border-top-right-radius: 0;
	border-bottom-right-radius: 0;
	border: 1px solid #e5e5e5;
	padding: 0 32px 0 16px;

	&:hover {
		cursor: pointer;
	}
`;

const ClearButton = styled.button`
	border-top-left-radius: 0;
	border-bottom-left-radius: 0;
	border-top-right-radius: 5px;
	border-bottom-right-radius: 5px;
	height: 34px;
	width: 32px;
	text-align: center;
	display: flex;
	align-items: center;
	justify-content: center;
`;



export const CampaignsTable = (props) => {

    const history = useHistory();
    const { campaigns } = useSelector(state => state.campaigns)
    const [  filterText, setFilterText ] = useState('');
	const [ resetPaginationToggle, setResetPaginationToggle ] = useState(false);
    const [ cliente, setCliente ] = useState('')
    const [ produtos, setProduto ] = useState('')
    const [ status, setStatus ] = useState('')
    const [ pending, setPending ] = useState(false)



    const handleRowClick = ({ _id }) => {
        const url = `/campanha/${_id}`
        history.push(url)
    }

    // useEffect(() => {
    //     setTimeout(() => setPending(false), 2000)
    // },[])
 
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



    const filteredArrayOfClientes = () => {
      let arr = []
      campaigns.forEach( item => arr.push(item.cliente))
      return [ ...new Set(arr)]
    }

    const filteredArrayOfProdutos = () => {
      let arr = []
      campaigns.forEach( item => arr.push(item.produto))
      return [ ...new Set(arr)]
    }

    const filteredArrayOfStatus= () => {
      let arr = []
      campaigns.forEach( item => arr.push(item.status))
      return [ ...new Set(arr)]
    }
	
    const filteredItems = filteredData.filter(
		item => {
            return item.cliente && item.cliente.toLowerCase().includes(filterText.toLowerCase())      
        }
	);


   
   
 
    const subHeaderComponentMemo = React.useMemo(() => {

        return (

        <ActionsWrapper>
                    <Select
                        prompt="Cliente"
                        value={cliente}
                        options={filteredArrayOfClientes()}
                        onChange={val => {
                            setCliente(val)
                        }}
                    />
                <ButtonWrapper>
                    <Select
                        prompt="Produto"
                        value={produtos}
                        options={filteredArrayOfProdutos()}
                        onChange={val => setProduto(val)}
                    />
                </ButtonWrapper>
                <ButtonWrapper>
                    <Select
                        prompt="Status"
                        value={status}
                        options={filteredArrayOfStatus()}
                        onChange={val => setStatus(val)}
                    />
                </ButtonWrapper>
                <ButtonWrapper>
                    <Search style={{
                    }} onChange={e => setFilterText(e.target.value)} filterText={filterText} />
                </ButtonWrapper>
        </ActionsWrapper>
            
        );
	}, [status,cliente,produtos,filterText, resetPaginationToggle]);

    return (
        <Wrapper>
            <DataTable
                columns={columns}
                data={filteredItems}
                theme="dark"
                fixedHeader
                subHeader
                subHeaderComponent={subHeaderComponentMemo}
                highlightOnHover="true"
                onRowClicked={handleRowClick}
                customStyles={customStyles}
                progressPending={pending}
            />
        </Wrapper>
    )
}


