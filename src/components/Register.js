import React, { useState } from 'react';
import { registerUser } from '../api';

const Register = ({ setToken, navigate }) => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const handleSubmit = async () => {
    if (password !== confirmPassword) {
      alert("Password Don't Match")
      return null
    }
    const results = await registerUser(username, password);
    if (results.token) {
      setToken(results.token)
      window.localStorage.setItem('token', results.token)
      navigate('/')
    } else {
      console.log('error during handlSubmit Register')
    }
  }

  return (
    <>
      <h1>Register</h1>
      <form onSubmit={(event) => {
        event.preventDefault();
        handleSubmit();
      }}>
        <input
        type='text'
        label='Enter Username'
        minLength={4}
        placeholder="Enter Username"
        required
        onChange={(event) => setUsername(event.target.value)}
      />
        <input
          type='password'
          label='Enter Password'
          minLength={4}
          placeholder="Enter Password"
          required
          onChange={(event) => setPassword(event.target.value)} />
        <input
          type='password'
          label='Confirm Password'
          minLength={4}
          placeholder="Confirm Password"
          required
          onChange={(event) => setConfirmPassword(event.target.value)} />
        <button variant='contained' type='submit'>Submit</button>
      </form>
    </>
  )
}

export default Register;