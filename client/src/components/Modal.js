import '../App.scss';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components'
import icon from '../utils/close-icon.svg'
import axios from "axios";


import DataTable from 'react-data-table-component';
import { useDispatch, useSelector } from "react-redux";
import { getFormatos } from '../redux/action-creators';



const Hero = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 9999;
    background-color: black;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Header = styled.div`
    position: relative;
    padding: 1.2rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

const ModalContainer = styled.div`
    width: 1024px;
    height: 608px;
    background-color: #323232;
    position: relative;
    margin: 0 auto;
    overflow-y: hidden;
`

const CloseButton = styled.div`
    width: 56px;
    height: 56px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const TableWrapper = styled.div`
width: 100%;
height: 100%;
position: relative;
`


const columns = [
    {
        name: 'Formato',
        selector: row => row.NomeDoFormato,
    },
    {
        name: 'Veículo',
        selector: row => row.Veículo,
    },
    {
        name: 'Mídia',
        selector: row => row.Meio,
    },
    {
        name: 'Formato do Arquivo',
        selector: row => row.FormatoDoArquivo,
    },
    {
        name: 'Tamanho',
        selector: row => row.Tamanho,
    },
];

const conditionalRowStyles = [
    {
      when: row => row.NomeDoFormato,
      classNames: ['add-label'],
    }

  ];


  const dataTeste = [
      {
          id: 1,
          NomeDoFormato: 
           `Teste <br> teste`,
          Veículo: 'Teste',
      }
  ]




function Modal() {


    const [ data, setData ] = useState([])

    useEffect(() => {
      
      axios.get('/formats',{
        'Content-Type': 'application/json',
      }).then(response => {

            let arr = []
            response.data.forEach((element,index) => {
            const rowData = element.fields
            arr.push({id:index,...rowData})
            });

            console.log(arr)
            setData(arr)

      }).catch( e => console.log(e))



    },[])




    return (
        <Hero>
            <ModalContainer>
                <Header>
                    <h2>Adicionar Formatos</h2>
                    <CloseButton> <img src={icon} alt="Mediabase" />
                    </CloseButton>
                </Header>
                <TableWrapper>
                <DataTable
                conditionalRowStyles={conditionalRowStyles}
                columns={columns}
                data={data}
                theme="dark"
                highlightOnHover="true"
                selectableRows
                fixedHeader
                />
                </TableWrapper>
            </ModalContainer>
        </Hero>
    )
}

export default Modal

