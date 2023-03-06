const styles = (theme) => {
  const status = theme?.status;

  return {
    root: {
      justifyContent: 'center',
      alignItems: 'center',
      padding: '0.8rem',
      margin: '0.8rem',
      display: 'flex',
    },
    forgotPassword: {
      color: status.danger,
      textDecoration: 'none',
      cursor: 'pointer',

      '&:hover': {
        textDecoration: 'underline',
      },
    },
  };
};

export default styles;
