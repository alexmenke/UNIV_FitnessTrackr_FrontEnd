import React, { useState } from 'react';
import { registerUser } from '../api';
import {
  Grid,
  Paper,
  TextField,
  Button
} from '@mui/material'

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

  const paperStyle = {
    padding: 20,
    width: 300,
    margin: '20px auto'
  }

  return (
    <Grid>
        <Paper elevation={10} style={paperStyle}>
        <form onSubmit={(event) => {
          event.preventDefault();
          handleSubmit();
        }}>
          <Grid
            align='center'
            className='loginAndRegisterHeading'>
            <h2>Register</h2>
          </Grid>
          <TextField
            style={{ marginBottom: '.75rem' }}
            type='text'
            label='Enter Username'
            inputProps={{
              pattern: '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,16}'
            }}
            fullWidth
            placeholder="Enter Username"
            required
            onChange={(event) => setUsername(event.target.value)}
          />
          <TextField
            style={{ marginBottom: '.75rem' }}
            type='password'
            label='Enter Password'
            inputProps={{
              minLength: 8,
              maxLength: 20
            }}
            fullWidth
            placeholder="Enter Password"
            required
            onChange={(event) => setPassword(event.target.value)} />
          <TextField
            style={{ marginBottom: '.75rem' }}
            type='password'
            label='Confirm Password'
            inputProps={{
              minLength: 8,
              maxLength: 20
            }}
            fullWidth
            placeholder="Confirm Password"
            required
            onChange={(event) => setConfirmPassword(event.target.value)} />
          <h4>Password Requirements:</h4>
            <ul>
                <li>Between 8 and 16 characters</li>
                <li>A capital letter</li>
                <li>A lowercase letter</li>
                <li>A number</li>
            </ul>
          <Button
            type='submit'
            color='primary'
            variant='contained'
            fullWidth
            style={{
              color: '#646C79',
              backgroundColor: '#FB9039'
            }}>
            Register
          </Button>
        </form>
      </Paper>
    </Grid>
  )
}

export default Register;