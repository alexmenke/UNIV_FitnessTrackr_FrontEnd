import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { updateActivity } from '../api';
import {
    Grid,
    Paper,
    TextField,
    Button,
} from '@mui/material'

const EditActivity = ({ activities, token, fetchActivities }) => {
    const { activityId } = useParams();
    const [currentActivity] = activities.filter(activity => activity.id === parseInt(activityId));
    if (currentActivity === undefined) {
        return null;
    }

    const { name, description } = currentActivity;

    const [newName, setNewName] = useState(name);
    const [newDescription, setNewDescription] = useState(description);

    const navigate = useNavigate();

    async function editActivity() {
        const updatedActivity = {
            token: token,
            name: newName,
            description: newDescription,
            activityId
        }
        const results = await updateActivity(updatedActivity)
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
                    editActivity();
                    navigate('/activities');
                }}>
                    <Grid
                        align='center'
                        className='editRoutineHeading'>
                        <h2>Edit Activity</h2>
                    </Grid>
                    <TextField
                        style={{ marginBottom: '.75rem' }}
                        label='Name'
                        placeholder={name}
                        fullWidth required
                        onChange={(event) => setNewName(event.target.value)} />
                    <TextField
                        style={{ marginBottom: '.75rem' }}
                        label='Description'
                        placeholder={description}
                        fullWidth required
                        onChange={(event) => setNewDescription(event.target.value)} />
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

export default EditActivity;