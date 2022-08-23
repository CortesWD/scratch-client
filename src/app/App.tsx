/*
 * Dependencies
 */
import { StyledEngineProvider } from '@mui/material/styles';

/*
 * Components
 */
import Router from '../router/Router';

/*
 * Styles
 */
import './../scss/index.scss';

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <Router />
    </StyledEngineProvider>
  )
}

export default App;
