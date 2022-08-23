import { StyledEngineProvider } from '@mui/material/styles';

import Router from '../router/Router';

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <Router />
    </StyledEngineProvider>
  )
}

export default App;
