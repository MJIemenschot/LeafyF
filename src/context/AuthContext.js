import React, { createContext, useState, useEffect } from 'react';
import {useHistory} from "react-router-dom";
import axios from "axios";

import jwt_decode from "jwt-decode";

export const AuthContext = createContext({});

function AuthContextProvider({ children }) {
    const history = useHistory();
    const [ authState, setAuthState ] = useState({
        user: null,
        status: 'pending',
    })

    function isTokenValid(jwtToken) {
        const decodedToken = jwt_decode(jwtToken);
        const expirationUnix = decodedToken.exp;
        const now = new Date().getTime();
        const currentUnix = Math.round(now / 1000);
        const isTokenStillValid = expirationUnix - currentUnix > 0;

        return isTokenStillValid;
    }

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!authState.user && token && isTokenValid(token)){
            const decodedToken = jwt_decode(token);
            fetchUserData(token, decodedToken.sub)
        } else {
            setAuthState({
                user: null,
                status: 'done'
            })
            //history.push("/");
        }
    }, []);

    function login(jwtToken) {
        localStorage.setItem('token', jwtToken);
        const decodedToken = jwt_decode(jwtToken)
        const userId = decodedToken.sub;

        fetchUserData(jwtToken, userId);
    }

    async function fetchUserData(token, userId) {
        try {
            const result = await axios.get(`http://localhost:8080/api/v1/users/${userId}`, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                }
            });
            setAuthState({
                user: {
                    username: result.data.username,
                    email: result.data.email,
                    // sla hier nog rollen op bijv de data waar toegang toe is
                },
                status: 'done',
            });

            history.push('/profile');
        } catch(e) {
            console.error(e);
        }
    }

    function logout() {
        console.log('logout!');
        localStorage.removeItem('token');
        setAuthState({ user: null, status: 'done' });
        history.push('/');
    }

    const data = {
        ...authState,
        login: login,
        logout: logout,
    };

    return (
        <AuthContext.Provider value={data}>
            {authState.status === 'pending'
                ? <p>Loading...</p>
                : children
            }
        </AuthContext.Provider>
    );
}

export default AuthContextProvider;
