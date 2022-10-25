import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Activities = ({ activities, token, fetchActivities }) => {
    useEffect(() => {
        fetchActivities();
    }, [token])
    return (
        <div>
                <div>
                    {token ? (
                        <Link to='/activities/new-activity'>
                            <button>Create new Activities</button>
                        </Link>
                    ) : (
                        <p><Link to='/register'>Register</Link> or <Link to='/login'>Login</Link> to create an activitiy.</p>
                    )}
                </div>
            {
                activities.map((activitiy) => {
                    const { name, goal, id, creatorName, activities } = activitiy;
                    return (
                        <div key={id}>
                                            <h3 className='routineName'>{name}</h3>
                                            <p className='routineInfo'>{goal}</p>
                                            <p className='routineInfo'>Created by: {creatorName}</p>
                                            <p className='routineInfo'>Activities: (have name, description, count/duration)</p>
                            
                        </div>
                    )
                })
            }

        </div>
    )
}

export default Activities;