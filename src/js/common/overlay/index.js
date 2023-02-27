import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import styles from './styles';

const LoadingOverlay = (props) => {
  const { classes } = props;
  const { overlay, center } = classes;

  return (
    <div className={overlay}>
      <div className={center}>
        <CircularProgress color="secondary" />
      </div>
    </div>
  );
};
export default LoadingOverlay