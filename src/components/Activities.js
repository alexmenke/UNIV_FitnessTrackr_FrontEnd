import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
    Paper,
    Button,
    Card,
    CardContent,
    Grid,
} from '@mui/material';
import styles from '../style.css';

const Activities = ({ activities, token, fetchActivities }) => {
    const paperStyle = {
        padding: 20,
        width: 350,
        margin: '1rem auto'
    }

    useEffect(() => {
        fetchActivities();
    }, [token])

    return (
<div className='activityContainer'>
            <Grid
                container
                gap={'2rem'}
                direction='row'
                alignItems='flex-start'
                justifyContent='center'
                justify='flex-start'>
                <div className='activityHeader'>
                    {token ? (
                        <Link to='/activities/new-activity'>
                            <Button style={{ color: '#FB9039' }}>Create new activity</Button>
                        </Link>
                    ) : (
                        <p><Link to='/register'>Register</Link> or <Link to='/login'>login</Link> to create a new activity.</p>
                    )}
                </div>
            </Grid>
            {
                activities.map((activity) => {
                    const { name, description, id } = activity;
                    return (
                        <div className='activities' key={id}>
                            <Grid
                                container
                                gap={'20rem'}
                                direction='row'
                                alignItems='flex-start'
                                justifyContent='center'
                                justify='flex-start'>
                                <Paper elevation={10} style={paperStyle}>
                                    <Card className={styles.singleActivity}>
                                        <CardContent>
                                            <h3 className='activityName'>{name}</h3>
                                            <p className='activitiyInfo'>{description}</p>
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

export default Activities;