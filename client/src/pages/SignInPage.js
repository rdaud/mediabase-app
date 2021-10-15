import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { signIn } from "../redux/actions/usersActions";
import { ThemeButton } from "../components/Button";
import logo from "../utils/logo.svg"
import styled from 'styled-components'
import { useDispatch, useSelector } from "react-redux";
import { useCookies } from 'react-cookie';




const Logo = styled.div`
    position: relative;
    margin: 0 auto;
    text-align: center;
    width: 100%;
    margin: 4rem 0;
`



export default function SignInPage() {

    const dispatch = useDispatch();
 
    const [ password, setPassword ] = useState('');
    const [ email, setEmail ] = useState('');
    const history = useHistory();
    const { user } = useSelector( state => state.authentication )


    const handleSignInClick = (event) => {
        event.preventDefault();
        dispatch(signIn({email, password}, history));
      };



        return (

            <div className="App">
                <Logo>
                    <img src={logo} alt="Mediabase" />
                </Logo>
                <div className="auth-wrapper">
                    <div className="auth-inner"> 
                         <form onSubmit={handleSignInClick}>
                            <div className="nav-list">
                                <div>
                                    <NavLink className="nav-link" to={"/entrar"} activeClassName="selected">Entrar</NavLink>
                                </div>
                                <div>
                                    <NavLink className="nav-link" to={"/cadastrar"} activeClassName="selected"> Cadastrar</NavLink>
                                </div>
                            </div>

                            <div className="form-group">
                                <label>Email</label>
                                <input type="email"  onChange={e => setEmail(e.target.value)} value={email} className="form-control" placeholder="Email" />
                            </div>

                            <div className="form-group">
                                <label>Senha</label>
                                <input type="password" value="FakePSW" onChange={e => setPassword(e.target.value)} value={password} className="form-control" placeholder="Informe sua senha" />
                            </div>

                            <div className="form-group">
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                    <label className="custom-control-label" htmlFor="customCheck1">Lembrar-me</label>
                                </div>
                            </div>

                            <ThemeButton>Entrar</ThemeButton>

                            <p className="forgot-password text-right">
                                Esqueceu a <a href="#">senha?</a>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
            

            
        );
    
}



