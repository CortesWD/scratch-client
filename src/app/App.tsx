/*
 * Dependencies
 */
import { ApolloProvider } from '@apollo/client';
import { StyledEngineProvider } from '@mui/material/styles';

/*
 * Components
 */
import Router from '../router/Router';

import client from '../graphql/client';

/*
 * Styles
 */
import './../scss/index.scss';

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <ApolloProvider client={client}>
        <Router />
      </ApolloProvider>
    </StyledEngineProvider>
  )
}

export default App;
