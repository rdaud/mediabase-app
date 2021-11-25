import React, { useEffect, useState } from 'react';
import { FormWrapper, Profile, ProfileWrapper, InnerWrapper } from './styles';
import { useSelector, useDispatch } from 'react-redux';
import { MainContainer, TextInput, ThemeButton } from '../../components';
import { PageHeader } from './pageComponents';
import { getAvatar } from '../../redux/actions/usersActions';
import { COLOR } from '../../tokens/colors';
import axios from 'axios';



export const ProfilePage = (props) => {

   
    const [ nome, setNome ] = useState(localStorage.getItem("USER-NAME"))
    const [ email, setEmail ] = useState(localStorage.getItem("USER-EMAIL"))
    const [ password, setPassword] = useState('Senha aleatória')
    const [ hasLoaded , setHasLoaded ] = useState(false)
    const dispatch = useDispatch()
  
    useEffect(() => {

        const url = `/users/${localStorage.getItem("USER-ID")}/avatar`
        axios.get(url,{
            headers: {
              'Authorization': `Bearer ${localStorage.getItem("USER-TOKEN")}`,
              'Access-Control-Allow-Origin': '*',
            }
          }).then(result => {
            console.log(result.data)
          }).catch( error => {
            console.log(error)
          })
    },[hasLoaded])
    


    return (
        <MainContainer>
            <PageHeader id={props.match.params.id}/>
            <ProfileWrapper>
                    <Profile><p>Adicionar foto de perfil</p></Profile>
                </ProfileWrapper>
            <InnerWrapper>   
                <FormWrapper>
                    <TextInput lighter type="text" onChange={item => setNome(item.target.value)} label="Nome" value={nome} />
                    <TextInput type="email" onChange={item => setEmail(item.target.value)} label="Email" value={email} />
                    <ThemeButton style={{marginTop: '2rem'}} corDaOrelha={COLOR.gray80}>Salvar</ThemeButton>

                </FormWrapper>
            </InnerWrapper>
        </MainContainer>
    )
}