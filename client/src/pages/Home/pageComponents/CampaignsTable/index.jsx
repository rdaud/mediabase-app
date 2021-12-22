import React, { useMemo, useState } from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from "react-router-dom";
import { useTable, useRowSelect, useRowState,useFlexLayout, useExpanded, useFilters, useGlobalFilter, useSortBy } from 'react-table'
import { Styles, Table, Thead, Tr, Tbody, Th, Td, StatusBar,IndeterminateCheckbox, CustomExpandedRow, RowSubComponent, Link} from './styles'
import { COLUMNS } from './columns'
import { DATA } from './data'
import { filterTypes, DefaultColumnFilter, GlobalFilter, SelectColumnFilter } from './filters'
import { Toolbar } from './Toolbar'


const headerProps = (props, { column }) => getStyles(props, column.align)
const cellProps = (props, { cell }) => getStyles(props, cell.column.align)

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
    const history = useHistory();


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

      function handleClickOnRow({row}) {
          console.log(row)
      }
  
 

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

  // tableInstance.setState()
console.log(rows)
    
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

  // Render the UI for your table
  return (
      <>
     { !!subrowsCounter && <Toolbar counter={subrowsCounter} handleClickOnCancelar={handleClickOnCancelar} /> } 

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
        
        {rows.map((row, i) => {

            prepareRow(row)
            
            return (
            // Use a React.Fragment here so the table markup is still valid
            <React.Fragment >
                <Tr className={ row.depth === 1 ? "tr depth-1" : "tr" }  {...row.getRowProps()} depth={row.depth} onClick={() => {
                        const url = `/campanha/${row.original._id}`
                        history.push(url) 
                }}
                >   
            
                {row.cells.map(cell => {

                    if (row.depth === 1 && cell.column.id === 'arquivo' && cell.value === '') {
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
            </React.Fragment>
            )
        })}
        </Tbody>
      </Table>
    </div>
    </>
  )
}



export const CampaignsTable = () => {

 const { campaigns } = useSelector(state => state.campaigns)

 console.log(campaigns)

  const columns = useMemo(() => COLUMNS,[])
  const data = useMemo(() => DATA,[])

  const renderRowSubComponent = React.useCallback(
    () =>  <RowSubComponent /> )


  return (
    <Styles>
      <App
        columns={columns}
        data={campaigns}
        renderRowSubComponent={renderRowSubComponent}
      />
    </Styles>

  )
}


