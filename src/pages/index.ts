/*
 * Pages
 */
import Home from "./home/Home";
import SearchResults from "./searchResults/SearchResults";
import VinylDetail from "./vinylDetail/VinylDetail";

/*
 * Others
 */
import { RouterElement } from "../models/router";
import { URLS } from "../utils/constants";

const routes: RouterElement[] = [
  {
    path: URLS.home,
    component: Home,
  },
  {
    path:  `${URLS.search}/:search`,
    component: SearchResults,
  },
  {
    path:  `${URLS.vinylDetail}/:id`,
    component: VinylDetail
  },
];


export default routes;