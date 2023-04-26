const styles = (theme) => {
  return {
    footerWrapper: {
      background: theme?.palette?.primary?.main,
      color: theme?.palette?.secondary?.main,
      padding: '16px',
      textAlign: 'center',
      position: 'fixed',
      bottom: '0',
      left: '0',
      right: '0',
      zIndex: 5,
    },
    footerText: {
      fontWeight: '600 !important',
    },
  };
};
export default styles;
