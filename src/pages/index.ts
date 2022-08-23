import { RouterElement } from "../models/router";
import { URLS } from "../utils/constants";
import Home from "./home/Home";


const routes: RouterElement[] = [{
  path: URLS.home,
  component: Home,
}];


export default routes;