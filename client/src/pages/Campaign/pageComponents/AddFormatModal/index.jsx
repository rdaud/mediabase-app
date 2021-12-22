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


    const handleSubmit = () => {

        const obj = {
            formatos: data
        }
        dispatch(updateCampaign(obj))
    }

    const SelectedsBar = ({count}) => {
        return (
            <div style={{
                height: "72px",
                width: "100%",
                position: "absolute",
                bottom: 0,
                background: `${COLOR.gray90}`,
                display: "inline-flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "0 2rem",
                zIndex: 999
            }}>
                <div>
                <Info2 color={COLOR.white}>{count} formato(s) selecionado(s)</Info2>
                </div>
                <div>
                    <Button variation="primary" iconLeft={plus} corDaOrelha={COLOR.gray90} onClick={handleSubmit}>Adicionar</Button>
                </div>
    
            </div>
        )
    }


   

    const filteredItems = formatos.map((item,index) => {
        return { id: item.id , ...item.fields}
    });

    console.log(filteredItems)

    return (
        <Modal headerTitle="Adicionar formatos" handleClickOnCloseButton={handleClickOnCloseButton}>
           { hasSelectedRows && <SelectedsBar count={count} /> }   
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

