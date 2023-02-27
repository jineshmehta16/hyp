const styles = (theme) => {
  const secondaryColor = theme?.palette?.secondary;
  return {
    footerWrapper: {
      background: secondaryColor?.footerBgColor,
      color: secondaryColor?.contrastText,
    },

    footerLinks: {
      color: secondaryColor?.contrastText,
      textDecoration: 'none',
    },
    dividerLine: {
      margin: '1rem 100px',
      borderTop: '1px solid #E9E9E9;',
    },
  };
};
export default styles;
