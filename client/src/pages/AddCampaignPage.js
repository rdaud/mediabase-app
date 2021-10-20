import React, { useEffect, useState } from 'react';
import { NavLink, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ThemeButton } from "../components/Button";
import { createCampaign } from "../redux/actions/campaignsActions";
import { closeAddCampaignModalRequest } from '../redux/actions/campaignsActions';


import styled from 'styled-components';
import Modal from '../components/Modal'



const FormWrapper = styled.div`
    width: 100%;
    height: auto;
    position: relative;
`

const FormContainer = styled.div`
    width: auto;
    height: auto;
    margin: 0 auto;
    position: relative;
`




function AddCampaignPage(props) {

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


    return (
        <Modal headerTitle="Nova Campanha" modalWidth="600px" handleClickOnCloseButton={handleClickOnCloseButton}>
           { props.loading ? <div>Is loading </div> : 
           
           <FormWrapper>
                <FormContainer>
                    <form onSubmit={handleSubmitFormClick}>
                        <div className="form-group">
                            <label>Nome da campanha</label>
                            <input type="text" onChange={e => setNome(e.target.value)} value={nome} className="form-control" placeholder="Nome da campanha" />
                        </div>

                        <div className="form-group">
                            <label>Cliente</label>
                            <input type="text" onChange={e => setCliente(e.target.value)} value={cliente} className="form-control" placeholder="Cliente" />
                        </div>

                        <div className="form-group">
                            <label>Produto</label>
                            <input type="text" onChange={e => setProduto(e.target.value)} value={produto} className="form-control" placeholder="Produto" />
                        </div>

                        <div className="form-group">
                            <label>Status</label>
                            <select type="text" value={status} onChange={e => setStatus(e.target.value)} className="form-control" placeholder="Status">
                                <option value="Selecione o status">Selecione o status</option>
                                <option value="Em produção">Em produção</option>
                                <option value="Finalizada">Finalizada</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label>Período de Veiculação</label>
                            <div style={{
                                "display": "flex",
                                "gap": "1rem"
                            }}>
                            <input type="date" onChange={e => setDataDeVeiculacaoInicio(e.target.value)} value={dataDeVeiculacaoInicio} className="form-control"/>
                            <input type="date" onChange={e => setDataDeVeiculacaoFim(e.target.value)} value={dataDeVeiculacaoFim} className="form-control"/>
                            </div>
                     </div>
                        <ThemeButton corDaOrelha="#323232">
                            Criar campanha
                        </ThemeButton>
                    </form>
                 </FormContainer>
            </FormWrapper>
           
           } 
        </Modal>
    )
}

export default AddCampaignPage

