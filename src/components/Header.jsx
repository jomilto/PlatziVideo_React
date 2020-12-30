import React from 'react';
import { Link } from 'react-router-dom';

import '../assets/styles/components/Header.scss';
import logo from '../assets/static/logo.png';
import userIcon from '../assets/static/user.png';

const Header = () => (
    <header className="header">
        
        <Link to="/">
            <img className="header__img" src={logo} alt="logo_platzi_video" />
        </Link>

        <div className="header__menu">
            <div className="header__menu--profile">
                <img src={userIcon} alt="User" />
                <p>Perfil</p>
            </div>
            <ul>
                <li>
                    <a href="#">Cuenta</a>
                </li>
                <li>
                    <a href="#">Cerrar Sesión</a>
                </li>
            </ul>
        </div>
    </header>
);

export default Header;