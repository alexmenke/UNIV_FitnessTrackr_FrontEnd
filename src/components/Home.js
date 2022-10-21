import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
        
        <h1>Welcome to Fitness Trackr</h1>
        
      <Link to='/register' className="btn">Register New Account</Link>
      <Link to='/login' className="btn">Have an Account Already?</Link>
        </div>
    )
}

export default Home;