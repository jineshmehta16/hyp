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
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { manageToast } from '../../store/common/actions';

const Login = (props) => {
  const { classes } = props;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const initialState = {
    emailId: '',
    password: '',
  };

  const [loggedinUserInfo, setLoggedinUserInfo] = useState(initialState);

  const onSubmitHandler = (event) => {
    event.preventDefault();

    // TODO - change the url
    axios
      .post('http://localhost:4000/login', loggedinUserInfo)
      .then(function (res) {
        if (res?.data?.jwt) {
          sessionStorage.setItem('token', res?.data?.jwt);

          sessionStorage.setItem('emailId', loggedinUserInfo.emailId);
          navigate('/');
        } else {
          const obj = {
            title: 'error',
            message: 'Something went wrong please try again later.',
            status: true,
            type: 'error',
          };
          dispatch(manageToast(obj));
        }
      })
      .catch((error) => {
        let obj;
        if (error.code === 'ERR_BAD_REQUEST') {
          obj = {
            title: 'error',
            message: 'Invalid Credentials',
            status: true,
            type: 'error',
          };
        } else if (error.code === 'auth/invalid-email') {
          obj = {
            title: 'error',
            message: 'Invalid Email Id.',
            status: true,
            type: 'error',
          };
        } else if (error.code === 'auth/expired-action-code') {
          obj = {
            title: 'error',
            message: 'Action code is expired.',
            status: true,
            type: 'error',
          };
        } else if (error.code === 'auth/invalid-action-code') {
          obj = {
            title: 'error',
            message: 'Action code is invalid',
            status: true,
            type: 'error',
          };
        } else if (error.code === 'auth/user-disabled') {
          obj = {
            title: 'error',
            message: 'Access to this user is disable',
            status: true,
            type: 'error',
          };
        } else if (error.code === 'auth/user-not-found') {
          obj = {
            title: 'error',
            message:
              'Your information is not present in Database. Request you to first Sign Up.',
            status: true,
            type: 'error',
          };
        } else if (error.code === 'auth/wrong-password') {
          obj = {
            title: 'error',
            message: 'Wrong Password',
            status: true,
            type: 'error',
          };
        } else if (error.code === 'auth/user-not-found') {
          obj = {
            title: 'error',
            message: 'User does not existing in our data base',
            status: true,
            type: 'error',
          };
        } else {
          obj = {
            title: 'error',
            message: 'Something Went wrong.',
            status: true,
            type: 'error',
          };
        }
        dispatch(manageToast(obj));
      });
  };

  return (
    <Grid
      container
      spacing={2}
      direction='column'
      className={classes?.root}
      minHeight='90vh'
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
                  defaultValue={loggedinUserInfo?.emailId}
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
