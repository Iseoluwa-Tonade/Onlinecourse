import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Navbar = () => {
    const { isAuthenticated, logout, user } = useContext(AuthContext);

    const authLinks = (
        <ul>
            <li>
                <span>Hello, {user && user.username}</span>
            </li>
            <li>
                <a onClick={logout} href="#!">
                    Logout
                </a>
            </li>
        </ul>
    );

    const guestLinks = (
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/login">Login</Link>
            </li>
            <li>
                <Link to="/register">Register</Link>
            </li>
        </ul>
    );

    return <nav>{isAuthenticated ? authLinks : guestLinks}</nav>;
};

export default Navbar;
