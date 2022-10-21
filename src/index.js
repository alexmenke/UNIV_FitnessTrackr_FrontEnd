import React from 'react';
import ReactDOM from 'react-dom/client';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import './style.css';
import {
    Navbar,
    Login,
    Register,
    MyRoutines,
    Routines,
    Activities,
    RoutineActivities,
    Home
 } from './components'



const App = () => {
    return (
        <div>
        <Navbar />
        <Routes>
            <Route path='/' element={ <Home /> } />
            <Route path='/myroutines' element={ <MyRoutines /> } />
            <Route path='/login' element={ <Login /> } />
            <Route path='/register' element={ <Register /> } />
            <Route path='/routines' element={ <Routines /> } />
            <Route path='/activities' element={ <Activities /> } />
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