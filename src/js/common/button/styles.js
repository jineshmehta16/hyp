const styles = (theme) => {
  const secondaryColor = theme?.palette?.secondary;
  return {
    appBtn: {
      background: 'linear-gradient(306.62deg, #03514d 1.21%, #2ca998 94.64%)',
      boxShadow: '0px 4.58755px 4.58755px rgba(0, 0, 0, 0.25)',
      borderRadius: '5.73443px !important',
      fontWeight: '600 !important',
      color: 'white !important',

      '&.medium': {
        width: '10rem',
      },

      '&.large': {
        width: '15rem',
      },

      '&.appBtnDefault': {
        background: secondaryColor?.main,
        boxShadow: '0px 4.58755px 4.58755px rgba(0, 0, 0, 0.25)',
      },

      '&.appBtnDefault:hover': {
        background: secondaryColor?.main,
        boxShadow: '0px 4.58755px 4.58755px rgba(0, 0, 0, 0.25)',
      },
    },
  };
};
export default styles;
