import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'

import { Modal, TextInput, TextArea, FormGroup } from '../../../../components'
import { FormWrapper, FormContainer, ImagemDeCapa, AlterarImagem } from './styles'


export const EditCriativoModal = ({ criativo, handleClickOnCloseButton }) => {

    
    const [ nome, setNome ] = useState(criativo.nome)
    const [ descricao, setDescricao ] = useState(criativo.descricao)
    const [ imagem, setImagem ] = useState(criativo.imagem)
    const { selected } = useSelector(state => state.criativos)
    const { token } = useSelector(state => state.authentication)

    const dispatch = useDispatch()

    const handleSubmitFormClick = (event) => {

        event.preventDefault();
        if (nome === '' || descricao === '' || imagem === '') {
            return alert('Preencha todos campos')
        }
        setNome('')
        setDescricao('')
        setImagem('')  
    };



    useEffect(() => {  
        const url = `/criativo/${criativo}`
        console.log(url)
        axios.get(url,{
            headers: {
            'Authorization': `Bearer ${token}`,
            }
        })
        .then((response) => {
            const { nome, imagem, descricao } = response.data
            setNome(nome)
            setDescricao(descricao)
        })
        .catch((error) => {
            return console.log(error)
        });
    },[])

    return (
        <Modal headerTitle="Detalhe do criativo" height="auto" width="600px" handleClickOnCloseButton={handleClickOnCloseButton}>
            <ImagemDeCapa>
                <img width="600" src={`/criativo/imagem/${criativo}`}></img>
                <AlterarImagem>Alterar imagem</AlterarImagem>
            </ImagemDeCapa>
            <FormWrapper>
                <FormContainer onSubmit={handleSubmitFormClick}>                 
                    <FormGroup>
                        <TextInput variation="filled" colorMode="dark"  label="Nome do criativo" onChange={val => setNome(val.target.value)} value={nome} placeholder="Nome do criativo" />
                    </FormGroup>

                    {/* <FormGroup>
                        <FileInput
                            lighter
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
                    </FormGroup> */}

                    <FormGroup>
                        <TextArea variation="filled" colorMode="dark" label="Descrição" onChange={val => setDescricao(val.target.value)} value={descricao} placeholder="Inserir descrição" />
                    </FormGroup>  
                 </FormContainer>
            </FormWrapper>
        </Modal>
    )
}

