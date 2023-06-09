import React, { createContext } from 'react';
import { CognitoUser, AuthenticationDetails } from 'amazon-cognito-identity-js';
import Pool from '../UserPool';

const AccountContext = createContext();
const Cuenta = (props) => {

    

    const getSession = async () => {
        return await new Promise((resolve, reject) => {
            const user = Pool.getCurrentUser();
            if (user) {
                user.getSession((err, session) => {
                    if (err) {
                        reject();
                    } else {
                        resolve();
                    }
                })
            } else {
                reject();
            }
        });
    };

    const authenticate = async (Username, Password) => {
        return await new Promise((resolve, reject) => {
            const user = new CognitoUser({ Username, Pool });
            const authDetails = new AuthenticationDetails({ Username, Password, })

            user.authenticateUser(authDetails, {
                onSuccess: (data) => {
                    resolve(data);
                },
                onFailure: (err) => {
                    reject(err);
                    
                },
                newPasswordRequired: (data) => {
                    resolve(data);
                }
            })
        })
    }

    return (
        <AccountContext.Provider value={{ authenticate, getSession }}>
            {props.children}
        </AccountContext.Provider>
    );
}

export { Cuenta, AccountContext };
