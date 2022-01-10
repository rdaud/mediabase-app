import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Modal } from '../../../../components'
import { AddFormatsTable } from './pageComponents'




export const AddFormatModal = ({ handleClickOnCloseButton }) => {


    const [ data, setData ] = useState([])
    const dispatch = useDispatch()
    const [ hasSelectedRows, setHasSelectedRows ] = useState(false)
    const { formatos } = useSelector( state => state.formatos )
    const [ count, setCount ] = useState(null)

 

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
        <Modal headerTitle="Adicionar formatos" handleClickOnCloseButton={ handleClickOnCloseButton }>
            <AddFormatsTable data={filteredItems} />
        </Modal>
    )
}

