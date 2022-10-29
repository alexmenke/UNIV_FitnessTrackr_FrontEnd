import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { updateRoutine, addActivityToRoutine, updateActivity } from '../api';
import {
    Grid,
    Paper,
    TextField,
    Button,
    Checkbox,
    Select
} from '@mui/material'

const EditRoutine = ({ routines, token, fetchRoutines }) => {
    const { routineId } = useParams();
    const [currentRoutine] = routines.filter(routine => routine.id === parseInt(routineId));
    if (currentRoutine === undefined) {
        return null;
    }

    const { name, goal, isPublic, activities, count, duration } = currentRoutine;

    const [newName, setNewName] = useState(name);
    const [newGoal, setNewGoal] = useState(goal);
    const [newIsPublic, setNewIsPublic] = useState(isPublic);
    const [newActivity, setNewActivity] = useState(activities);
    const [newCount, setNewCount] = useState(count);
    const [newDuration, setNewDuration] = useState(duration);

    const navigate = useNavigate();

    async function editRoutine() {
        const updatedRoutine = {
            token: token,
            name: newName,
            goal: newGoal,
            isPublic: newIsPublic,
            activities: newActivity,
            routineId
        }
        const results = await updateRoutine(updatedRoutine);
    }

    async function editActivity() {
        const updatedActivity = {
            token: token,
            count: newCount,
            duration: newDuration
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
                    editRoutine();
                    addActivityToRoutine();
                    editActivity();
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
                        label='Name'
                        placeholder={name}
                        fullWidth required
                        onChange={(event) => setNewName(event.target.value)} />
                    <TextField
                        style={{ marginBottom: '.75rem' }}
                        label='Goal'
                        placeholder={goal}
                        fullWidth required
                        onChange={(event) => setNewGoal(event.target.value)} />
                    <Checkbox
                        style={{ marginBottom: '.75rem' }}
                        label='Public'
                        onChange={(event) => setNewIsPublic(event.target.value)} />
                    <form>
                        <Select
                            style={{ marginBottom: '.75rem' }}
                            label='Activities'
                            fullWidth required
                            onChange={(event) => setNewActivity(event.target.value)}>
                            {
                                activities.map((activity, idx) => {
                                    return <option key={`${idx}:${activity.name}`} value={activity.name}>{activity.name}</option>
                                })
                            }
                        </Select>
                        <TextField
                            style={{ marginBottom: '.75rem' }}
                            label='Count'
                            placeholder={activities.count}
                            fullWidth required
                            onChange={(event) => setNewCount(event.target.value)} />
                        <TextField
                            style={{ marginBottom: '.75rem' }}
                            label='Duration'
                            placeholder={activities.duration}
                            fullWidth required
                            onChange={(event) => setNewDuration(event.target.value)} />
                    </form>
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