import React, { useState } from 'react';
import { connect } from "react-redux";
import { loginRequest } from "../actions";
import { Link } from 'react-router-dom';

import Header from "../components/Header";

import googleIcon from '../assets/static/google.png';
import twitterIcon from '../assets/static/twitter.png';
import '../assets/styles/components/Login.scss';

const Login = (props) => {
    const [ form, setValues ] = useState({
        email: '',
        password: ''
    });

    const handleInput = (event) => {
        setValues({
            ...form,
            [event.target.name]: event.target.value
        })
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        props.loginRequest(form);
        props.history.push('/');
    };

    return (
        <>
            <Header isLogin/>
            <section className="login">
                <div className="login__container">
                    <h2 tabIndex="0">Inicia Sesión</h2>
                    <form onSubmit={handleSubmit} className="login__container--form">
                        <input 
                            aria-label="Correo" 
                            className="input" 
                            type="text" 
                            name="email" 
                            id="email" 
                            placeholder="Correo"
                            onChange={handleInput}
                        />
                        <input 
                            aria-label="Password" 
                            className="input" 
                            type="password" 
                            name="password" 
                            id="password" 
                            placeholder="Contraseña"
                            onChange={handleInput} 
                        />
                        <button className="button">Iniciar Sesión</button>
                        <div className="login__container--remember-me">
                            <label htmlFor="remember">
                                <input type="checkbox" name="remember" id="remember" value="remember" />
                                <span>Recuérdame</span>
                            </label>
                            <a href="#">Olvidé mi Contraseña</a>
                        </div>
                    </form>
                    <div className="login__container--social-media">
                        <div><img src={googleIcon} alt="Google" /> Inicia sesión con Google</div>
                        <div><img src={twitterIcon} alt="Twitter" /> Inicia sesión con Twitter</div>
                    </div>
                    <p className="login__container--register">No tienes ninguna cuenta. { ' ' }
                        <Link to="/register">
                            Registrate
                        </Link>
                    </p>
                </div>
            </section>
        </>
    )
};

const mapDispatchToProps = {
    loginRequest,
};

export default connect(null, mapDispatchToProps)(Login);