import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import { Register } from './Register';

export const Login = () => {

    const navigate = useNavigate();

  function handleClick() {
    navigate("/inicio");
  }

    return (
        <div className='formContainer'>
            <div className='tituloNotitas'>Notitas</div>
            <div className='formWrapper'>
                <div className='titleWrapper'>Login</div>
                <form>
                    <input placeholder='usuario' /* required */></input>
                    <input type='password' placeholder='contraseña' /* required */></input>
                    <button onClick={handleClick}>Ingresar</button>
                </form>
                <p>No tienes cuenta? <a href='/registro'>Regístrate</a></p>
            </div>
        </div>
    )
}