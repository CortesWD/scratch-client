/*
 * Dependencies
 */
import { ApolloProvider } from '@apollo/client';
import { createTheme, StyledEngineProvider, ThemeProvider } from '@mui/material/styles';
import { ThemeOptions } from '@mui/system';

/*
 * Components
 */
import Router from '../router/Router';

import client from '../graphql/client';

/*
 * Styles
 */
import './App.scss';

import { AppProvider } from '../context/AppContext';

const fontFamily = ['Montserrat', 'sans-serif'].join(',');

const themeOptions = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#090740',
      dark: '#050326',
      light: 'rgb(58,56,102)'
    },
    secondary: {
      main: '#f50057',
      light: 'rgb(247,51,120)',
      dark: 'rgb(171,0,60)'
    },
    background: {
      default: '#fafafa',
      paper: '#fff'
    }
  },
  typography: {
    h1: { fontFamily },
    h2: { fontFamily },
    subtitle1: { fontFamily },
    subtitle2: { fontFamily }
  }
});

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <ApolloProvider client={client}>
        <AppProvider>
          <ThemeProvider theme={themeOptions}>
            <Router />
          </ThemeProvider>
        </AppProvider>
      </ApolloProvider>
    </StyledEngineProvider>
  )
}

export default App;
