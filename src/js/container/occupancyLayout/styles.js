const styles = (theme) => {
  const status = theme?.status;
  return {
    root: {
      '& .MuiLinearProgress-colorPrimary': {
        backgroundColor: status.vacant,
      },
      '& .MuiLinearProgress-barColorPrimary': {
        backgroundColor: status.occupied,
      },
      '& .MuiLinearProgress-root': {
        height: '1.5rem',
      },
    },
  };
};
export default styles;
