import React, { useCallback, useState } from 'react';
import {  useDispatch, connect } from 'react-redux';
import axios from 'axios';

import { FormWrapper, Profile, ProfileWrapper, InnerWrapper } from './styles';
import { MainContainer, TextInput, Button } from '../../components';
import { PageHeader } from './pageComponents';
import { COLOR } from '../../tokens/colors';





   


const ProfilePage = ( { match, userInfo, token }) => {

   
    const [ nome, setNome ] = useState(userInfo.name)
    const [ email, setEmail ] = useState(userInfo.email)
    const [ hasAvatar, setHasAvatar ] = useState(false)
    const dispatch = useDispatch()

    const profilePicUrl = `http://localhost:3001/users/${userInfo._id}/avatar`
    const userProfileUrl = `http://localhost:3001/users/me`



    function checkIfHasProfilePic() {
      axios.get(profilePicUrl,{
            headers: {
                'Authorization': `Bearer ${token}`,
                'Access-Control-Allow-Origin': '*',
            }
            }).then(result => {
                setHasAvatar(true)
            }).catch( error => {
                console.log(error)
            })
        
    }

    const memoizedCheckIfHasProfilePic = useCallback(
        () => {
            checkIfHasProfilePic()
        },
        [hasAvatar],
      );

    const readProfile = async () => {
        
      
            const data = await axios.get(userProfileUrl,{
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Access-Control-Allow-Origin': '*',
                }})

            if (!data) {
                throw new Error()
            }

            console.log(data.avatar === undefined)
                
          
      }

    readProfile()
    memoizedCheckIfHasProfilePic()




    return (
        <MainContainer>
            <PageHeader id={match.params.id}/>
                <ProfileWrapper>
                { hasAvatar
                            ?
                     <>
                       
                        <Profile>
                            
                                <img width="200" src={profilePicUrl}></img>
                        </Profile>
                     </>
                    :
                    <Profile>    

                            <p>Adicionar foto de perfil</p>
                            </Profile>

                        }
                   
                </ProfileWrapper>
            <InnerWrapper>   
                <FormWrapper>
                    <TextInput variation="outline" colorMode="light" type="text" onChange={item => setNome(item.target.value)} label="Nome" value={nome} />
                    <TextInput variation="outline" colorMode="light" type="email" onChange={ item => setEmail(item.target.value)} label="Email" value={email} />
                    <Button variation="primary" style={{ marginTop: '2rem' }} corDaOrelha={COLOR.gray80}>Salvar</Button>
                </FormWrapper>
            </InnerWrapper>
        </MainContainer>
    )
}

function mapStateToProps(state) {
    const userInfo = state.authentication.user
    const { token } = state.authentication

    return { userInfo, token, state }
  }

const connectedStore = connect(mapStateToProps)(ProfilePage)

export { connectedStore as ProfilePage }

