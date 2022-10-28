import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { updateRoutine } from '../api';
import {
    Grid,
    Paper,
    TextField,
    Button
} from '@mui/material'

const EditRoutine = ({ routines, token, fetchRoutines }) => {
    const { id } = useParams();
    const [currentRoutine] = routines.filter(routine => routine.id === id);
    console.log('testing editRoutine', currentRoutine)
    const { name, goal, isPublic } = currentRoutine;

    const [newName, setNewName] = useState(name);
    const [newGoal, setNewGoal] = useState(goal);
    const [newIsPublic, setNewIsPublic] = useState(isPublic);

    const navigate = useNavigate();

    async function editRoutine() {
        const updatedRoutine = {
            token: token,
            name: newName,
            goal: newGoal,
            isPublic: newIsPublic,
            id: id
        }
        await updateRoutine(updatedRoutine)
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
                    editRoutine();
                    fetchRoutines();
                    navigate('/routines');
                }}>
                    <Grid
                        align='center'
                        className='editRoutineHeading'>
                            <h2>Edit Routine</h2>
                    </Grid>
                    <TextField
                        style={{ marginBottom: '.75rem' }}
                        placeholder={name}
                        fullWidth required
                        onChange={(event) => setNewName(event.target.value)} />
                    <TextField
                        style={{ marginBottom: '.75rem' }}
                        placeholder={goal}
                        fullWidth required
                        onChange={(event) => setNewGoal(event.target.value)} />
                    <Button
                        type='submit'
                        color='primary'
                        variant='contained'
                        style={{
                            color: '#646C79',
                            backgroundColor: '#FB9039'
                        }}
                        fullWidth>
                        Update
                    </Button>
                </form>
            </Paper>
        </Grid>

    )
}

export default EditRoutine;