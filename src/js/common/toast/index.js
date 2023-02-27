import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getToast } from '../../store/common/selectors';
import { manageToast } from '../../store/common/actions';
import { Alert, Snackbar } from '@mui/material';

const Toast = () => {
  const dispatch = useDispatch();
  const toast = useSelector((state) => getToast(state));
  const handleClose = () => {
    const obj = {
      title: '',
      message: '',
      status: false,
      type: '',
    };
    dispatch(manageToast(obj));
  };

  return (
    <Snackbar
      open={toast.status}
      style={{ marginBottom: '3em' }}
      autoHideDuration={8000}
      onClose={handleClose}
    >
      <Alert onClose={handleClose} severity={toast.type}>
        {toast.message}
      </Alert>
    </Snackbar>
  );
};
export default Toast;
