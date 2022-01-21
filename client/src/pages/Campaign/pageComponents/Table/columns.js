import React from "react"
import { StatusBar, IndeterminateCheckbox } from "./styles"
import { ReactComponent as ChevronDown} from '../../../../assets/icons/chevron-down.svg'
import { ReactComponent as ChevronUp} from '../../../../assets/icons/chevron-up.svg'
import { StatusSelect } from "../../../../components"

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
                accessor: 'nomedoformato',
                disableFilters:true,
                
            },
      
          {
            Header: 'Veículo',
            accessor: 'veículo',
            disableFilters: true,
            
          },
          {
            Header: 'Arquivo / Specs',
            accessor: 'formatodoarquivo',
            disableFilters:true,
            width: 200,
            minWidth: 150,
            maxWidth: 250


          },
          {
            Header: 'Prazo',
            accessor: 'prazo',
            disableFilters:true
          },
          {
            Header: 'Veiculação',
            accessor: 'veiculação',
            disableFilters: true

          },
          {
            Header: 'Status',
            accessor: 'status',
            disableFilters:true,
            Cell: ({ row }) => row.depth === 0 ? <StatusBar style={{ alignItems: 'center'}} /> : <StatusSelect />
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
                  { row.isExpanded ? <ChevronUp /> : <ChevronDown /> }
                </span>
              ) : null
            },
          },
    ]

