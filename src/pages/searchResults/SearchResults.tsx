/*
 * Dependencies
 */
import Container from "@mui/material/Container";
import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";

/*
 * Others
 */
import CardResult from "../../components/card/cardResult/CardResult";

/*
 * Others
 */
import { AppContext, Store, StoreContext } from "../../context/AppContext";
import { useSearchAlbums } from "../../graphql/hooks";
import { URLS } from "../../utils/constants";

function SearchResults() {
  const { search } = useParams<{ search: string }>();
  const { store, setStore } = useContext<StoreContext>(AppContext);
  const { inputSearch } = store;
  const { albums, loading } = useSearchAlbums((inputSearch || search) ?? 'AC/DC');


  useEffect(() => {
    if (search?.length && !inputSearch.length) {
      setStore((prevStore: Store) => {
        return {
          ...prevStore,
          inputSearch: decodeURI(search)
        }
      });
    }
  }, []);

  return (
    <Container>
      {!loading && albums.map((album, i) => {
        const { artist, image, id, title } = album;
        return (
          <CardResult
            key={id}
            title={title}
            artist={artist}
            image={image}
            id={id}
            url={`/${URLS.vinylDetail}/${id}`}
          />
        )
      })}
    </Container>
  )
}

export default SearchResults;