import React from "react"
import { IndeterminateCheckbox, CustomCell } from "./styles"



export const COLUMNS = [

    {
        id: 'selection',
        minWidth: 100,
        width: 'max-content',
        Header: ({ getToggleAllRowsSelectedProps }) => (
          <div style={{ display: 'flex'}}>
            <IndeterminateCheckbox {...getToggleAllRowsSelectedProps()} />
          </div>
        ),

        Cell: ({ row }) => (

          row.depth === 1 ? 
          <div style={{
            paddingLeft: `0`,
            width: '100%'
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
              marginLeft: '2rem',
              width: '100%'
            }}/>
          </div> : 
           <div>
           <IndeterminateCheckbox {...row.getToggleRowSelectedProps({
               onChange: e => {
                row.toggleRowSelected(e.target.checked)
              },
           })} />
         </div> 
        )},
        {
          Header: 'Formato',
          accessor: 'Formato',
          disableFilters:true,
          width: 200,
          minWidth: 200,
          Cell: ({ row: { original } }) => <CustomCell row={original}/>
        },

          {
            Header: 'Veículo',
            accessor: 'Veículo',
            disableFilters: true,
            
          },
          {
            Header: 'Mídia',
            accessor: 'Meio',
            disableFilters:true,
          },
         
          {
            Header: 'Tipo',
            accessor: 'NomeDoFormato',
            disableFilters: true
          },
          {
            Header: 'Duração',
            accessor: 'Duração',
            disableFilters:true
          }
          
          
    ]

