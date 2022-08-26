/*
 * Dependencies
 */
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Typography } from "@mui/material";

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

const albums = [
  {"id":380978,"title":"AC/DC - Powerage","image":"https://i.discogs.com/asnz220Q2i_PoGbO5qhCqIHEb4gopxWGs3SyAzaCxsQ/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTM4MDk3/OC0xMzQ2MTYyMzQx/LTE1NjAuanBlZw.jpeg","artist":{"name":"AC/DC","id":"84752","__typename":"Artist"},"__typename":"Album"},
  {"id":380972,"title":"AC/DC - Powerage","image":"https://i.discogs.com/asnz220Q2i_PoGbO5qhCqIHEb4gopxWGs3SyAzaCxsQ/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTM4MDk3/OC0xMzQ2MTYyMzQx/LTE1NjAuanBlZw.jpeg","artist":{"name":"AC/DC","id":"84752","__typename":"Artist"},"__typename":"Album"}
];

const loading = false;


function SearchResults(): JSX.Element {
  const { search } = useParams<{ search: string }>();
  const { store, setStore } = useContext<StoreContext>(AppContext);
  const { inputSearch } = store;
  // const { albums, loading } = useSearchAlbums((inputSearch || search) ?? 'AC/DC');


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
    <>
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
    </>
  )
}

export default SearchResults;