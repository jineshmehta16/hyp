const styles = (theme) => {
  const secondaryColor = theme?.palette?.secondary;
  return {
    footerWrapper: {
      background: secondaryColor?.footerBgColor,
      color: secondaryColor?.contrastText,
      padding: '16px',
      textAlign: 'center',
      position: 'absolute',
      bottom: '0',
      left: '0',
      right: '0',
    },
    footerText: {
      fontWeight: '600 !important',
    },
  };
};
export default styles;
