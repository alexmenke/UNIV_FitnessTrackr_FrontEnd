import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { updateRoutine, addActivityToRoutine, getActivities } from '../api';
import {
    Grid,
    Paper,
    TextField,
    Button,
    Checkbox,
    Select
} from '@mui/material'

const AddActivityToRoutine = ({activities, fetchActivities, setActivities, routineId, token}) => {
    const [newActivity, setNewActivity] = useState(activities);
    // console.log('testing activities', activities)
    const [count, setCount] = useState('');
    const [duration, setDuration] = useState('');

    const navigate = useNavigate();

    async function addActivity() {
        const response = await addActivityToRoutine()
    }

    async function fetchActivities() {
        const results = await getActivities()
        setActivities(results);
    }

    useEffect(() => {
        fetchActivities();
    }, [])

    return (
        <form onSubmit={(event) => {
            event.preventDefault();
            addActivityToRoutine();
            navigate(`/myroutines`)
        }}>
            <Select
                name='activities'
                id='activityId'
                value={activities}
                onChange={(event) => setNewActivity(event.target.value)}>
                {
                    activities.map((activity, idx) => {
                        return
                        <option
                            key={`${idx}:${activity.name}`}
                            value={activity.name}>{activity.name}
                        </option>

                    })
                }
            </Select>
            <TextField
                style={{ marginBottom: '.75rem' }}
                label='Count'
                placeholder='Enter count in reps here'
                fullWidth required
                onChange={(event) => setCount(event.target.value)} />
            <TextField
                style={{ marginBottom: '.75rem' }}
                label='Duration'
                placeholder="Enter duration in minutes here"
                fullWidth required
                onChange={(event) => setDuration(event.target.value)} />
            <Button
                variant='contained'
                type='submit'
                style={{
                    backgroundColor: '#FB9039',
                    color: '#646C79'
                }}>
                Add Activity
            </Button>
        </form>
    )
}

const EditRoutine = ({ routines, token, fetchRoutines }) => {
    const [activateActivity, setActivateActivity] = useState(false)
    const { routineId } = useParams();
    const [currentRoutine] = routines.filter(routine => routine.id === parseInt(routineId));
    if (currentRoutine === undefined) {
        return null;
    }

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
            routineId
        }
        const results = await updateRoutine(updatedRoutine);
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
                    <>
                        <Button
                            onClick={() => setActivateActivity(!activateActivity)}
                            style={{ color: '#FB9039' }}>
                            Add an activity
                        </Button>
                        {
                            activateActivity && <AddActivityToRoutine routineId={routineId} token={token} />
                        }
                    </>
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