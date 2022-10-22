import React, {useEffect} from 'react';

const MyRoutines = ({user, getMe}) => {

    useEffect(() => {
        getMe();
    }, [])

    return (
        <div>
        <h1>My Routines</h1>
        </div>

    )
}

export default MyRoutines;