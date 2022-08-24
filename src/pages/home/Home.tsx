/*
 * Dependencies
 */
import { useContext, useEffect, useState } from "react";
import { Typography } from "@mui/material";

/*
 * Others
 */
import { AppContext, StoreContext } from "../../context/AppContext";
import { useClientSearchAlbums } from "../../graphql/hooks";



function Home(): JSX.Element {
  return (
    <Typography variant="h4">
      Search Your vinyls
    </Typography>
  )
}

export default Home;