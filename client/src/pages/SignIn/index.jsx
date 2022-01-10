import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { signIn } from "../../redux/actions/usersActions";
import { Button, FormGroup, TextInput, Link } from "../../components";
import logo from "../../assets/logo/logo-complete.svg"
import { Hero,  Wrapper, Logo, FormContainer } from './styles';
import {  Info2 } from "../../components/Typography";
import { COLOR } from "../../tokens/colors";




export const SignInPage = () => {

    const dispatch = useDispatch();
    const [ password, setPassword ] = useState('');
    const [ email, setEmail ] = useState('');
    const history = useHistory();
    const { user } = useSelector( state => state.authentication )

    function handleSignInClick(event) {
        event.preventDefault();
        dispatch(signIn({email,password}, history));       
    };

        return (

            <Hero>
                <Wrapper>
                    <Logo>
                        <img src={logo} alt="Mediabase" />
                    </Logo>
                        <FormContainer onSubmit={handleSignInClick}> 
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

                            <div style={{ 
                                paddingTop: "1rem",
                                paddingBottom: "1rem",
                                width: "100%",
                                display: "inline-flex",
                                justifyContent: "space-between",
                                alignItems: "center"
                                }}>
                                <Button variation="primary">Entrar</Button>
                                <Link to="/recuperar-senha" color={COLOR.white} hoverColor={COLOR.brandRed90} fontSize={14}> 
                                    Esqueceu a senha?
                                </Link>
                            </div>
                            <div style={{
                                position: "relative",
                                textAlign: "center",
                                paddingTop: "3rem",
                                borderTop: "1px solid rgba(255,255,255,.15)"
                            }}>
                                <Info2 color="gray">Ainda não é cadastrado? <Link to="/cadastrar" color={COLOR.brandRed90} hoverColor={COLOR.brandRed90}>Faça seu cadastro</Link></Info2>
                            </div>
                        </FormContainer>
                    </Wrapper>
                </Hero>
        );
    
}



