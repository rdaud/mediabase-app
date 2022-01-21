import React, { useMemo } from 'react'
import { useDispatch } from 'react-redux'
import { Info2, Button } from '../../../../../../components'
import plus from '../../../../../../assets/icons/plus.svg'
import { updateCampaign } from '../../../../../../redux/actions/campaignsActions'
import { useTable, useRowSelect, useRowState,useFlexLayout, useFilters, useGlobalFilter, useSortBy } from 'react-table'
import { Styles, Table, Thead, Tr, Tbody, Th, Td, Link} from './styles'
import { COLUMNS } from './columns'
import { COLOR } from '../../../../../../tokens/colors'
import { filterTypes, DefaultColumnFilter, GlobalFilter, SelectColumnFilter } from './filters'



const App = ({ 
    columns: userColumns,
    data,
    stateReducer }) => {

    const dispatch = useDispatch()

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
  },
    useFlexLayout,
    useFilters, 
    useGlobalFilter, 
    useSortBy,
    useRowSelect,
    useRowState
  )


  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    columns,
    prepareRow,
    selectedFlatRows,
    preGlobalFilteredRows,
    setGlobalFilter,
    state: { globalFilter }
  } = tableInstance

 

  const handleSubmit = () =>
  {
    // Clean the data before dispatching
    const cleanedData = []
    selectedFlatRows.forEach( item =>
    {
    // Create a new object with lowercased key values
    const convertToLowercase = obj =>
      Object.keys(obj).reduce((acc, key) => {
      acc[key.toLowerCase()] = obj[key];
      return acc;
    }, {});
    const lowercaseObject = convertToLowercase(item.original)
    lowercaseObject.criativos = [{}]
    lowercaseObject.formatodoarquivo = 'Formatos do arquivo'
    lowercaseObject.prazo = 'Adicionar prazo'
    lowercaseObject.veiculação = 'Adicionar veiculação'
    cleanedData.push(lowercaseObject)
    })

    // Now we're good to go ;)
    dispatch(updateCampaign({
      formatos: cleanedData
    }))
  }
    

console.log(rows)

  const SelectedsBar = useMemo( () => {
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
            <Info2 color={COLOR.white}>{selectedFlatRows.length} formato(s) selecionado(s)</Info2>
            </div>
            <div>
                <Button variation="primary" iconLeft={plus} corDaOrelha={COLOR.gray90} onClick={handleSubmit}>Adicionar</Button>
            </div>

        </div>
    )
},[selectedFlatRows])

console.log(selectedFlatRows)


  // Render the UI for your table
  return (
      <>

    { selectedFlatRows.length > 0 && SelectedsBar }   

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
            <SelectColumnFilter userColumns={columns[2]} />
        </div>
        <div style={{ textAlign: 'left'}}> 
            <SelectColumnFilter userColumns={columns[3]} />
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
                <Tr rowId={row.id} className={ row.depth === 1 ? "tr depth-1" : "tr" }  {...row.getRowProps()} depth={row.depth}
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


export const AddFormatsTable = ({ data }) => {

  const columns = useMemo(() => COLUMNS,[])

  return (
    <Styles>
      <App
        columns={columns}
        data={data}
      />
    </Styles>

  )
}


