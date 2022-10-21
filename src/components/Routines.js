import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Routines = ({ routines, token, fetchRoutines }) => {

    useEffect(() => {
        fetchRoutines();
    }, [token])

    return (
        <div>
            {token ? (
                <Link to='/routines/new-routine'>
                    <button>Create new routine</button>
                </Link>
            ) : (
                <p><Link to='/register'>Register</Link> or <Link to='/login'>login</Link> to create a routine.</p>
            )}

            {
                routines.map((routine) => {
                    const { name, goal, creatorName } = routine;
                    return (
                        <div className='routines'>
                            <h3 className='routineName'>{name}</h3>
                            <p className='routineInfo'>{goal}</p>
                            <p className='routineInfo'>Created by: {creatorName}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Routines;