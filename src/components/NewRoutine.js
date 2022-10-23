import React, { useState } from 'react';
import { addNewRoutine } from '../api';
import {
    Grid,
    Paper,
    TextField,
    Button,
} from '@mui/material'

const NewRoutine = ({ token, navigate, fetchRoutines }) => {
    const [name, setName] = useState('');
    const [goal, setGoal] = useState('');

    const addRoutine = async () => {
        const results = await addNewRoutine(token, { name, goal });
        console.log("testing addroutine", results)
        if (results.success) {
            fetchRoutines();
            navigate('/routines');
        } else {
            alert('Error creating new routine. Please try again.')
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
                }}>
                    <Grid
                        align='center'
                        className='newRoutineHeading'>
                        <h2>Create a new routine</h2>
                    </Grid>
                    <TextField
                        style={{ marginBottom: '.75rem' }}
                        label="Name"
                        placeholder="Enter name"
                        fullWidth required
                        onChange={(event) => setName(event.target.value)} />
                    <TextField
                        style={{ marginBottom: '.75rem' }}
                        label="Goal"
                        placeholder="Enter goal"
                        fullWidth required
                        onChange={(event) => setGoal(event.target.value)} />
                    <Button
                        onClick={async () => addRoutine()}
                        style={{
                            color: '#646C79',
                            backgroundColor: '#FB9039'
                        }}
                        type='submit'
                        variant='contained'
                        fullWidth>
                        Add Routine
                    </Button>
                </form>
            </Paper>
        </Grid>
    )
}

export default NewRoutine;