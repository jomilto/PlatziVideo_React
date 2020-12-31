import React from 'react';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';

import '../assets/styles/components/Header.scss';
import logo from '../assets/static/logo.png';
// import userIcon from '../assets/static/user.png';
import gravatar from "../utils/gravatar";

const Header = (props) => {
    const { user } = props;

    const hasUser = Object.keys(user).length > 0;

    return (
        <header className="header">
            
            <Link to="/">
                <img className="header__img" src={logo} alt="logo_platzi_video" />
            </Link>

            {hasUser &&
                <div className="header__menu">
                    <div className="header__menu--profile">
                        <img 
                            src={ gravatar(user.email) } 
                            alt="User" 
                        />
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
            }
        </header>
    )
};

const mapStateToProps = (state) => {
    console.log(state);
    return {
        user: state.user
    };
};

export default connect(mapStateToProps,null)(Header);