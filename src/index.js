import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import AppRouter from './appRouter';
import { composeWithDevTools } from 'redux-devtools-extension';
import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import rootReducer from '../src/js/reducers/index';
import { createTheme, responsiveFontSizes, ThemeProvider } from '@mui/material';

const root = ReactDOM.createRoot(document.getElementById('root'));

let theme = createTheme({
  spacing: (factor) => `${0.25 * factor}rem`,
  typography: {
    fontFamily: [
      'Kumbh Sans',
      '-apple-system',
      'BlinkMacSystemFont',
      'sans-serif',
    ].join(','),
  },
  palette: {
    primary: {
      main: '#000000',
      light: '#E8E8E8',
      dark: '#00322F',
      darker: 'rgba(0, 0, 0, 0.87)',
    },
    secondary: {
      main: '#ffffff',
      contrastText: '#fff',
      light: '#e9e9e9',
      lighter: '#ACACAC',
      dark: '#1a1a1a',
      footerBgColor: '#001615',
    },
    cardBg: {
      main: '#d9d9d9',
    },
    badge: {
      warning: '#FFBF00',
    },
  },
  status: {
    danger: 'red',
    occupied: '#B30000',
    vacant: '#006600',
    success: 'green',
  },
});
theme = responsiveFontSizes(theme);

const initialState = {};
const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <AppRouter />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
