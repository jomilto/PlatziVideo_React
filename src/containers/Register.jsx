import React, { useState } from 'react';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { registerRequest } from "../actions";

import '../assets/styles/components/Register.scss'

const Register = (props) => {

    const [ form, setValues ] = useState({
        email: '',
        name: '',
        password: ''
    })

    const handleInput = (event) => {
        setValues({
            ...form,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        props.registerRequest(form);
        props.history.push('/');
    };

    return (
        <section className="registro">
            <div className="registro__container">
                <h2>Registrate</h2>
                <form onSubmit={handleSubmit} className="registro__container--form">
                    <input 
                        className="input" 
                        type="text" 
                        name="name" 
                        id="name" 
                        placeholder="Nombre"
                        onChange={handleInput}
                    />
                    <input 
                        className="input" 
                        type="email" 
                        name="email" 
                        id="email" 
                        placeholder="Correo"
                        onChange={handleInput} 
                    />
                    <input 
                        className="input" 
                        type="password" 
                        name="password" 
                        id="password" 
                        placeholder="Contraseña"
                        onChange={handleInput}
                    />
                    <button className="button">Crear Cuenta</button>
                </form>
                <Link to="/login">
                    Iniciar Sesión
                </Link>
            </div>
        </section>
    )
};

const mapDispatchToProps = {
    registerRequest,
};

export default connect(null, mapDispatchToProps)(Register);