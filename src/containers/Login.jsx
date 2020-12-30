import React from 'react';
import { Link } from 'react-router-dom';

import googleIcon from '../assets/static/google.png';
import twitterIcon from '../assets/static/twitter.png';
import '../assets/styles/components/Login.scss';

const Login = () => (
    <section className="login">
        <div className="login__container">
            <h2 tabindex="0">Inicia Sesión</h2>
            <form action="" className="login__container--form">
                <input aria-label="Correo" className="input" type="text" name="" id="" placeholder="Correo" />
                <input aria-label="Password" className="input" type="password" name="" id="" placeholder="Contraseña" />
                <button className="button">Iniciar Sesión</button>
                <div className="login__container--remember-me">
                    <label for="remember">
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
            <p className="login__container--register">No tienes ninguna cuenta. 
                <Link to="/register">
                    Registrate
                </Link>
            </p>
        </div>
    </section>
);

export default Login;