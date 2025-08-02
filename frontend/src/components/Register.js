import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Register = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        password2: '',
    });
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    const { username, email, password, password2 } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async e => {
        e.preventDefault();
        if (password !== password2) {
            console.log('Passwords do not match');
        } else {
            try {
                const res = await fetch('/api/v1/auth/registration/', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ username, email, password, password2 }),
                });
                const data = await res.json();
                if (res.ok) {
                    login(data.key);
                    navigate('/');
                } else {
                    console.error('Registration failed:', data);
                }
            } catch (err) {
                console.error(err);
            }
        }
    };

    return (
        <div>
            <h1>Register</h1>
            <form onSubmit={onSubmit}>
                <div>
                    <input
                        type="text"
                        placeholder="Username"
                        name="username"
                        value={username}
                        onChange={onChange}
                        required
                    />
                </div>
                <div>
                    <input
                        type="email"
                        placeholder="Email"
                        name="email"
                        value={email}
                        onChange={onChange}
                        required
                    />
                </div>
                <div>
                    <input
                        type="password"
                        placeholder="Password"
                        name="password"
                        value={password}
                        onChange={onChange}
                        minLength="6"
                        required
                    />
                </div>
                <div>
                    <input
                        type="password"
                        placeholder="Confirm Password"
                        name="password2"
                        value={password2}
                        onChange={onChange}
                        minLength="6"
                        required
                    />
                </div>
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default Register;
