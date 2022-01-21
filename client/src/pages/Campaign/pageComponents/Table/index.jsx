import React, { useMemo, useState } from 'react'
import { useTable, useRowSelect, useRowState,useFlexLayout, useExpanded, useFilters, useGlobalFilter, useSortBy } from 'react-table'
import { Styles, Table, Thead, Tr, Tbody, Th, Td, Wrapper, EmptyStateContainer, RowSubComponent, Link} from './styles'
import { COLUMNS } from './columns'
import { DATA } from './data'
import { filterTypes, DefaultColumnFilter, GlobalFilter, SelectColumnFilter } from './filters'
import { Toolbar } from './Toolbar'
import { Toast, Button } from '../../../../components'
import { COLOR } from '../../../../tokens/colors'
import plus from '../../../../assets/icons/plus.svg'
import { AddFormatModal } from '..'


const NoDataComponent = ({ handleClickOnAddFormato }) => {
  return (
      <Wrapper>
           <EmptyStateContainer>
              <p>Essa campanha ainda não possuí nenhum formato. Clique em <span onClick={handleClickOnAddFormato}>Adicionar formatos</span> para iniciar.</p>
           </EmptyStateContainer>
      </Wrapper>
  )
}

const getStyles = (props, align = 'left', toggle) => [
  props,
  {
    style: {
      justifyContent: align === 'right' ? 'flex-end' : 'flex-start',
      alignItems: 'center',
      display: 'flex',
      flexBasis: 'auto',
    },
  },
]


const App = ({ columns: userColumns, data, renderRowSubComponent, stateReducer
}) => {


    const [ selectedSubRows, setSelectedSubRows ] = useState('')

    const defaultColumn = React.useMemo(
        () => ({
            Filter: DefaultColumnFilter,

          // When using the useFlexLayout:
          minWidth: 30, // minWidth is only used as a limit for resizing
          width: 150, // width is used for both the flex-basis and flex-grow
          maxWidth: 200, // maxWidth is only used as a limit for resizing
        }),
        []
      )
  
 

  const tableInstance = useTable({
    columns: userColumns,
    data,
    defaultColumn, // Be sure to pass the defaultColumn option
    filterTypes,
    stateReducer,
    expandSubRows: true,
    getSubRows: React.useCallback((row) => row.criativos || []),
  },
  useFlexLayout,
  useFilters, 
  useGlobalFilter, 
  useSortBy,
  useExpanded,
  useRowSelect,
  useRowState
  )


  const {
    getTableProps,
    getTableBodyProps,
    toggleRowSelected,
    headerGroups,
    rows,
    columns,
    prepareRow,
    visibleColumns,
    selectedFlatRows,
    preGlobalFilteredRows,
    setGlobalFilter,
    getToggleAllRowsSelectedProps,
    state: { globalFilter, filters }
  } = tableInstance

  console.log(rows)

  const [ open, setOpen ] = useState(false)
    
  // Get selected rows data
  const { selectedRowsData: original } = selectedFlatRows
  
  // Count how many subrows are selected
  const subrowsCounter = selectedFlatRows.filter((item) => item.depth === 1 ).length

  // Toggle all selected rows state to false when clicking on cancelar button
  function handleClickOnCancelar() {
    rows.forEach((item) => {
        if (item.isSelected) {
            toggleRowSelected(item.id,false)
        }
    })
  }


  const handleClickOnCloseButton = () => {
    setOpen(false)
  }

  const handleClickOnAddFormato = () => {
      setOpen(true)
  }

  // Render the UI for your table
  return (
      <>
     { !!subrowsCounter && <Toolbar counter={subrowsCounter} handleClickOnCancelar={handleClickOnCancelar} /> } 
     { open && <AddFormatModal handleClickOnCloseButton={handleClickOnCloseButton}/> }
    <div className="tableWrap">
      <div style={{
          display: 'inline-flex',
          gap: '1rem',
          padding: '1rem'
      }}>
          <div>          
              <GlobalFilter
                preGlobalFilteredRows={preGlobalFilteredRows}
                globalFilter={globalFilter}
                setGlobalFilter={setGlobalFilter}
              />
          </div>
          <div style={{ textAlign: 'left' }}> 
              <SelectColumnFilter userColumns={columns[1]} />
          </div>
          <div style={{ textAlign: 'left'}}> 
              <SelectColumnFilter userColumns={columns[2]} />
          </div>
          <div style={{ textAlign: 'right'}}> 
            <Button
              variation="primary"
              cor={COLOR.brandRed90}
              corDaOrelha={COLOR.gray100}
              iconLeft={plus}
              onClick={handleClickOnAddFormato}>
              Adicionar formato
            </Button>
          </div>
      </div>

    <Table className="table tableWrap" {...getTableProps()} >
      
        <Thead>
        {headerGroups.map(headerGroup => (
            <Tr className="tr" {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => {
                return (
                <Th className={ column.id === 'expander' ? "th align-right" : "th"} {...column.getHeaderProps({
                    ...column.getSortByToggleProps(),
                        style: {
                            display: 'inline-flex',
                            alignItems: 'center',                            
                        }
                    
                    })} >{column.render('Header')}
                {/* Add a sort direction indicator */}
                <span style={{ position: 'absolute', marginLeft: '.5rem'}}>
                    {column.isSorted
                    ? column.isSortedDesc
                        ? ' 🔽'
                        : ' 🔼'
                    : ''}
                </span>
                </Th>
            )})}
            </Tr>
        ))}
        </Thead>

        <Tbody className="tbody" {...getTableBodyProps()} >
            { data.length === 0 && <NoDataComponent handleClickOnAddFormato={ () => setOpen(true) }/>}

        {rows.map((row, i) => {

            prepareRow(row)
            
            return (
            // Use a React.Fragment here so the table markup is still valid
            <React.Fragment >
                <Tr className={ row.depth === 1 ? "tr depth-1" : "tr" }  {...row.getRowProps()} depth={row.depth}
                >   
            
                {row.cells.map(cell => {


                    if (row.depth === 1 && cell.column.id === 'formatodoarquivo' && cell.value === '') {
                        return <Td className="td" {...cell.getCellProps()}><Link onClick={() => console.log('Subir arquivo')}>Adicionar arquivo +</Link></Td>
                    }

                    if (row.depth === 1 && cell.column.id === 'prazo' && cell.value === '') {
                        return <Td className="td" {...cell.getCellProps()}><Link onClick={() => ''}>Prazo +</Link></Td>
                    }

                    if (row.depth === 1 && cell.column.id === 'veiculação' && cell.value === '') {
                        return <Td className="td" {...cell.getCellProps()}><Link onClick={() => ''}>Veiculação +</Link></Td>
                    }

                    return (
                    <Td className={cell.column.id === 'expander' ? "td align-right" : "td"} {...cell.getCellProps({
                        style: {
                            display: 'flex',
                            alignItems: 'center'
                        }
                    })}>{cell.render('Cell')}</Td>
                    )
                })}
                </Tr>
                
                {/*
                    If the row is in an expanded state, render a row with a
                    column that fills the entire length of the table.
                */}
                {row.isExpanded && !row.depth ? (
                <Tr {...row.getRowProps()} className="tr depth-1">
                    <Td className="td">
                      { renderRowSubComponent() }
                    </Td>
                </Tr>
                ) : null}
            </React.Fragment>
            )
        })}
        </Tbody>
      </Table>
    </div>
    </>
  )
}



export const CampaignsTable = ({ data }) => {

  const columns = useMemo(() => COLUMNS,[])
  // const data = useMemo(() => DATA,[])

  const [ dataUpdate , setDataUpdate ] = useState({
    isUpdating: false,
    status: 'failure'
  })

  const renderRowSubComponent = React.useCallback(
    () =>  <RowSubComponent />
  )


  return (
    <Styles>
      { dataUpdate.isUpdating && <Toast status={dataUpdate.status} />}
      { data === undefined ? 'Carregando dados' :
        <App
          columns={ columns }
          data={ data }
          renderRowSubComponent={ renderRowSubComponent }
        />
      }
    </Styles>
  )
}


