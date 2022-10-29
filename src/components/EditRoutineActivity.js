import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { updateRoutineActivity, deleteRoutineActivity } from '../api';
import {
    Grid,
    Paper,
    TextField,
    Button,
} from '@mui/material'

const EditRoutineActivity = ({ activities, token }) => {
    const { activityId } = useParams();
    const [currentRoutineActivity] = activities.filter(activity => activity.id === parseInt(activityId));
    if (currentRoutineActivity === undefined) {
        return null;
    }

    const { name, count, duration } = currentRoutineActivity;
    const [newCount, setNewCount] = useState(count);
    const [newDuration, setNewDuration] = useState(duration);
    const navigate = useNavigate();

    async function editRoutineActivity() {
        const updatedRoutineActivity = {
            count: newCount,
            duration: newDuration,
            activityId
        }
        const results = await updateRoutineActivity(updatedRoutineActivity)
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
                    editRoutineActivity();
                    navigate('/myroutines');
                }}>
                    <Grid
                        align='center'
                        className='editRoutineHeading'>
                        <h2>Edit `${currentRoutineActivity.name}`</h2>
                    </Grid>
                    <TextField
                        style={{ marginBottom: '.75rem' }}
                        label='Count'
                        placeholder={count}
                        fullWidth required
                        onChange={(event) => setNewCount(event.target.value)} />
                    <TextField
                        style={{ marginBottom: '.75rem' }}
                        label='Duration'
                        placeholder={duration}
                        fullWidth required
                        onChange={(event) => setNewDuration(event.target.value)} />
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
                    <Button
                        onClick={() => deleteRoutineActivity(token, id)}
                        style={{ color: '#FB9039' }}>
                        Delete Routine Activity
                    </Button>
                </form>
            </Paper>
        </Grid>
    )
}

export default EditRoutineActivity;