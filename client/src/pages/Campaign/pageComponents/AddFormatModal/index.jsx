import React, { useState, useMemo } from 'react';
import { Modal, Select, Search, ThemeButton, Info2 } from '../../../../components'
import DataTable from 'react-data-table-component';
import { closeAddFormatModalRequest, updateCampaign } from "../../../../redux/actions/campaignsActions";
import { useDispatch, useSelector } from 'react-redux';
import plus from '../../../../assets/icons/plus.svg'
import { TableWrapper, ActionsWrapper, ButtonWrapper, customStyles } from './styles';
import styled from 'styled-components';
import { COLOR } from '../../../../tokens/colors';


const space = " | "

const Tag = styled.small`
    background: #FBD6CF;
    color: ${COLOR.brandRed100};
    padding: 0 .2rem;
    font-size: 10px;
`

const CustomCell = ({row}) => {

    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
        }}>
        <p>
            {row.NomeDoFormato}
        </p>
        <div style={{
            display: "inline-flex",
            height: "18px",
            alignItems: "center"
        }}>
        <Tag>
        {row.Tamanho}
        </Tag> <small style={{fontSize: "10px"}}> &nbsp; | &nbsp; {
        row.FormatoDoArquivo !== undefined && row.FormatoDoArquivo.join(', ') 
        }</small>
        </div>
        </div>
    )
}








export const AddFormatModal = () => {

    const columns = React.useMemo(
        () => [
            {
                name: 'Formato',
                selector: row => row.NomeDoFormato,
                selector: row => row.Veículo,
                maxWidth: '600px',
                wrap: false,
                cell: row => <CustomCell row={row} />,
            },
            {
                name: 'Veículo',
                selector: row => row.Veículo,
                sortable: true,
            },
            {
                name: 'Mídia',
                selector: row => row.Meio,
                sortable: true,
        
            },
        ],
        []
      )

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
                background: `${COLOR.gray100}`,
                display: "inline-flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "0 1rem",
                zIndex: 999
            }}>
                <div>
                <Info2 color={COLOR.white}>{count} formatos selecionados. </Info2>
                </div>
                <div>
                    <ThemeButton iconLeft={plus} corDaOrelha={COLOR.gray100} onClick={handleSubmit}>Adicionar formato</ThemeButton>
                </div>
    
            </div>
        )
    }
    


    return (
        <Modal headerTitle="Adicionar formatos" handleClickOnCloseButton={handleClickOnCloseButton}>
           { hasSelectedRows && <SelectedsBar count={count} /> }          
            <ActionsWrapper>  
                <ButtonWrapper>
                <Select small placeholder="Formato" options={['Status']} />
                </ButtonWrapper>
                <ButtonWrapper>
                <Select small placeholder="Mídia" options={['Status']} />
                </ButtonWrapper>
                <ButtonWrapper>
                <Select small placeholder="Formato do arquivo" options={['Status']} />
                </ButtonWrapper>
                <ButtonWrapper>
                <Search small/>
                </ButtonWrapper>
            </ActionsWrapper>
            <TableWrapper>
                <DataTable
                columns={columns}
                data={formatos}
                theme="dark"
                highlightOnHover="true"
                selectableRows
                onSelectedRowsChange={handleSelectedRows}
                fixedHeader
                customStyles={customStyles}
                />
            </TableWrapper>
        

        </Modal>
    )
}

