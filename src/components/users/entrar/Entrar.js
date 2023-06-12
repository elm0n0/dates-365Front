import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AccountContext } from '../cuenta/Cuenta';

import '../../../styles.css';
import '../registro/Registro.css';

const Entrar = ({ handleCloseModal }) => {
    const [passwd, setPasswd] = useState("");
    const [userName, setUserName] = useState("");

    const { authenticate } = useContext(AccountContext);

    const navigate = useNavigate();

    const onSubmit = (e) => {
        e.preventDefault();
        authenticate(userName, passwd).then(data => {
            navigate('/dashboard');
        }).catch(err => {
            console.log('error', err);
        });
    };

    return (
        <div className="form-container">
            <form onSubmit={onSubmit}>
                <label htmlFor="username">Username</label>
                <input
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    placeholder="nombre de usuario"
                />
                <label htmlFor="passwd">Contraseña</label>
                <input
                    value={passwd}
                    onChange={(e) => setPasswd(e.target.value)}
                    placeholder="contraseña"
                    type='password'
                />
                <div className="button-container">
                    <button type="submit">Entrar</button>
                    <button type="button" onClick={handleCloseModal}>Cerrar</button>
                </div>
            </form>
        </div>
    );

};
export default Entrar;