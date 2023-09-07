import React from 'react'
import { Navigate } from 'react-router-dom';
import Login from './Login';

export const Register = () => {
    return (
        <div className='formContainer'>
            <div className='tituloNotitas'>Notitas</div>
            <div className='formWrapper'>
                <div className='titleWrapper'>Registro</div>
                <form>
                    <input placeholder='usuario' required></input>
                    <input type='password' placeholder='contraseña' required></input>
                    <input type='password' placeholder='confirmar contraseña' required></input>
                    <button>Registrarse</button>
                </form>
                <p>Ya tienes cuenta? Ingresa</p>
            </div>
        </div>
    )
}
