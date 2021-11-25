import React, { useState, useMemo } from 'react';
import { Modal, Select, Search, ThemeButton, Info2 } from '../../../../components'
import DataTable from 'react-data-table-component';
import { closeAddFormatModalRequest, updateCampaign } from "../../../../redux/actions/campaignsActions";
import { useDispatch, useSelector } from 'react-redux';
import plus from '../../../../assets/icons/plus.svg'
import { TableWrapper, ActionsWrapper, ButtonWrapper, customStyles } from './styles';
import styled from 'styled-components';
import { COLOR } from '../../../../tokens/colors';
import { useEffect } from 'react';


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


    const [ data, setData ] = useState([])
    const [ veiculo, setVeiculo ] = useState('')
    const [ meio, setMeio ] = useState('')
    const [ filterText, setFilterText ] = useState(null);
    const dispatch = useDispatch()
    const [ hasSelectedRows, setHasSelectedRows ] = useState(false)
    const { formatos } = useSelector( state => state.formatos )
    const [ count, setCount ] = useState(null)


    
    const filteredArrayOfVeiculo = () => {
        let arr = []
        if ( formatos !== undefined ) {
            formatos.forEach( item => arr.push(item.Veículo))
        }
        return [ ...new Set(arr) ]
    }


    const filteredArrayOfMeio = () => {
        let arr = []
        if ( formatos !== undefined ) {
            formatos.forEach( item => arr.push(item.Meio))
        }
        return [ ...new Set(arr) ]
    }



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
                name: 'Meio',
                selector: row => row.Meio,
                sortable: true,
        
            },
        ],
        []
      )

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
                background: `${COLOR.gray70}`,
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
                    <ThemeButton iconLeft={plus} corDaOrelha={COLOR.gray70} onClick={handleSubmit}>Adicionar</ThemeButton>
                </div>
    
            </div>
        )
    }

    useEffect(() => { console.log(formatos)},[])

    const subHeaderComponentMemo = React.useMemo(() => {

        return (
            <ActionsWrapper>  
                <ButtonWrapper>
                    <Select
                        prompt="Veiculo"
                        value={veiculo}
                        options={filteredArrayOfVeiculo()}
                        onChange={val => setVeiculo(val)}
                        lighter
                    />
                </ButtonWrapper>
                <ButtonWrapper>
                    <Select 
                        prompt="Meio"
                        value={meio}
                        options={filteredArrayOfMeio()}
                        onChange={val => setMeio(val)}
                        lighter
                    />
                </ButtonWrapper>
                <ButtonWrapper>
                    <Search
                        lighter
                        onChange={e => setFilterText(e.target.value)}
                        filterText={filterText}
                    />
                </ButtonWrapper>
            </ActionsWrapper>  
        );

	}, [meio,veiculo]);

    const filteredItems = formatos.map((item,index) => {
        return { id: item.id , ...item.fields}
    });


    return (
        <Modal headerTitle="Adicionar formatos" handleClickOnCloseButton={handleClickOnCloseButton}>
           { hasSelectedRows && <SelectedsBar count={count} /> }          
            <TableWrapper>
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
            </TableWrapper>
        </Modal>
    )
}

