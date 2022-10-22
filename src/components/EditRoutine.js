import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { updateRoutine } from '../api'

const EditRoutine = ({routines, token, fetchRoutines }) => {
    const { routineId } = useParams();
    const [currentRoutine] = routines.filter(routine => routine.id === routineId);
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
            id: routineId
        }
        await updateRoutine(updatedRoutine)
    }

    return (
        <form onSubmit={(event) => {
            event.preventDefault();
            editRoutine();
            fetchRoutines();
            navigate('/routines');
        }}>
            <input
                placeholder='name'
                onChange={(event) => setNewName(event.target.value)} />
            <input
                placeholder='goal'
                onChange={(event) => setNewGoal(event.target.value)} />
            <input
                placeholder='isPublic'
                onChange={(event) => setNewIsPublic(event.target.value)} />
            <button type='submit'>Update</button>
        </form>
    )
}

export default EditRoutine;