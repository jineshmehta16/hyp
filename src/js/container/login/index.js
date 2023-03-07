import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Card from '@mui/material/Card';
import AccountCircle from '@mui/icons-material/AccountCircle';
import LockIcon from '@mui/icons-material/Lock';
import InputAdornment from '@mui/material/InputAdornment';
import { withStyles } from '@mui/styles';
import styles from './styles';
import { useNavigate } from 'react-router-dom';

const Login = (props) => {
  const { classes } = props;

  const navigate = useNavigate();

  const initialState = {
    emailId: '',
    password: '',
  };

  const [loggedinUserInfo, setLoggedinUserInfo] = useState(initialState);

  const onSubmitHandler = (event) => {
    event.preventDefault();

    // add end point integration here

    navigate('/');
  };

  return (
    <Grid
      container
      spacing={2}
      direction='column'
      className={classes?.root}
      minHeight='100vh'
    >
      <Paper elevation={3}>
        <Card>
          <form name='login-form' onSubmit={onSubmitHandler} autoComplete='on'>
            <CardContent>
              <Grid item>
                <TextField
                  label='Enter email id'
                  variant='standard'
                  type='email'
                  sx={{ m: 1, width: '35ch' }}
                  required
                  defaultValue={loggedinUserInfo?.email}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position='start'>
                        <AccountCircle />
                      </InputAdornment>
                    ),
                  }}
                  onChange={(event) => {
                    setLoggedinUserInfo({
                      ...loggedinUserInfo,
                      emailId: event.target.value,
                    });
                  }}
                ></TextField>
              </Grid>

              <Grid item>
                <TextField
                  label='Password'
                  variant='standard'
                  type='password'
                  sx={{ m: 1, width: '35ch' }}
                  required
                  defaultValue={loggedinUserInfo?.password}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position='start'>
                        <LockIcon />
                      </InputAdornment>
                    ),
                  }}
                  onChange={(event) => {
                    setLoggedinUserInfo({
                      ...loggedinUserInfo,
                      password: event.target.value,
                    });
                  }}
                ></TextField>
              </Grid>

              <Grid item justifyContent='flex-start'>
                <a href='test' className={classes?.forgotPassword}>
                  Forgot password?
                </a>
              </Grid>
            </CardContent>

            <CardActions className={classes?.root}>
              <Grid item>
                <Button variant='contained' size='large' type='submit'>
                  Login
                </Button>
              </Grid>
            </CardActions>
          </form>
        </Card>
      </Paper>
    </Grid>
  );
};

export default withStyles(styles)(Login);
