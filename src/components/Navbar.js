import React from 'react';
import { Link } from 'react-router-dom';
import '../style.css';
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  Grid,
  Button,
} from '@mui/material';
// import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';

const Navbar = ({ logout, token }) => {
  return (
    <AppBar
      position='static'
      style={{ backgroundColor: '#1F3044' }}>
      <CssBaseline>
        <Toolbar>
          <Grid container>
            <Typography
              type="title"
              style={{
                fontSize: '1.75rem',
                color: '#FB9039'
              }}>
              Fitness Trackr
            </Typography>
            {/* <FitnessCenterIcon /> */}
          </Grid>
          <Grid container
            display="flex"
            justifyContent="flex-end"
            alignItems="flex-end">
            <Typography>
              <Link to='/'><Button
                style={{
                  margin: '.10rem',
                  color: '#FB9039',
                }}>
                Home
              </Button></Link>
              <Link to='/routines'><Button
                style={{
                  margin: '.10rem',
                  color: '#FB9039',
                }}>
                Routines
              </Button></Link>
              <Link to='/activities'><Button
                style={{
                  margin: '.10rem',
                  color: '#FB9039',
                }}>
                Activities
              </Button></Link>
              {
                token ? (
                  <>
                    <Link to='/myroutines'><Button
                      style={{
                        margin: '.10rem',
                        color: '#FB9039',
                      }}>
                      My Routines
                    </Button></Link>
                    <Link to='/' onClick={() => logout()}><Button
                      style={{
                        margin: '.10rem',
                        color: '#FB9039',
                      }}>
                      Logout
                    </Button></Link>
                  </>
                ) : (
                  <>
                    <Link to='/users/register'><Button
                      style={{
                        margin: '.10rem',
                        color: '#FB9039',
                      }}>
                      New Account
                    </Button></Link>
                    <Link to='/login'><Button
                      style={{
                        margin: '.10rem',
                        color: '#FB9039',
                      }}>
                      Login
                    </Button></Link>
                  </>
                )
              }
            </Typography>
          </Grid>
        </Toolbar>
      </CssBaseline>
    </AppBar>
  )
}

export default Navbar;