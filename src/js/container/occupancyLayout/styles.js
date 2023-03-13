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
    },
    barHeight: {
      '& .MuiLinearProgress-root': {
        height: '1rem',
      },
    },
  };
};
export default styles;
