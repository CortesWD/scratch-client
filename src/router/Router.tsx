/*
 * Dependencies
 */
import { useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { uid } from "uid";

/*
 * Components
 */
import NavBar from "../components/layout/navBar/NavBar";
import pages from './../pages';
import BaseLayout from "../components/layout/baseLayout/BaseLayout";

/*
 * Others
 */
import { AppContext } from "../context/AppContext";

function Router(): JSX.Element {
  const { store: { showNavBar } } = useContext(AppContext);

  return (
    <BrowserRouter>
      {showNavBar && <NavBar />}
      <Routes>
        {pages.map((page) => {
          const { component: Component, path, withPaper, ...rest } = page;
          return (
            <Route
              key={uid()}
              path={path}
              element={(<BaseLayout withPaper={withPaper} ><Component {...rest} /></BaseLayout>)}
            />
          )
        })}
      </Routes>
    </BrowserRouter>
  )
}

export default Router;