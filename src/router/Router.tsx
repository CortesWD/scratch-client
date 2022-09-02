/*
 * Dependencies
 */
import { useContext } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { uid } from "uid";

/*
 * Components
 */
import NavBar from "../components/layout/navBar/NavBar";
import pages from './../pages';
import BaseLayout from "../components/layout/baseLayout/BaseLayout";
import Login from "./../pages/login/Login";
import NotFound from "../pages/NotFound/NotFound";

/*
 * Others
 */
import { AppContext } from "../context/AppContext";
import { URLS } from "../utils/constants";

const sessionToken = localStorage.getItem('sessionToken') ?? '';

function Router() {
  const { store: { showNavBar } } = useContext(AppContext);

  return (
    <BrowserRouter>
      {showNavBar && sessionToken && <NavBar />}
      <Routes>
        {pages.map((page) => {
          const { component: Component, path, withPaper, ...rest } = page;
          return (
            <Route
              key={uid()}
              path={path}
              element={sessionToken ?
                (<BaseLayout withPaper={withPaper} ><Component {...rest} /></BaseLayout>)
                : (<Navigate to={URLS.login} replace />)
              }
            />
          )
        })}
        <Route
          path={URLS.login}
          element={(<Login />)}
        />
        <Route
          path="*"
          element={<NotFound />}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default Router;