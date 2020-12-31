import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import '../assets/styles/components/Register.scss'

const Register = () => {
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
        console.log(form);
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

export default Register;