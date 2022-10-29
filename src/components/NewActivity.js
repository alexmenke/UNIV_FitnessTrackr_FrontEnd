import React, { useState } from 'react';
import { createActivity } from '../api';
import {
    Grid,
    Paper,
    TextField,
    Button,
} from '@mui/material'

const NewActivity = ({ token, navigate, fetchActivities }) => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    const addActivity = async () => {
        const results = await createActivity({token, name, description });
        console.log("testing addactivity", results)
        if (results.id) {
            fetchActivities();
            navigate('/activities');
        } else {
            alert('Error creating new activity. Please try again.')
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
                        className='newActivityHeading'>
                        <h2>Create a new activity</h2>
                    </Grid>
                    <TextField
                        style={{ marginBottom: '.75rem' }}
                        label="Name"
                        placeholder="Enter name"
                        fullWidth required
                        onChange={(event) => setName(event.target.value)} />
                    <TextField
                        style={{ marginBottom: '.75rem' }}
                        label="Description"
                        placeholder="Enter description"
                        fullWidth required
                        onChange={(event) => setDescription(event.target.value)} />
                    {/* <TextField
                        style={{ marginBottom: '.75rem' }}
                        label="Count"
                        placeholder="Enter count"
                        fullWidth required
                        onChange={(event) => setCount(event.target.value)} />
                    <TextField
                        style={{ marginBottom: '.75rem' }}
                        label="Duration"
                        placeholder="Enter duration"
                        fullWidth required
                        onChange={(event) => setDuration(event.target.value)} /> */}

                    <Button
                        onClick={async () => addActivity()}
                        style={{
                            color: '#646C79',
                            backgroundColor: '#FB9039'
                        }}
                        type='submit'
                        variant='contained'
                        fullWidth>
                        Add Activity
                    </Button>
                </form>
            </Paper>
        </Grid>
    )
}

export default NewActivity;