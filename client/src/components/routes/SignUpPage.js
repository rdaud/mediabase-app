import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { signUp } from "../../redux/action-creators";
import { ThemeButton } from "../Button";
import logo from "../../utils/logo.svg"
import styled from 'styled-components'
import { useDispatch, useSelector } from "react-redux";

const Logo = styled.div`
    position: relative;
    margin: 0 auto;
    text-align: center;
    width: 100%;
    margin: 4rem 0;
`



export default function SignUpPage() {

    const { error } = useSelector((state) => state.authentication);

    const [ name, setName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');

    const dispatch = useDispatch()
    const history = useHistory()

    const handleSignUpClick = (event) => {
        event.preventDefault();
        dispatch(signUp({ name, email, password }, history));
      };

   
        return (

            <div className="App">
                <Logo>
                    <img src={logo} alt="Mediabase" />
                </Logo>
                <div className="auth-wrapper">
                    <div className="auth-inner">
                        <form onSubmit={handleSignUpClick}>
                            <div className="nav-list">
                                <div>
                                    <NavLink className="nav-link" to={"/entrar"} activeClassName="selected">Entrar</NavLink>
                                </div>
                                <div>
                                    <NavLink className="nav-link" to={"/cadastrar"} activeClassName="selected"> Cadastrar</NavLink>
                                </div>
                            </div>

                            <div className="form-group">
                                <label>Nome</label>
                                <input type="text" onChange={e => setName(e.target.value)} value={name} className="form-control" placeholder="Nome" />
                            </div>

                            <div className="form-group">
                                <label>Email</label>
                                <input type="email" onChange={e => setEmail(e.target.value)} value={email} className="form-control" placeholder="Email" />
                            </div>

                            <div className="form-group">
                                <label>Senha</label>
                                <input type="password" onChange={e => setPassword(e.target.value)} value={password} className="form-control" placeholder="Senha" />
                            </div>

                            <ThemeButton>Criar conta</ThemeButton>

                            <p className="forgot-password text-right">
                                Já é cadastrado? <a href="/entrar">Fazer login</a>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
           
          
        );
    
}







