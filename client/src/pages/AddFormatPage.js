import React, { useEffect, useState } from 'react';
import styled from 'styled-components'
import axios from "axios";
import Modal from '../components/Modal'
import DataTable from 'react-data-table-component';

const TableWrapper = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
`

const columns = [
    {
        name: 'Formato',
        selector: row => row.NomeDoFormato,
    },
    {
        name: 'Veículo',
        selector: row => row.Veículo,
    },
    {
        name: 'Mídia',
        selector: row => row.Meio,
    },
    {
        name: 'Formato do Arquivo',
        selector: row => row.FormatoDoArquivo,
    },
    {
        name: 'Tamanho',
        selector: row => row.Tamanho,
    },
];


const dataTeste = [
    {
        id: 1,
        NomeDoFormato: 
         `Teste <br> teste`,
        Veículo: 'Teste',
    }
]




const AddFormatPage = () => {

    const [ data, setData ] = useState([])

    useEffect(() => {
      
      axios.get('/formats',{
        'Content-Type': 'application/json',
      }).then(response => {

            let arr = []
            response.data.forEach((element,index) => {
            const rowData = element.fields
            arr.push({id:index,...rowData})
            });

            console.log(arr)
            setData(arr)

      }).catch( e => console.log(e))



    },[])


    return (
        <Modal headerTitle="Adicionar Formato">

        <TableWrapper>
                <DataTable
                columns={columns}
                data={data}
                theme="dark"
                highlightOnHover="true"
                selectableRows
                fixedHeader
                />
        </TableWrapper>

        </Modal>
    )
}



export default AddFormatPage