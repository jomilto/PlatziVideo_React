import React from 'react';
import { Link } from 'react-router-dom';

import '../assets/styles/components/Register.scss'

const Register = () => (
    <section className="registro">
        <div className="registro__container">
            <h2>Registrate</h2>
            <form action="" className="registro__container--form">
                <input className="input" type="text" name="" id="" placeholder="Nombre" />
                <input className="input" type="text" name="" id="" placeholder="Apellidos" />
                <input className="input" type="text" name="" id="" placeholder="Correo" />
                <input className="input" type="password" name="" id="" placeholder="Contraseña" />
                <button className="button">Crear Cuenta</button>
            </form>
            <Link to="/login">
                Iniciar Sesión
            </Link>
        </div>
    </section>
);

export default Register;