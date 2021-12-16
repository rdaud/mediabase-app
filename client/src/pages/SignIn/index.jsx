import React, { useState } from "react";
import {  useHistory } from "react-router-dom";
import { signIn } from "../../redux/actions/usersActions";
import { Button, FormGroup, TextInput, Link } from "../../components";
import logo from "../../assets/logo/logo.svg"
import { useDispatch, useSelector } from "react-redux";
import { Hero,  Wrapper, Logo, FormContainer } from './styles';
import {  Info2, Info1 } from "../../components/Typography";
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
                    <button onClick={(e) => {
                        e.preventDefault()
                        dispatch(signIn({email,password}, history));       

                    }}>Teste</button>
               
                    <Info1 style={{ textAlign: "center" }} color={COLOR.white}>Bem vindo ao Mediabase</Info1>
                        <FormContainer onSubmit={handleSignInClick}> 
                            <FormGroup>
                                <TextInput
                                    onChange={e => setEmail(e.target.value,
                                   )}
                                    value={email}
                                    placeholder="Email"
                                    type="email"
                                    />
                                <TextInput
                                    onChange={e => setPassword(
                                    e.target.value)}
                                    value={password}
                                    placeholder="Senha"
                                    type="password"
                                    />
                                <div style={{ 
                                    paddingTop: "1rem",
                                    width: "100%",
                                    display: "inline-flex",
                                    justifyContent: "space-between",
                                    alignItems: "center"
                                    }}>
                                    <Button variation="primary">Entrar</Button>
                                    <Link color={COLOR.white} hoverColor={COLOR.gray90} fontSize={14} style={{opacity: "1"}}> 
                                        Esqueceu a senha?
                                    </Link>
                                </div>
                            </FormGroup>
                            <div style={{
                                position: "relative",
                                textAlign: "center",
                                paddingTop: "3rem",
                                borderTop: "1px solid rgba(255,255,255,.15)"
                            }}>
                            <Info2 color="gray">Ainda não é cadastrado? <Link to="/cadastrar" color={COLOR.brandRed90} hoverColor="red">Faça seu cadastro</Link></Info2>
                            </div>
                        </FormContainer>
                    </Wrapper>
                </Hero>
        
            
        );
    
}



