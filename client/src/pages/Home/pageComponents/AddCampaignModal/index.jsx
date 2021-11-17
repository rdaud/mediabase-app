import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ThemeButton, Modal, FormGroup, TextInput, Select } from "../../../../components";
import { createCampaign } from "../../../../redux/actions/campaignsActions";
import { closeAddCampaignModalRequest } from '../../../../redux/actions/campaignsActions';
import { FormWrapper, FormContainer } from './styles';
import { COLOR } from '../../../../tokens/colors';



export const AddCampaignModal = (props) => {

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

    const handleClickOnCloseButton = () => {
        dispatch(closeAddCampaignModalRequest())
    };

    const options = [
        'Em produção', 
        'Finalizada'
      ]


    return (
        <Modal headerTitle="Nova Campanha" modalWidth="600px" handleClickOnCloseButton={handleClickOnCloseButton}>
           { props.loading ? <div>Is loading </div> : 
           <FormWrapper>
                <FormContainer onSubmit={handleSubmitFormClick}>
                    
                        <FormGroup>
                            <TextInput label="Nome da campanha" onChange={val => setNome(val.target.value)} value={nome} placeholder="Nome da campanha" />
                        </FormGroup>

                        <FormGroup>
                            <TextInput label="Cliente" onChange={val => setCliente(val.target.value)} value={cliente} placeholder="Cliente" />
                        </FormGroup>

                        <FormGroup>
                            <TextInput label="Produto" onChange={val => setProduto(val.target.value)} value={produto} placeholder="Produto" />
                        </FormGroup>

                        <FormGroup>
                            <Select onChange={ val => setStatus(val)} value={status} options={options} prompt="Status" label="Status"/>
                        </FormGroup>

                    <FormGroup>
                            <label>Período de Veiculação</label>
                            <div style={{
                                "display": "flex",
                                "gap": "1rem"
                            }}>
                                <input type="date" onChange={e => setDataDeVeiculacaoInicio(e.target.value)} value={dataDeVeiculacaoInicio} className="form-control"/>
                                <input type="date" onChange={e => setDataDeVeiculacaoFim(e.target.value)} value={dataDeVeiculacaoFim} className="form-control"/>
                            </div>
                    </FormGroup>

                     <div>
                        <ThemeButton corDaOrelha={COLOR.black} style={{
                            marginTop: "1rem"
                        }}>
                            Criar campanha
                        </ThemeButton>
                    </div>
                 </FormContainer>
            </FormWrapper>
           
           } 
        </Modal>
    )
}
