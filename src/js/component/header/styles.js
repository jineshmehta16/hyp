const styles = (theme) => {
  const primaryColor = theme?.palette?.primary;
  const secondaryColor = theme?.palette?.secondary;
  const badge = theme?.palette?.badge;

  return {
    root: {
      position: 'fixed',
      bottom: theme.spacing(2),
      right: theme.spacing(2),
    },
    accountWrapper: {
      borderLeft: `2px solid ${primaryColor.dark}`,
    },
    headerSearch: {
      paddingLeft: '110px',
      width: '28rem',
      height: '50px',

      [theme.breakpoints.down('sm')]: {
        width: '13rem',
      },
    },
    headerSearchDropdown: {
      margin: '2px 5px 2px 5px',
      background: 'white',
      borderRadius: '8px',
      padding: '5px 5px',
      border:'none',      
      color: primaryColor.main,
      '&:before': {    
        borderBottom: 'none !important',
      },
    },
    searchIconWapper: {
      padding: '4px 10px',
      margin: '4px 5px 4px 0px',
      background: primaryColor.main,
      borderRadius: '5px',
      color: 'white',
    },
    headerLinks: {
      color: secondaryColor?.dark,
      textDecoration: 'none',
    },
    contactLinks: {
      textDecoration: 'none',
    },
    headerMenu: {
      '& span': {
        fontWeight: '600 !important',
        textTransform: 'capitalize !important',
        fontSize: '20px',
      },
    },
    scrollToTopBtn: {
      bottom: '5.5rem !important',
    },
    headerBikeSearch: {
      '& .MuiInputBase-root': {
        padding: 0,
      },
      '& .MuiSvgIcon-root': {
        display: 'none',
      },
    },
    headerInputWrapper: {
      borderRadius: '15px !important',
      border:'none !important',
      padding:'3px',
    },
    mobileAppbar: {
      background: '#FFF',
      color: secondaryColor.dark,
    },
    headerSwiper: {
      '& .MuiDrawer-paper': {
        background: primaryColor.main,
      },
    },
    mobileHeaderWrapper: {
      position: 'sticky',
      top: 0,
      zIndex: 9999,
    },
    bottomNavigationBox: {
      position: 'fixed',
      bottom: 0,
      width: '100%',
      zIndex: 9999,
      background: secondaryColor.light,
      borderTopLeftRadius: '15px',
      borderTopRightRadius: '15px',
      border: `1px solid ${secondaryColor.dark}`,
    },
    drawerHeaderWrapper: {
      width: '18rem',
    },
    headerLinkList: {
      '& .MuiDivider-root': {
        background: secondaryColor.contrastText,
        height:'0.5px'
      },
      '& .MuiListItem-gutters': {
        paddingLeft: '0px',
      },
    },
    listItemText: {
      fontSize:'0.85rem',
      color: secondaryColor.contrastText,
    },
    profileIcon: {
      textTransform:'uppercase',
      backgroundImage:'linear-gradient(to right bottom, #d747a8, #c067c7, #a480dc, #8a94e5, #79a4e5)',
      height: '2.5rem',
      color: secondaryColor.contrastText
    },
    name: {
      color: secondaryColor.contrastText,
      textTransform:'uppercase',
      fontSize:'1.1rem',
      fontWeight: 600,
      margin: '5px 0px 0px 10px'
    },
    login: {
      color: secondaryColor.contrastText,
    },
    wishlistBadge: {
      backgroundColor: badge.warning,
    },
    userAvatar: {
      width:'25px',
      height:'25px',
      margin:'0px 10px 0px 15px',
      textTransform:'uppercase',
      backgroundImage:'linear-gradient(to right bottom, #d747a8, #c067c7, #a480dc, #8a94e5, #79a4e5)',
    },
    headerWhiteBackground:{
      backgroundColor:'#fff',
      boxShadow:'none',
    },
  };
};

export default styles;
