import React, { useState, useMemo } from "react";
import { useTable, useFilters, useGlobalFilter,} from 'react-table';

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
        <option value="">All</option>
        {options.map((option, i) => (
          <option key={i} value={option}>
            {option}
          </option>
        ))}
      </select>
    )
  }



export const Playground = () => {

    const data = React.useMemo(
        () => [
          {
            col1: 'Hello',
            col2: 'World',
          },
          {
            col1: 'react-table',
            col2: 'rocks',
          },
          {
            col1: 'whatever',
            col2: 'you want',
          },
        ],
        []
      )
    
    
      const columns = React.useMemo(
        () => [
          {
            Header: 'Column 1',
            accessor: 'col1', // accessor is the "key" in the data
          },
          {
            Header: 'Column 2',
            accessor: 'col2',
            Filter: SelectColumnFilter,
            filter: 'includes',
          },
        ],
        []
      )

      
    
      const tableInstance = useTable({ columns, data })
    
      const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
      } = tableInstance
    

    return (
        // apply the table props
        <table style={{
            color: "white"
        }}{...getTableProps()}>
          <thead>
            {// Loop over the header rows
            headerGroups.map(headerGroup => (
              // Apply the header row props
              <tr {...headerGroup.getHeaderGroupProps()}>
                {// Loop over the headers in each row
                headerGroup.headers.map(column => (
                  // Apply the header cell props
                  <th style={{
                    border: "1px solid white",
                    padding: "1rem"
                }}{...column.getHeaderProps()}>
                    {// Render the header
                    column.render('Header')}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          {/* Apply the table body props */}
          <tbody {...getTableBodyProps()}>
            {// Loop over the table rows
            rows.map(row => {
              // Prepare the row for display
              prepareRow(row)
              return (
                // Apply the row props
                <tr {...row.getRowProps()}>
                  {// Loop over the rows cells
                  row.cells.map(cell => {
                    // Apply the cell props
                    return (
                      <td style={{
                        border: "1px solid white",
                        padding: "1rem"
                    }} {...cell.getCellProps()}>
                        {// Render the cell contents
                        cell.render('Cell')}
                      </td>
                    )
                  })}
                </tr>
              )
            })}
          </tbody>
        </table>
      )
     
    
}



