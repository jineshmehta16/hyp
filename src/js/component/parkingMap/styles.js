const styles = (theme, background) => {
  console.log(background);
  return {
    wrapper: {
      width: '100vw',
      height: '100vh',
      position: 'relative',
      overflow: 'auto',
    },

    image: {
      position: 'absolute',
      width: '100%',
      height: '100%',
      top: 0,
      left: 0,
      zIndex: 2,
    },

    textBox: {
      position: 'relative',
      width: '300px',
    },
  };
};

export default styles;
