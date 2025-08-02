import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({
        token: localStorage.getItem('token'),
        isAuthenticated: null,
        loading: true,
        user: null
    });

    // Mock function to load user - in a real app, this would be an API call
    const loadUser = () => {
        const token = localStorage.getItem('token');
        if (token) {
            // Here you would typically verify the token with the backend and get user info
            setAuth({
                token: token,
                isAuthenticated: true,
                loading: false,
                user: { username: 'testuser' } // Mock user
            });
        } else {
            setAuth({
                token: null,
                isAuthenticated: false,
                loading: false,
                user: null
            });
        }
    };

    useEffect(() => {
        loadUser();
    }, []);

    const login = (token) => {
        localStorage.setItem('token', token);
        loadUser();
    };

    const logout = () => {
        localStorage.removeItem('token');
        setAuth({
            token: null,
            isAuthenticated: false,
            loading: false,
            user: null
        });
    };

    return (
        <AuthContext.Provider value={{ ...auth, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
