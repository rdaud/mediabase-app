import React, {useRef, useCallback} from 'react'
import styled from 'styled-components'
import { useTable, useRowSelect, useRowState, useExpanded, useFilters, useAsyncDebounce, useGlobalFilter, useSortBy, stateReducer} from 'react-table'
import makeData from './makeData'
import { COLOR } from '../../tokens/colors'
import plus from '../../assets/icons/plus.svg'
import { ReactComponent as ChevronDown} from '../../assets/icons/chevron-down.svg'
import { ReactComponent as ChevronUp} from '../../assets/icons/chevron-up.svg'
import { Styles } from './styles'

const defaultPropGetter = () => ({})

// Define a default UI for filtering
function GlobalFilter({
  preGlobalFilteredRows,
  globalFilter,
  setGlobalFilter,
}) {
  const count = preGlobalFilteredRows.length
  const [value, setValue] = React.useState(globalFilter)
  const onChange = useAsyncDebounce(value => {
    setGlobalFilter(value || undefined)
  }, 200)

  return (
    <span>
      Buscar:{' '}
      <input
        value={value || ""}
        onChange={e => {
          setValue(e.target.value);
          onChange(e.target.value);
        }}
        placeholder={`nome, cliente...`}
        style={{
          fontSize: '1rem',
          border: '0',
        }}
      />
    </span>
  )
}

// Define a default UI for filtering
function DefaultColumnFilter({
  column: { filterValue, preFilteredRows, setFilter }
}) {
  const count = preFilteredRows.length

  return (
    <input
      value={filterValue || ''}
      onChange={e => {
        setFilter(e.target.value || undefined) // Set undefined to remove the filter entirely
      }}
      placeholder={`Search ${count} records...`}
    />
  )
}

function SelectColumnFilter({
  column: { filterValue, setFilter, preFilteredRows, id },
}) {
  // Calculate the options for filtering
  // using the preFilteredRows
  const options = React.useMemo(() => {
    const options = new Set()
    preFilteredRows.forEach(row => {
      options.add(row.values[id])
    })
    return [...options.values()]
  }, [id, preFilteredRows])

  // Render a multi-select box
  return (
    <select
      value={filterValue}
      onChange={e => {
        setFilter(e.target.value || undefined)
      }}
    >
      <option value="">Tudo</option>
      {options.map((option, i) => (
        <option key={i} value={option}>
          {option}
        </option>
      ))}
    </select>
  )
}


const CustomTr = styled.tr`
  && {
    background: ${ props => props.expanded % 2 ? COLOR.gray100 : COLOR.gray100};
  }
`

const CustomExpandedRow = styled.tr`
  background-color: ${ props => props.depth === 1 ? 'black': COLOR.black};
  border: ${ props => props.isExpanded ? '1px solid red' : '1px solid transparent'}
`

const AdicionarCriativoLargeWrapper = styled.div`
    display: inline-flex;
    gap: 2px;
    cursor: pointer;
    align-items: center;
`

const Menu = styled.div`
    background: ${COLOR.gray80};
    width: auto;
    max-width: 150px;
`

const Criativo = styled.div`
    width: 12px;
    height: 12px;
    position: relative;
    background: ${COLOR.gray90};
    display: flex;
    align-items: center;
    justify-content: center;
    img:hover {
        filter: invert(30%) sepia(98%) saturate(4776%) hue-rotate(358deg) brightness(96%) contrast(93%);
    }
   
`

const Adicionar = styled.div`
    width: 12px;
    height: 12px;
    position: relative;
    background: ${COLOR.gray90};
    display: flex;
    align-items: center;
    justify-content: center;
    img:hover {
        filter: invert(30%) sepia(98%) saturate(4776%) hue-rotate(358deg) brightness(96%) contrast(93%);
    }
   
`

export const AdicionarCriativoLarge = () => {

    return (
        <>
            <AdicionarCriativoLargeWrapper>
                <Criativo style={{ width: '100%', padding: '0 8px', height: '24px', background: `${COLOR.gray100}`}}>
                    <p style={{ fontSize: '12px'}}>
                    Adicionar criativo
                    </p>
                </Criativo>
                <Adicionar style={{ width: '24px', padding: '0 8px', height: '24px', background: `${COLOR.gray100}`}}>
                    <img src={plus} width="16" height="16"></img>
                </Adicionar>
            </AdicionarCriativoLargeWrapper>
           
            <Menu></Menu>
        </>
    )
}

const Sangria = styled.div`
    position: absolute;
    width: 48px;
    height: 48px;
    top: -20px;
    left: 24px; 
`






const IndeterminateCheckbox = React.forwardRef(
  ({ indeterminate, ...rest }, ref) => {
    const defaultRef = React.useRef()
    const resolvedRef = ref || defaultRef

    React.useEffect(() => {
      resolvedRef.current.indeterminate = indeterminate
    }, [resolvedRef, indeterminate])

    return (
      <>
        <input type="checkbox" ref={resolvedRef} {...rest} />
      </>
    )
  }
)

// function fuzzyTextFilterFn(rows, id, filterValue) {
//   return matchSorter(rows, filterValue, { keys: [row => row.values[id]] })
// }

// // Let the table remove the filter if the string is empty
// fuzzyTextFilterFn.autoRemove = val => !val


const Table = ({ columns: userColumns, data,renderRowSubComponent, stateReducer, expandSubRows
}) => {
  
  const filterTypes = React.useMemo(
    () => ({
      // Add a new fuzzyTextFilterFn filter type.
      // fuzzyText: fuzzyTextFilterFn,
      // Or, override the default text filter to use
      // "startWith"
      text: (rows, id, filterValue) => {
        return rows.filter(row => {
          const rowValue = row.values[id]
          return rowValue !== undefined
            ? String(rowValue)
                .toLowerCase()
                .startsWith(String(filterValue).toLowerCase())
            : true
        })
      },
    }),
    []
  )


  const defaultColumn = React.useMemo(
    () => ({
      // Let's set up our default Filter UI
      Filter: DefaultColumnFilter,
    }),
    []
  )


  const tableInstance = useTable({
    columns: userColumns,
    data,
    defaultColumn, // Be sure to pass the defaultColumn option
    filterTypes,
    stateReducer,
    expandSubRows,
    getSubRows: React.useCallback((row) => row.criativos || []),
  },
  useFilters, // useFilters!
  useGlobalFilter, // useGlobalFilter!
  useSortBy,
  useExpanded,
  useRowSelect,
  useRowState,
  hooks => {
    hooks.visibleColumns.push(columns => [
      // Let's make a column for selection
      {
        id: 'selection',
        // The header can use the table's getToggleAllRowsSelectedProps method
        // to render a checkbox
        Header: ({ getToggleAllRowsSelectedProps }) => (
          <div>
            <IndeterminateCheckbox {...getToggleAllRowsSelectedProps()} />
          </div>
        ),
        // The cell can use the individual row's getToggleRowSelectedProps method
        // to the render a checkbox
        Cell: ({ row }) => (

          row.depth === 1 ? 
          <div style={{
            paddingLeft: `0`,
          }}>
             <div style={{
           position: 'absolute', 
           top: '0px'         
         }}>
           <svg width="20" height="47" viewBox="0 18 20 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 0V40C1 43.3137 3.68629 46 7 46H20" stroke="#323232"/>
                </svg>
           </div>
                
            <IndeterminateCheckbox {...row.getToggleRowSelectedProps()}  style={{
              marginLeft: '2rem'
            }}/>
          </div> : 
           <div>
           <IndeterminateCheckbox {...row.getToggleRowSelectedProps()} />
         </div> 
        ),
      },
      ...columns,
    ])
  }
  )




 
  
  const {
    getTableProps,
    getTableBodyProps,
    getRowProps,
    headerGroups,
    rows,
    prepareRow,
    visibleColumns,
    selectedFlatRows,
    preGlobalFilteredRows,
    setGlobalFilter,

    setHiddenColumns,
    state: { expanded, selectedRowIds, globalFilter }
  } = tableInstance

  // tableInstance.setState()
console.log(tableInstance)
    
  // Get selected rows data
  const { selectedRowsData: original } = selectedFlatRows

  // Render the UI for your table



  return (
    <>
    <table>
        <tr>
            <td colSpan={visibleColumns.length}
            style={{
              textAlign: 'left',
            }}>       
            <GlobalFilter
              preGlobalFilteredRows={preGlobalFilteredRows}
              globalFilter={globalFilter}
              setGlobalFilter={setGlobalFilter}
            />
            </td>
            <td colSpan={visibleColumns.length}
            style={{
              textAlign: 'left',
            }}> 
            </td>  
        </tr>
    </table>
    
      <table {...getTableProps()} >
     
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => {
                return (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>{column.render('Header')}
                {/* Render the columns filter UI */}
                <div>{column.canFilter ? column.render('Filter') : null}</div>
                {/* Add a sort direction indicator */}
                <span>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? ' 🔽'
                        : ' 🔼'
                      : ''}
                  </span>
                </th>
              )})}
            </tr>
          ))}
          
        </thead>
        <tbody {...getTableBodyProps()}>
          
          {rows.map((row, i) => {

            prepareRow(row)
            function handleClickOnRow() {
              // console.log(row.state.selectedRowIds)
            }

            return (
              // Use a React.Fragment here so the table markup is still valid
              <React.Fragment >
                <CustomExpandedRow onClick={handleClickOnRow} {...row.getRowProps()} depth={row.depth}
                >   
               
                  {row.cells.map(cell => {
                    return (
                      <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                    )
                  })}
                </CustomExpandedRow>
                
                {/*
                    If the row is in an expanded state, render a row with a
                    column that fills the entire length of the table.
                  */}
                {row.isExpanded ? (
                  <tr>
                    <td style={{
                      background: 'black'
                    }}colSpan={visibleColumns.length}>
                      {/*
                          Inside it, call our renderRowSubComponent function. In reality,
                          you could pass whatever you want as props to
                          a component like this, including the entire
                          table instance. But for this example, we'll just
                          pass the row
                        */}
                      {renderRowSubComponent()}
                    </td>
                  </tr>
                ) : null}
              </React.Fragment>
            )
          })}
        </tbody>
      </table>
  
    </>
  )
}

// Define a custom filter filter function!
function filterGreaterThan(rows, id, filterValue) {
  return rows.filter(row => {
    const rowValue = row.values[id]
    return rowValue >= filterValue
  })
}

// This is an autoRemove method on the filter function that
// when given the new filter value and returns true, the filter
// will be automatically removed. Normally this is just an undefined
// check, but here, we want to remove the filter if it's not a number
filterGreaterThan.autoRemove = val => typeof val !== 'number'



export const Playground = () => {

 
  const columns = React.useMemo(
    () => [
      
          {
            Header: 'Veículo',
            accessor: 'veículo',
            disableFilters:true
          },
          {
            Header: 'Arquivo / Specs',
            accessor: 'arquivo',
            Filter: SelectColumnFilter,
            filter: 'includes',
          },
          {
            Header: 'Prazo',
            accessor: 'prazo',
            Filter: SelectColumnFilter,
            filter: 'includes',
          },
          {
            Header: 'Veiculação',
            accessor: 'veiculação',
            Filter: SelectColumnFilter,
            filter: 'includes',
          },
          {
            Header: 'Status',
            accessor: 'status',
            Filter: SelectColumnFilter,
            filter: 'includes',
          },
          {
            // Build our expander column
            id: 'expander', // Make sure it has an ID
            Header: ({ getToggleAllRowsExpandedProps, isAllRowsExpanded }) => (
              <span {...getToggleAllRowsExpandedProps()}>
                {isAllRowsExpanded ? <ChevronUp /> :  <ChevronDown />}
              </span>
            ),
            Cell: ({ row }) => {
              // Use the row.canExpand and row.getToggleRowExpandedProps prop getter
              // to build the toggle for expanding a row
              console.log(row)
              return row.canExpand ? (
                <span
                  {...row.getToggleRowExpandedProps({
                    style: {
                      // We can even use the row.depth property
                      // and paddingLeft to indicate the depth
                      // of the row
                    },
                  })}
                >
                  {row.isExpanded ? <ChevronUp /> :  <ChevronDown />}
                </span>
              ) : null },
          },
    ],
    []
  )



  const data = React.useMemo(
    () => [
      {
        veículo: 'Google',
        arquivo: '200x250px, GIF, HTML',
        prazo: '',
        veiculação: '',
        status: 'Em produção',
        criativos: [{
          id: '23432434',
          nome: 'Heineken 2022',
          arquivo: 'url.com/232312',
          prazo: '2021/12/22',
          veiculação: '2021/12/31',
          status: 'Em produção'
        },
        {
          id: '23432434',
          nome: 'Heineken 2023',
          arquivo: 'url.com/232312',
          prazo: '2021/12/22',
          veiculação: '2021/12/31',
          status: 'Em produção'
        }],
        
      },
      {
        veículo: 'Facebook',
        arquivo: '200x250px, GIF, HTML',
        prazo: '',
        veiculação: '',
        status: 'Em produção',
        criativos: [{
          id: '23432434',
          nome: 'Heineken 2022',
          arquivo: 'url.com/232312',
          prazo: '2021/12/22',
          veiculação: '2021/12/31',
          status: 'Em produção'
        }],      
       
      },
      {
        veículo: 'OOH',
        arquivo: '200x250px, GIF, HTML',
        prazo: '',
        veiculação: '',
        status: 'Em produção',
        criativos: [{
          id: '23432434',
          nome: 'Heineken 2022',
          arquivo: 'url.com/232312',
          prazo: '2021/12/22',
          veiculação: '2021/12/31',
          status: 'Em produção'
        }]
      }
    ],[]
)


  const renderRowSubComponent = React.useCallback(
    () => { 
   
      return (
          <>
            <div style={{display: 'inline-flex', overflow: 'hidden', width: '100%', height: '100%'}}>    
              <AdicionarCriativoLarge />
            </div>
          </>
      )
    })



    const ref = useRef()

  return (
    <Styles>
      <Table
        columns={columns}
        data={data}
        renderRowSubComponent={renderRowSubComponent}
        ref={ref}
        subRowsKey= {'criativos'} 
      />
    </Styles>
  )
}


