import React, { useState, useMemo } from 'react';
import { Modal, Button, TextInput, TextArea, FormGroup, FileInput } from '../../../../components'
import { closeAddCriativoModalRequest } from "../../../../redux/actions/campaignsActions";
import { createCriativo } from "../../../../redux/actions/criativoActions";
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";
import { FormWrapper, FormContainer } from './styles';
import { COLOR } from '../../../../tokens/colors';









export const AddCriativoModal = () => {

    const [ nome, setNome ] = useState('')
    const [ descricao, setDescrição ] = useState('')
    const [ imagem, setImagem ] = useState({})
    const dispatch = useDispatch()
    const history = useHistory()

    console.log(imagem)

        const handleClickOnCloseButton = () => {
            dispatch(closeAddCriativoModalRequest())
        };


        const handleSubmitFormClick = (event) => {

            event.preventDefault();
            if (nome === '' || descricao === '' || imagem === '') {
                return alert('Preencha todos campos')
            }
            dispatch(createCriativo({ nome, imagem, descricao }));
            setNome('')
            setDescrição('')
            setImagem('')  
        };

        const handleClickOnRemover = () => {
            setImagem('')  
        }

    return (
        <Modal headerTitle="Novo Criativo" height="auto" width="600px" handleClickOnCloseButton={handleClickOnCloseButton}>
           <FormWrapper>
                <FormContainer onSubmit={handleSubmitFormClick}>            
                    <FormGroup>
                        <TextInput lighter label="Nome do criativo" onChange={val => setNome(val.target.value)} value={nome} placeholder="Nome do criativo" />
                    </FormGroup>

                    <FormGroup>
                        <FileInput
                            variation="filled"
                            colorMode="dark"
                            label="Imagem de capa"
                            onChange={val => {
                                const obj = val.target.files[0]
                                if (obj) {
                                    setImagem(obj)
                                }
                            }} 
                            placeholder="Subir imagem"
                            assistiveText={imagem.name}
                            onClick={handleClickOnRemover}
                        />
                    </FormGroup>

                    <FormGroup>
                        <TextArea variation="filled"
                            colorMode="dark" label="Descrição" onChange={val => setDescrição(val.target.value)} value={descricao} placeholder="Inserir descrição" />
                    </FormGroup>

                     <div>
                        <Button
                            variation="primary"
                            corDaOrelha={COLOR.gray90}
                            style={{
                            marginTop: "1rem"
                        }}>
                            Adicionar criativo
                        </Button>
                    </div>
                 </FormContainer>
            </FormWrapper>
        </Modal>
    )
}

