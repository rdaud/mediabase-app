import React, { useState } from 'react'
import { useHistory } from "react-router-dom"
import { useDispatch } from "react-redux"

import { Button, Modal, FormGroup, TextInput, Select, Datepicker } from "../../../../components"
import { createCampaign } from "../../../../redux/actions/campaignsActions"
import { FormWrapper, FormContainer } from './styles'
import { COLOR } from '../../../../tokens/colors'



export const AddCampaignModal = ({ loading, handleClickOnCloseButton }) => {

    const dispatch = useDispatch()
    const history = useHistory()
    const [ nome, setNome ] = useState('')
    const [ cliente , setCliente ] = useState('')
    const [ produto , setProduto ] = useState('')
    const [ status , setStatus ] = useState('')
    const [ dataDeVeiculacaoInicio , setDataDeVeiculacaoInicio ] = useState('')
    const [ dataDeVeiculacaoFim , setDataDeVeiculacaoFim ] = useState('')
  

    const handleSubmitFormClick = (event) => {
        event.preventDefault();
        if (nome === '' || cliente === '') {
            return alert('Preencha todos campos')
        }
        dispatch(createCampaign({ nome,cliente,produto,status, dataDeVeiculacaoInicio, dataDeVeiculacaoFim }, history));
        setNome('')
        setCliente('')
        setStatus('')
        setDataDeVeiculacaoInicio('')
        setDataDeVeiculacaoFim('')
    };

  
    const options = [
        'Em produção', 
        'Finalizada'
      ]


    return (
        <Modal headerTitle="Nova Campanha" width="600px" height="auto" handleClickOnCloseButton={handleClickOnCloseButton}>
           { loading ? <div>Is loading </div> : 
           <FormWrapper>
                <FormContainer onSubmit={handleSubmitFormClick}>                
                    <FormGroup>
                            <TextInput  variation="filled"
                                colorMode="dark" label="Nome da campanha" onChange={val => setNome(val.target.value)} value={nome} placeholder="Nome da campanha" />
                        </FormGroup>

                        <FormGroup>
                            <TextInput  variation="filled"
                                colorMode="dark" label="Cliente" onChange={val => setCliente(val.target.value)} value={cliente} placeholder="Cliente" />
                        </FormGroup>

                        <FormGroup>
                            <TextInput  variation="filled"
                                colorMode="dark" label="Produto" onChange={val => setProduto(val.target.value)} value={produto} placeholder="Produto" />
                        </FormGroup>

                        <FormGroup>
                            <Select variation="filled" colorMode="dark" onChange={ val => setStatus(val)} value={status} options={options} prompt="Status" label="Status"/>
                        </FormGroup>

                        <FormGroup
                            style={{
                                "display": "inline-flex",
                                "gap": "1rem",
                            }}>
                                    <div style={{
                                "flex-grow": 1,
                                "width": "100%"
                                
                            }}>
                            <Datepicker
                                variation="filled"
                                colorMode="dark"
                                label="Início"
                                prompt="DD-MM-AAAA"
                                onChange={e => setDataDeVeiculacaoInicio(e.target.value)}
                                value={dataDeVeiculacaoInicio}
                            />
                            </div>
                            <div style={{
                                "flex-grow": 1,
                                "width": "100%"
                            }}>
                            <Datepicker
                                variation="filled"
                                colorMode="dark"
                                label="Fim"
                                placeholder="DD-MM-AAAA"
                                onChange={e => setDataDeVeiculacaoFim(e.target.value)}
                                value={dataDeVeiculacaoFim}
                            />
                            </div>
                            
                        </FormGroup>

                     <div>
                        <Button
                            variation="primary"
                            corDaOrelha={COLOR.gray90}
                            style={{
                            marginTop: "1rem"
                        }}>
                            Criar campanha
                        </Button>
                    </div>
                 </FormContainer>
            </FormWrapper>
           
           } 
        </Modal>
    )
}

