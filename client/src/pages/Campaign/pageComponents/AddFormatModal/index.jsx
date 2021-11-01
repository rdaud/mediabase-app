import React, { useState } from 'react';
import { Modal } from '../../../../components'
import DataTable from 'react-data-table-component';
import { closeAddFormatModalRequest } from "../../../../redux/actions/campaignsActions";
import { useDispatch, useSelector } from 'react-redux';
import { TableWrapper } from './styles';


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




export const AddFormatModal = () => {

    const [ data, setData ] = useState([])
    const dispatch = useDispatch()
    const [ isLoaded, setIsLoaded ] = useState(false)
    const { formatos } = useSelector( state => state.formatos )


    const handleClickOnCloseButton = () => {
        dispatch(closeAddFormatModalRequest())
    };


    return (
        <Modal headerTitle="Adicionar Formato" handleClickOnCloseButton={handleClickOnCloseButton}>

        <TableWrapper>
                <DataTable
                columns={columns}
                data={formatos}
                theme="dark"
                highlightOnHover="true"
                selectableRows
                fixedHeader
                />
        </TableWrapper>

        </Modal>
    )
}

