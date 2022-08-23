/*
 * Dependencies
 */
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import InputBase from "@mui/material/InputBase";
import { MdSearch } from "react-icons/md";

function NavBar(): JSX.Element {
  return (
    <Box>
      <AppBar position="sticky">
        <Toolbar>
          <div>
            <MdSearch />
            <InputBase
              placeholder="Search by album name..."
              inputProps={{ "aria-label": "search" }}
            />
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default NavBar;