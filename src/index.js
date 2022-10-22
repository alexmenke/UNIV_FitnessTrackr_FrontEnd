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
    getUserInfo
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
    EditRoutine
} from './components'



const App = () => {
    const [routines, setRoutines] = useState([]);
    const [token, setToken] = useState('');
    const [user, setUser] = useState({});
    const navigate = useNavigate();

    function logout() {
        window.localStorage.removeItem('token');
        setToken('');
        setUser({});
    }

    async function fetchRoutines() {
        const results = await getRoutines()
        setRoutines(results);
    }

    async function getMe() {
        const storedToken = window.localStorage.getItem('token');

        if (!token) {
            if (storedToken) {
                setToken(storedToken);
            }
            return;
        }

        const results = await getUserInfo(token)
        if (results.success) {
            setUser(results);
        } else {
            console.log(results.error.message);
        }
    }

    useEffect(() => {
        fetchRoutines();
    }, [token])

    useEffect(() => {
        getMe();
    }, [token])

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
                        user={user}
                        getMe={getMe} />} />
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
                        fetchRoutines={fetchRoutines} />} />
                <Route
                    exact path='/routines/new-routine'
                    element={<NewRoutine
                        token={token}
                        navigate={navigate}
                        fetchRoutines={fetchRoutines} />} />
                <Route 
                    path='/activities' 
                    element={<Activities />} />
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