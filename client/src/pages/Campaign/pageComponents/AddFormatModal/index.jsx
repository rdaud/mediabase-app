import React, { useState } from 'react';
import { Modal, Button, Info2 } from '../../../../components'
import { closeAddFormatModalRequest, updateCampaign } from "../../../../redux/actions/campaignsActions";
import { useDispatch, useSelector } from 'react-redux';
import plus from '../../../../assets/icons/plus.svg'
import {  ActionsWrapper, ButtonWrapper } from './styles';
import styled from 'styled-components';
import { COLOR } from '../../../../tokens/colors';
import { useEffect } from 'react';
import { AddFormatsTable } from './pageComponents';




export const AddFormatModal = () => {


    const [ data, setData ] = useState([])
    const dispatch = useDispatch()
    const [ hasSelectedRows, setHasSelectedRows ] = useState(false)
    const { formatos } = useSelector( state => state.formatos )
    const [ count, setCount ] = useState(null)

    const handleClickOnCloseButton = () => {
        dispatch(closeAddFormatModalRequest())
    };

    const handleSelectedRows = ({ selectedRows }) => {
        if (selectedRows.length > 0) {
            setHasSelectedRows(true)
            setCount(selectedRows.length)
            setData(selectedRows)
        } else {
            setHasSelectedRows(false)
        }
        console.log(data)

    }


   

   

    const filteredItems = formatos.map((item,index) => {
        return { id: item.id , ...item.fields}
    });


    return (
        <Modal headerTitle="Adicionar formatos" handleClickOnCloseButton={handleClickOnCloseButton}>
            <AddFormatsTable data={filteredItems} />
            {/* <TableWrapper>
                <DataTable
                columns={columns}
                data={filteredItems}
                theme="dark"
                highlightOnHover="true"
                selectableRowsHighlight="true"
                subHeader
                subHeaderComponent={subHeaderComponentMemo}
                selectableRows
                onSelectedRowsChange={handleSelectedRows}
                fixedHeader
                customStyles={customStyles}
                />
            </TableWrapper> */}
        </Modal>
    )
}

