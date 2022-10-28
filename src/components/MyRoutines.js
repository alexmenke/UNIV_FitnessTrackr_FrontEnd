import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
    Paper,
    Button,
    Card,
    CardContent,
    CardActions,
    Grid,
} from '@mui/material';
import styles from '../style.css';
import { deleteRoutine } from '../api';

const MyRoutines = ({ myRoutines, token, fetchMyRoutines }) => {
    const paperStyle = {
        padding: 20,
        width: 350,
        margin: '1rem auto'
    }

    useEffect(() => {
        fetchMyRoutines(token);
    }, [])

    return (
        <div>
            <h1>My Routines</h1>
            <Link to='/routines/new-routine'>
                <Button style={{ color: '#FB9039' }}>Create new routine</Button>
            </Link>
            {
                myRoutines.map((routine) => {
                    const { name, goal, id, activities } = routine;
                    return (
                        <div className='myRoutines' key={id}>
                            <Grid
                                container
                                gap={'20rem'}
                                direction='row'
                                alignItems='flex-start'
                                justifyContent='center'
                                justify='flex-start'>
                                <Paper elevation={10} style={paperStyle}>
                                    <Card className={styles.singleRoutine}>
                                        <CardContent>
                                            <h3 className='routineName'>{name}</h3>
                                            <p className='routineInfo'>{goal}</p>
                                            <div> 
                                                {routine.activities.map((activity, index) => {
                                                    return (
                                                        <>
                                                            <h5> {index + 1}. Activity: {activity.name} </h5>
                                                            <h6> Description: {activity.description} </h6>
                                                            <h6> Duration: {activity.duration} Minutes </h6>
                                                            <h6> Count : {activity.count} Reps </h6>
                                                        </>)
                                                })}
                                            </div> 
                                        </CardContent>
                                        <CardActions>
                                            <Link to={`/routines/edit-routine/${id}`}>
                                                <Button
                                                    style={{ color: '#FB9039' }}>
                                                    Edit Routine
                                                </Button>
                                            </Link>
                                            <Button
                                                onClick={() => deleteRoutine(token, id)}
                                                style={{ color: '#FB9039' }}>
                                                Delete Routine
                                            </Button>
                                        </CardActions>
                                    </Card>
                                </Paper>
                            </Grid>
                        </div>
                    )
                })
            }
        </div>

    )
}

export default MyRoutines;