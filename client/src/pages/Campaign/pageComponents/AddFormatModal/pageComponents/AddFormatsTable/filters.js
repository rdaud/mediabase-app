import React from 'react';
import { useAsyncDebounce } from 'react-table';
import { Select, Search } from '../../../../../../components';






export const filterTypes = 
    () => React.memo(({
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
    }),[])
  


    export function SelectColumnFilter({
        userColumns: { filterValue, id, setFilter, preFilteredRows }
      }) {
    
        // Calculate the options for filtering
        // using the preFilteredRows
        const options = React.useMemo(() => {
          const options = new Set()
          preFilteredRows.forEach(row => {
            options.add(row.values[id])
          })
          return [...options.values()]
        }, [ id, preFilteredRows])
    
    
        // Capitalize 1st letter of the ID
        let capitalizedId = id;
        capitalizedId = capitalizedId[0].toUpperCase() + capitalizedId.substring(1);
    
    
        // Render a multi-select box
        return (

            <Select
            prompt={capitalizedId}
            variation="outline"
            colorMode="dark"
            value={filterValue}
            options={options}
            onChange={e => {
                console.log(e)
              setFilter(e || undefined)
            }}
            />
        //   <select
        //     value={filterValue}
        //     onChange={e => {
        //         console.log(e.target.value)
        //       setFilter(e.target.value || undefined)
        //     }}
        //   >
        //     <option value="">{capitalizedId}</option>
        //     {options.map((option, i) => (
        //       <option key={i} value={option}>
        //         {option}
        //       </option>
        //     ))}
        //   </select>
        // )
        )
      }



// Define a default UI for filtering
export function DefaultColumnFilter({
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
        style={{
            // Don't display the default filter UI when using global filter
            display: 'none'
        }}
      />
    )
  }




  // Define a default UI for global filtering
export function GlobalFilter({
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
        <>
        <Search
            onChange={e => {
            setValue(e.target.value);
            onChange(e.target.value);
        }} filterText={value || ""} />
        </>
    //   <span>
    //     Buscar:{' '}
    //     <input
    //       value={value || ""}
    //       onChange={e => {
    //         setValue(e.target.value);
    //         onChange(e.target.value);
    //       }}
    //       placeholder={`nome, cliente...`}
    //       style={{
    //         fontSize: '1rem',
    //         border: '0',
    //       }}
    //     />
    //   </span>
    )
  }
  
