import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import DataTable from 'react-data-table-component'


import
{   Wrapper,
    ActionsWrapper,
    ExpandableRowsComponent,
    EmptyStateContainer,
    AdicionarCriativo,
    ButtonWrapper,
    customStyles
 } from './styles'
import plus from '../../../../assets/icons/plus.svg'
import { Button, Search, Select } from '../../../../components'
import { AddFormatModal } from '..'
import { COLOR } from '../../../../tokens/colors'





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
    )
}

const StatusBar = () => {

    return (
        <div style={{
                background: `${COLOR.gray90}`,
                borderRadius: '20px',
                width: '120px',
                height: '8px'
            }}>  
        </div>
    )
}

const NoDataComponent = ({ handleClickOnAddFormato }) => {
    return (
        <Wrapper>
             <EmptyStateContainer>
                <p>Essa campanha ainda não possuí nenhum formato. Clique em <span onClick={handleClickOnAddFormato}>Adicionar formatos</span> para iniciar.</p>
             </EmptyStateContainer>
        </Wrapper>
    )
}

export const Formatos = () => {

    const dispatch = useDispatch();
    const { formatos, _id } = useSelector( state => state.campaigns.currentPageCampaign )

    const [  filterText, setFilterText ] = useState('');
    const [ meio, setMeio ] = useState('')
    const [ open, setOpen ] = useState(false)


    const handleClickOnAddFormato = () => {
        setOpen(true)
    }

    const handleClickOnCloseButton = () => {
        setOpen(false)
    }
    
    const filteredArrayOfMeio = () => {
        let arr = []
        if ( formatos !== undefined ) {
            formatos.forEach( item => arr.push(item.Meio))
        }
        return [ ...new Set(arr) ]
    }

    const handleRowClick = () => {
      
    }

    const columns = React.useMemo(
        () => [
            {
                name: 'Formato',
                selector: row => row.NomeDoFormato,
                minWidth: '200px',
                cell: row => {
                    return (
                        <div style={{
                            display: 'inline-flex',
                            flexBasis: 'fit-content',
                            alignItems: 'center',
                            gap: '.5rem'
                            }}>
                            {row.NomeDoFormato}
                            <AdicionarCriativo />
                        </div>
                    )
                },
                sortable: true,
                reorder: true,  
            },
            {
                name: 'Veículo',
                selector: row => row.Veículo,
                minWidth: '100px',
                sortable: true,

            },
          
            {
                name: 'Meio',
                selector: row => row.Meio,
                minWidth: '100px',
                sortable: true,


            },
            {
                name: 'Specs / Arquivo',
                minWidth: '200px',
                selector: row => row.NomeDoFormato,
                selector: row => row.Veículo,
                cell: row => <CustomCell row={row} />,
                sortable: true,
            },
            {
                name: 'Veiculação',
                minWidth: '200px',

                selector: row => row.Veiculacao,
                sortable: true,
            },
            {
                name: 'Prazo',
                minWidth: '200px',

                selector: row => row.Prazo,
                sortable: true,
        
            },
            {
                name: 'Status',
                minWidth: '200px',
                selector: row => row.Status,
                sortable: true,
                cell: () => <StatusBar />
        
            },
        ],
        []
      )

    

      const allowed = ['Veículo','Meio','NomeDoFormato','Tamanho','FormatoDoArquivo']

      const subHeaderComponentMemo = React.useMemo(() => {

        return (
        <>
        { open && <AddFormatModal id={ _id } handleClickOnCloseButton={ handleClickOnCloseButton } /> }
        <ActionsWrapper>
                <ButtonWrapper>
                    <Select
                        variation="outline"
                        colorMode="dark"
                        prompt="Meio"
                        value={meio}
                        options={filteredArrayOfMeio()}
                        onChange={val => setMeio(val)}
                        lighter
                    />
                </ButtonWrapper>
                <ButtonWrapper>
                    <Search variation="outline" colorMode="dark" onChange={e => setFilterText(e.target.value)} filterText={filterText} />
                </ButtonWrapper>
                <ButtonWrapper>           
                    <Button
                        variation="primary"
                        cor={COLOR.brandRed90}
                        corDaOrelha={COLOR.gray100}
                        iconLeft={plus}
                        onClick={handleClickOnAddFormato}>
                    Adicionar formato
                    </Button>
                </ButtonWrapper>
        </ActionsWrapper>
        </>
        );
	}, [meio, filterText]);

    return (
        <>
        { open && <AddFormatModal handleClickOnCloseButton={handleClickOnCloseButton}/>}
        <DataTable
            columns={columns}
            data={formatos}
            theme="dark"
            fixedHeader
            subHeader
            subHeaderComponent={subHeaderComponentMemo}
            highlightOnHover="true"
            onRowClicked={handleRowClick}
            expandOnRowClicked="true"
            expandableRows
            expandableRowsComponent={ () => <ExpandableRowsComponent /> }
            selectableRows
            customStyles={customStyles}
            noDataComponent={ <NoDataComponent handleClickOnAddFormato={handleClickOnAddFormato}/> }
        />
 
        </>
    )
}