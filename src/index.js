import React, {
    useState,
    useEffect
} from 'react';
import ReactDOM from 'react-dom/client';
import {
    Route,
    BrowserRouter,
    Routes,
    useNavigate
} from 'react-router-dom';
import './style.css';
import {
    getRoutines,
    getUserInfo,
    getMyRoutines,
    getActivities
} from './api/index.js';
import {
    Navbar,
    Login,
    Register,
    MyRoutines,
    Routines,
    Activities,
    Home,
    NewRoutine,
    EditRoutine,
    NewActivity,
    EditActivity,
    EditRoutineActivity
} from './components'

const App = () => {
    const [routines, setRoutines] = useState([]);
    const [activities, setActivities] = useState([]);
    const [myRoutines, setMyRoutines] = useState([]);
    const [token, setToken] = useState('');
    const [user, setUser] = useState('');
    const navigate = useNavigate();

    function logout() {
        window.localStorage.removeItem('token');
        setToken('');
        setUser('');
    }

    async function fetchRoutines() {
        const results = await getRoutines()
        setRoutines(results);
    }

    async function fetchMyRoutines() {
        if (user) {
            const results = await getMyRoutines(token, user)
            // console.log('testing myRoutines', results)
            // console.log("testing username", user)
            setMyRoutines(results);
        }
    }

    async function fetchActivities() {
        const results = await getActivities()
        setActivities(results);
    }

    async function getMe() {
        const storedToken = window.localStorage.getItem('token');

        if (!token) {
            if (storedToken) {
                setToken(storedToken);
            }
            return;
        }

        const { username } = await getUserInfo(token)
        if ({ username }) {
            // console.log("FROM GETME", username)
            setUser(username);
        } else {
            console.log('Error setting user');
        }
    }

    useEffect(() => {
        fetchRoutines();
        fetchActivities();
        getMe();
    }, [token])

    useEffect(() => {
        fetchMyRoutines();
    }, [token, user])

    return (
        <div>
            <Navbar
                logout={logout}
                token={token} />
            <Routes>
                <Route
                    path='/'
                    element={<Home />} />
                <Route
                    path='/myroutines'
                    element={<MyRoutines
                        myRoutines={myRoutines}
                        token={token}
                        fetchMyRoutines={fetchMyRoutines} />} />
                <Route
                    path='/login'
                    element={<Login
                        setToken={setToken}
                        navigate={navigate} />} />
                <Route
                    path='/users/register'
                    element={<Register
                        setToken={setToken}
                        token={token}
                        navigate={navigate} />} />
                <Route
                    path='/routines'
                    element={<Routines
                        routines={routines}
                        token={token}
                        fetchRoutines={fetchRoutines} />} />
                <Route
                    exact path='/routines/edit-routine/:routineId'
                    element={<EditRoutine
                        routines={routines}
                        token={token}
                        fetchRoutines={fetchRoutines}
                        fetchActivities={fetchActivities}
                        activities={activities} />} />
                <Route
                    exact path='/routines/new-routine'
                    element={<NewRoutine
                        token={token}
                        navigate={navigate}
                        fetchRoutines={fetchRoutines} />} />
                <Route
                    path='/activities'
                    element={<Activities
                        activities={activities}
                        token={token}
                        fetchActivities={fetchActivities} />} />
                <Route
                    exact path='/activities/new-activity'
                    element={<NewActivity
                        token={token}
                        fetchActivities={fetchActivities}
                        navigate={navigate} />} />
                <Route
                    exact path='/activities/edit-activity/:activityId'
                    element={<EditActivity
                        activities={activities}
                        token={token}
                        fetchActivities={fetchActivities} />} />
                <Route
                    exact path='/routine_activities/edit-routine_activity/:routineActivityId'
                    element={<EditRoutineActivity
                        activities={activities}
                        setActivities={setActivities}
                        routines={routines}
                        token={token}
                        fetchActivities={fetchActivities}
                        fetchRoutines={fetchRoutines} />} />
            </Routes>
        </div>
    )
}

const container = document.querySelector('#container');
const root = ReactDOM.createRoot(container);
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);

/*
Login
Register
Routines
Add Routine
Activities
Routine Activities
Profile
Navbar

*/