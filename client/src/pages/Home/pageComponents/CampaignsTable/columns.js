import React from "react"
import moment from 'moment';
import { StatusBar, IndeterminateCheckbox } from "./styles"
import { ReactComponent as ChevronDown} from '../../../../assets/icons/chevron-down.svg'
import { ReactComponent as ChevronUp} from '../../../../assets/icons/chevron-up.svg'
import { StatusSelect } from '../../../../components'


export const COLUMNS = [

    

            {
                Header: 'Nome',
                accessor: 'nome',
                disableFilters:true,
                
            },
      
          {
            Header: 'Cliente',
            accessor: 'cliente',
            disableFilters: true,
            
          },
          {
            Header: 'Produto',
            accessor: 'produto',
            disableFilters:true,
            width: 200,
            minWidth: 150,
            maxWidth: 250


          },
          {
            Header: 'Status',
            accessor: 'status',
            disableFilters:true
          },
          {
            Header: 'Data de veiculaçao',
            accessor: 'veiculação',
            disableFilters: true,
            Cell: ( {row}) => `${moment(row.dataDeVeiculacaoInicio).format('DD/MM/YY')} até ${moment(row.dataDeVeiculacaoFim).format('DD/MM/YY')}`

          }
              
    ]

