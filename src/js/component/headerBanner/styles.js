const styles = (theme) => {
  const secondaryColor = theme?.palette?.secondary;
  return {
    headerBannerWrapper: {
      background: secondaryColor?.footerBgColor,
      color: secondaryColor?.contrastText,
      padding: '0',
      textAlign: 'center',
      bottom: '0',
      left: '0',
      right: '0',
      display: 'flex',
      alignItems: 'center',
      flexGrow: '1',
    },
    dateTimeText: {
      fontWeight: 'normal',
    },
    bannerText: {
      fontWeight: '600 !important',
    },
  };
};
export default styles;
