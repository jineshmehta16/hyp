import { createStyles, makeStyles } from '@mui/styles';

const useGlobalStyles = makeStyles((theme) =>
  createStyles({
    '@global': {
      '.app-text-color': {
        color: theme?.palette?.primary?.main,
      },
      '.color-appgrey': {
        color: theme?.palette?.secondary?.main,
      },
      '.color-white': {
        color: theme?.palette?.secondary?.contrastText,
      },
      '.color-appblack': {
        color: theme?.palette?.secondary?.dark,
      },
      '.color-bggrey': {
        background: theme?.palette?.secondary?.light,
      },
      '.app-bg-color': {
        background: theme?.palette?.primary?.main,
      },
      '.border-right-appgrey': {
        borderRight: `1px solid ${theme?.palette?.secondary?.main}`,
      },
      '.border-bottom-appblack': {
        borderBottom: `1px solid ${theme?.palette?.secondary?.dark}`,
      },
      '.border': {
        border: `1px solid ${theme?.palette?.secondary?.dark}`,
      },
      '.border-bottom-light': {
        borderBottom: `1px solid ${theme?.palette?.secondary?.light}`,
      },
      '.app-input': {
        background: theme?.palette?.secondary?.light,
        borderRadius: '10px',
        border: `1.14689px solid ${theme?.palette?.secondary?.main}`,
      },
    },
  })
);

const GlobalStyles = () => {
  useGlobalStyles();
  return null;
};

export default GlobalStyles;
