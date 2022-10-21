import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ logout, token }) => {
    return (
        <header>
            <nav className="navbar">
                <Link to='/' className="navLinks">Home</Link>
                <Link to='/login' className="navLinks">Login</Link>
                <Link to='/register' className="navLinks">Register</Link>
                <Link to='/routines' className="navLinks">Routines</Link>
                <Link to='/activities' className="navLinks">Activities</Link>
                <Link to='/myroutines' className="navLinks">My Routines</Link>
            </nav>
        </header>
    )
}

export default Navbar;