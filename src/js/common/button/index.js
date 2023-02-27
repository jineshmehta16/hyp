import React from 'react';
import Button from '@mui/material/Button';
import styles from './styles';

const button = ({ type, onClick, disabled, className, label, classes }) => {
  return (
    <>
      {type === 'default' ? (
        <Button
          type="submit"
          variant="contained"
          disabled={disabled ? disabled : false}
          onClick={onClick}
          className={[classes?.appBtn, className].join(' ')}
        >
          {label}
        </Button>
      ) : (
        <Button
          type="submit"
          variant="contained"
          disabled={disabled ? disabled : false}
          onClick={onClick}
          className={[classes?.appBtn, className].join(' ')}
        >
          {label}
        </Button>
      )}
    </>
  );
};

export default button;