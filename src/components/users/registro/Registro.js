import React, { useState } from 'react';
import { CognitoUserAttribute } from 'amazon-cognito-identity-js';
import UserPool from '../UserPool'

import '../../../styles.css';
import './Registro.css';

const Registro = ({ handleCloseModal }) => {

    const [email, setEmail] = useState("");
    const [passwd, setPasswd] = useState("");
    const [userName, setUserName] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();

        const userPool = UserPool;

        const attributeList = [
            new CognitoUserAttribute({ Name: 'email', Value: email })
        ];

        userPool.signUp(userName, passwd, attributeList, null, (err, data) => {
            if (err) {
                console.log(err);
            } else {
                console.log(data);
            }
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
                <label htmlFor="email">Email</label>
                <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="direccion email"
                />
                <label htmlFor="passwd">Contraseña</label>
                <input
                    value={passwd}
                    onChange={(e) => setPasswd(e.target.value)}
                    placeholder="contraseña"
                    type='password'
                />
                <div className="button-container">
                    <button type="submit">Enviar</button>
                    <button type="button" onClick={handleCloseModal}>Cerrar</button>
                </div>
            </form>
        </div>
    );

};
export default Registro;