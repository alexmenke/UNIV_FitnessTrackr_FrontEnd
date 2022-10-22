import React, { useState } from 'react';
import { addNewRoutine } from '../api';

const NewRoutine = ({ token, navigate, fetchRoutines }) => {
    const [name, setName] = useState('');
    const [goal, setGoal] = useState('');
    const [isPublic, setIsPublic] = useState('false');

    const addRoutine = async () => {
        const results = await addNewRoutine(token, { name, goal, isPublic });
        if (results.success) {
            fetchRoutines();
            navigate('/routines');
        } else {
            alert('Error creating new routine. Please try again.')
        }
    }
    return (
        <form onSubmit={(event) => {
            event.preventDefault();
        }}>
            <input
                label='Name'
                placeholder='Enter name'
                onChange={(event) => setName(event.target.value)} />
            <input
                label='Goal'
                placeholder='Enter goal'
                onChange={(event) => setGoal(event.target.value)} />
            <button
                onClick={() => addRoutine()}
                type='submit'>
                Add Routine
            </button>
        </form>
    )
}

export default NewRoutine;