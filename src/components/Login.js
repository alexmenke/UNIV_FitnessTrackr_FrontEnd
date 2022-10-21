import React, { useState } from 'react';
import { loginUser } from '../api';

const Login = ({setToken, navigate}) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const verifyPassword = () => {
        if (password === confirmPassword) {
            handleSubmit();
        } else {
            alert("Passwords do not match, please try again.")
        }
    }

    const handleSubmit = async () => {
        const results = await loginUser(username, password);
        if (results.success) {
            setToken(results.data.token);
            window.localStorage.setItem('token', results.data.token);
            navigate('/myroutines');
        } else {
            console.log(error.message)
        }
    }
    return (
        <form onSubmit={(event) => {
            event.preventDefault();
            verifyPassword();
        }}>
            <input type='text' placeholder='Enter username'></input>
            <input type='text' placeholder='Enter password'></input>
            <input type='text' placeholder='Confirm password'></input>
            <button type='submit'>Sign In</button>
        </form>
    )
}

export default Login;