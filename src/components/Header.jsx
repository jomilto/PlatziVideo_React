import React from 'react';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { logoutRequest } from "../actions";

import '../assets/styles/components/Header.scss';
import logo from '../assets/static/logo.png';
// import userIcon from '../assets/static/user.png';
import gravatar from "../utils/gravatar";

const Header = (props) => {
    const { user } = props;

    const hasUser = Object.keys(user).length > 0;

    const handleLogout = () => {
        props.logoutRequest({});
    };

    return (
        <header className="header">
            
            <Link to="/">
                <img className="header__img" src={logo} alt="logo_platzi_video" />
            </Link>
            
                <div className="header__menu">
                    <div className="header__menu--profile">
                        {hasUser ?
                            <>
                            <img 
                                src={ gravatar(user.email) } 
                                alt="User" 
                            />
                            <p>Perfil</p>
                            </>
                            :
                            <Link to="/login">
                                Iniciar Sesión
                            </Link>
                        }
                    </div>
                    {hasUser &&
                        <ul>
                            <li>
                                <a href="#">{user.email}</a>
                            </li>
                            <li>
                                <a 
                                    href="#logout" 
                                    onClick={handleLogout}
                                >Cerrar Sesión</a>
                            </li>  
                    </ul>
                    }
                </div>
        </header>
    )
};

const mapStateToProps = (state) => {
    return {
        user: state.user
    };
};

const mapDispatchToProps = {
    logoutRequest,
}

export default connect(mapStateToProps,mapDispatchToProps)(Header);