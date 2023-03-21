import React, { useState, useEffect } from 'react';
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
import { useDispatch } from 'react-redux';
import { manageToast, setOverlayStatus } from '../../store/common/actions';
import { postLogin } from '../../axiosUtils/appUtils';

const ResetPassword = (props) => {
  const { classes } = props;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const initialState = {
    username: '',
    oldPassword: '',
    newPassword: '',
  };

  const [loggedinUserInfo, setLoggedinUserInfo] = useState(initialState);

  useEffect(() => {
    sessionStorage.clear();
  });

  const onSubmitHandler = (event) => {
    event.preventDefault();

    postLogin('/auth/changePassword', loggedinUserInfo)
      .then(function (res) {
        if (res) {
          const obj = {
            title: 'success',
            message: res?.message,
            status: true,
            type: 'success',
          };
          dispatch(manageToast(obj));
          navigate('/');
        } else {
          const obj = {
            title: 'error',
            message: 'Something went wrong please try again later.',
            status: true,
            type: 'error',
          };
          dispatch(manageToast(obj));
          dispatch(setOverlayStatus(false));
        }
      })
      .catch((error) => {
        const obj = {
          title: 'error',
          message: error.message,
          status: true,
          type: 'error',
        };
        dispatch(manageToast(obj));
        dispatch(setOverlayStatus(false));
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
                  focused
                  label='Username'
                  variant='standard'
                  sx={{ m: 1, width: '35ch' }}
                  required
                  defaultValue={loggedinUserInfo?.username}
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
                      username: event.target.value,
                    });
                  }}
                ></TextField>
              </Grid>

              <Grid item>
                <TextField
                  label='old Password'
                  variant='standard'
                  sx={{ m: 1, width: '35ch' }}
                  required
                  defaultValue={loggedinUserInfo?.oldPassword}
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
                      oldPassword: event.target.value,
                    });
                  }}
                ></TextField>
              </Grid>

              <Grid item>
                <TextField
                  label='New Password'
                  variant='standard'
                  sx={{ m: 1, width: '35ch' }}
                  required
                  defaultValue={loggedinUserInfo?.newPassword}
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
                      newPassword: event.target.value,
                    });
                  }}
                ></TextField>
              </Grid>
            </CardContent>

            <CardActions className={classes?.root}>
              <Grid item>
                <Button variant='contained' size='large' type='submit'>
                  Submit
                </Button>
              </Grid>
            </CardActions>
          </form>
        </Card>
      </Paper>
    </Grid>
  );
};

export default withStyles(styles)(ResetPassword);
