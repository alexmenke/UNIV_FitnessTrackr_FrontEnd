import React from 'react';
import { Link } from 'react-router-dom';
import { Paper, Card, CardContent, CardActions, Button } from '@mui/material';

const Home = () => {
  const paperStyle = {
    padding: 20,
    margin: '20px auto'
  }
    return (
      <div className='home'>
        <Paper elevation={10} style={paperStyle}>
          <Card>
            <CardContent>
              <h1>Welcome to Fitness Trackr</h1>
              <h2>Keep track of your fitness goals and gains with the Fitness Trackr App! Find a new routine or add a new one yourself!</h2>
                <CardActions>
                  <Link to='/register' className="btn">
                    <Button
                      style={{
                        margin: '.50rem',
                        color: '#FFFFFF',
                        backgroundColor: '#99A8E8'
                      }}>
                    Register New Account
                    </Button>
                  </Link>
                  <Link to='/login' className="btn">
                    <Button
                      style={{
                        margin: '.50rem',
                        color: '#FFFFFF',
                        backgroundColor: '#F2A0A0'
                      }}
                      variant='contained'>
                      Have an Account Already?
                    </Button>
                </Link>
              </CardActions>
            </CardContent>
          </Card>
        </Paper>
      </div>
    )
}

export default Home;