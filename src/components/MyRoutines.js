import React, {useEffect} from 'react';

const MyRoutines = ({user, getMe}) => {

    useEffect(() => {
        getMe();
    }, [])

    return (
        <h1>My Routines</h1>
    )
}

export default MyRoutines;