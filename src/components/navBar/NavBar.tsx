/*
 * Dependencies
 */
import { useContext } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import { MdSearch } from "react-icons/md";
import { useNavigate } from "react-router-dom";

/*
 * Other
 */
import { AppContext, Store } from "../../context/AppContext";
import { useLazySearchAlbums } from "../../graphql/hooks";
import { URLS } from "../../utils/constants";

/*
 * Styles
 */
import navBarStyles from './NavBar.module.scss';

function NavBar(): JSX.Element {
  const navigate = useNavigate();
  const { store: { inputSearch }, setStore } = useContext(AppContext);
  const { getAlbums } = useLazySearchAlbums();

  const handleClick = async (e: Event | any) => {
    if (inputSearch.trim().length > 6) {
      await getAlbums({ variables: { input: { query: inputSearch } } });
      navigate(`${URLS.search}/${inputSearch}`);
    }
  };

  const handleInputChange = (e: Event | any) => {
    e.preventDefault();
    const { target: { value: inputValue } } = e;
    setStore((prevStore: Store) => {
      return {
        ...prevStore,
        inputSearch: inputValue
      }
    });
  }

  return (
    <Box>
      <AppBar position="sticky" color="primary">
        <Toolbar>
          <div className={navBarStyles['navbar-input-container']}>
            <InputBase
              className={navBarStyles['navbar-input-container--field']}
              placeholder="Search by album name..."
              inputProps={{ "aria-label": "search" }}
              value={inputSearch}
              onChange={handleInputChange}
            />
            <IconButton onClick={handleClick}>
              <MdSearch />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default NavBar;