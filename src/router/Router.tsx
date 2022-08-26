/*
 * Dependencies
 */
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { uid } from "uid";

/*
* Components
*/
import NavBar from "../components/navBar/NavBar";
import pages from './../pages';
import BaseLayout from "../components/layout/baseLayout/BaseLayout";

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
              element={(<BaseLayout><Component {...rest} /></BaseLayout>)}
            />
          )
        })}
      </Routes>
    </BrowserRouter>
  )
}

export default Router;