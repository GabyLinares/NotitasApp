import React from 'react'
import { Navigate } from 'react-router-dom';
import { Register } from './Register';

export const Login = () => {
    return (
        <div className='formContainer'>
            <div className='tituloNotitas'>Notitas</div>
            <div className='formWrapper'>
                <div className='titleWrapper'>Login</div>
                <form>
                    <input placeholder='usuario' required></input>
                    <input type='password' placeholder='contraseña' required></input>
                    <button>Ingresar</button>
                </form>
                <p>No tienes cuenta? Regístrate</p>
            </div>
        </div>
    )
}