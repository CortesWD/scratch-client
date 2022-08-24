/*
 * Dependencies
 */
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { uid } from "uid";

/*
 * Components
 */
import NavBar from "../components/navBar/NavBar";
import pages from './../pages';

// React.FC<{}>

interface ComponentLayoutProps {
  children: React.ReactNode;
}

const ComponentLayout: React.FC<ComponentLayoutProps> = ({ children }) => {
  return (
    <Box
      sx={{
        padding: '4px 16px'
      }}>
      <Container>
        <Paper
          elevation={3}
          sx={{
            padding: '2px 4px'
          }}
        >
          {children}
        </Paper>
      </Container>
    </Box>
  )
}

function Router(): JSX.Element {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        {pages.map((page) => {
          const { component: Component, path, ...rest } = page;
          return (
            <Route
              key={uid()}
              path={path}
              element={(<ComponentLayout><Component {...rest} /></ComponentLayout>)}
            />
          )
        })}
      </Routes>
    </BrowserRouter>
  )
}

export default Router;