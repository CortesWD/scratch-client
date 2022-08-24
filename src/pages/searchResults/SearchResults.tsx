/*
 * Dependencies
 */
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Typography } from "@mui/material";

/*
 * Others
 */
import CardActions from "../../components/card/cardActions/CardActions";

/*
 * Others
 */
import { AppContext, Store, StoreContext } from "../../context/AppContext";
import { useSearchAlbums } from "../../graphql/hooks";



function SearchResults(): JSX.Element {
  const { search } = useParams<{ search: string }>();
  const { store, setStore } = useContext<StoreContext>(AppContext);
  const { inputSearch } = store;
  const { albums, loading } = useSearchAlbums((inputSearch || search) ?? 'AC/DC');


  useEffect(() => {
    if (search?.length && !inputSearch.length) {
      setStore((prevStore: Store) => {
        return {
          ...prevStore,
          inputSearch: search
        }
      });
    }
  }, []);

  return (
    <>
      {!loading && albums.map((album) => {
        const { artist, image, id, title } = album;
        return (
          <CardActions
            key={id}
            title={title}
            artist={artist}
            image={image}
            id={id}
          />
        )
      })}
    </>
  )
}

export default SearchResults;