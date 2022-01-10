import React, { useEffect, useState } from "react";
import {  useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { signUp } from "../../redux/actions/usersActions";
import { Button, FormGroup, TextInput, Link } from "../../components";
import logo from "../../assets/logo/logo-complete.svg"
import { Hero,  Wrapper, Logo, FormContainer } from './styles';
import {  Info2, Info1 } from "../../components/Typography";
import { COLOR } from "../../tokens/colors";




export const SignUpPage = () => {

    const dispatch = useDispatch();
    const [ password, setPassword ] = useState('');
    const [ confirmedPassword, setConfirmedPassword ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ name, setName ] = useState('');
    const [ buttonState, setButtonState ] = useState(true);
    const [ errorState, setErrorState ] = useState('');


    const history = useHistory();
    const { user } = useSelector( state => state.authentication )

    function handleClickOnCadastrar(event) {
        event.preventDefault();
        dispatch(signUp({ name, email, password }, history));
    };

    function onBlurHandler() {
        if (password !== confirmedPassword) {
            setErrorState('Senhas precisam ser iguais')
        } else {
            setErrorState('')
        }
    }

    function validateFields() {
        if (
            name !== '' &&
            email !== '' &&
            password !== '' &&
            confirmedPassword !== '' &&
            password === confirmedPassword
        ) {
            setButtonState(false)
        } else {
            setButtonState(true)
        }

    }

    useEffect( () => {
        validateFields()
    }, [name,email,password,confirmedPassword])
      

        return (

            <Hero>
                <Wrapper>
                    <Logo>
                        <img src={logo} alt="Mediabase" />
                    </Logo>
                    {/* <Info1 style={{ textAlign: "center" }} color={COLOR.white}>Bem vindo ao Mediabase</Info1> */}
                        <FormContainer onSubmit={handleClickOnCadastrar}> 
                        <FormGroup>
                                <TextInput
                                     variation="filled"
                                     colorMode="dark"
                                    onChange={e => setName(e.target.value,
                                   )}
                                    value={name}
                                    placeholder="Nome"
                                    type="text"
                                    />
                            </FormGroup>
                            <FormGroup>
                                <TextInput
                                     variation="filled"
                                     colorMode="dark"
                                    onChange={e => setEmail(e.target.value,
                                   )}
                                    value={email}
                                    placeholder="Email"
                                    type="email"
                                    />
                            </FormGroup>
                            <FormGroup>
                                <TextInput
                                     variation="filled"
                                     colorMode="dark"
                                    onChange={e => setPassword(
                                    e.target.value)}
                                    value={password}
                                    placeholder="Senha"
                                    type="password"
                                    />
                            </FormGroup>
                            <FormGroup>
                                <TextInput
                                    variation="filled"
                                    colorMode="dark"
                                    onChange={e => setConfirmedPassword(
                                    e.target.value)}
                                    value={confirmedPassword}
                                    placeholder="Confirmar senha"
                                    type="password"
                                    onBlur={onBlurHandler}
                                    error={ false || errorState }
                                    />
                            </FormGroup>

                            <div style={{ 
                                paddingTop: "1rem",
                                paddingBottom: "1rem",
                                width: "100%",
                                display: "inline-flex",
                                justifyContent: "space-between",
                                alignItems: "center"
                                }}>
                                <Button disabled={buttonState} variation="primary">Cadastrar</Button>
                                
                            </div>
                            <div style={{
                                position: "relative",
                                textAlign: "center",
                                paddingTop: "3rem",
                                borderTop: "1px solid rgba(255,255,255,.15)"
                            }}>
                                <Info2 color="gray">Já é cadastrado? <Link to="/entrar" color={COLOR.brandRed90} hoverColor={COLOR.brandRed90}>Faça o login</Link></Info2>
                            </div>
                        </FormContainer>
                    </Wrapper>
                </Hero>
        );
    
}



