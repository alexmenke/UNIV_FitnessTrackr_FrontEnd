import React, { useState, useEffect } from 'react';
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

const Routines = ({ routines, token, fetchRoutines }) => {
    const paperStyle = {
        padding: 20,
        width: 350,
        margin: '1rem auto'
    }

    useEffect(() => {
        fetchRoutines();
    }, [token])

    return (
        <div className='routineContainer'>
            <Grid
                container
                gap={'2rem'}
                direction='row'
                alignItems='flex-start'
                justifyContent='center'
                justify='flex-start'>
                <div className='routineHeader'>
                    {token ? (
                        <Link to='/routines/new-routine'>
                            <button>Create new routine</button>
                        </Link>
                    ) : (
                        <p><Link to='/register'>Register</Link> or <Link to='/login'>login</Link> to create a routine.</p>
                    )}
                </div>
            </Grid>
            {
                routines.map((routine) => {
                    const { name, goal, routineId, creatorName } = routine;
                    return (
                        <div className='routines' key={routineId}>
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
                                            <p className='routineInfo'>Created by: {creatorName}</p>
                                        </CardContent>
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

export default Routines;