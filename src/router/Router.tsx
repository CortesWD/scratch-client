/*
 * Dependencies
 */
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { uid } from "uid";

/*
 * Pages
 */
import pages from './../pages';

// React.FC<{}>

function Router(): JSX.Element {
  return(
    <BrowserRouter>
      <Routes>
        {pages.map((page) => {
          const { component: Component, path, ...rest } = page;
          return (
            <Route
              key={uid()}
              path={path}
              element={<Component {...rest} />}
            />
          )

        })}
      </Routes>
    </BrowserRouter>
  )
}

export default Router;