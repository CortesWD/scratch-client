/*
 * Dependencies
 */
import { useQuery } from "@apollo/client";

/*
* Queries
*/
import { ALBUMS_QUERY } from "./queries";

/*
* Others
*/
import { Album } from "../models/graphql";

interface AlbumsResult { album: Album[] };

interface AlbumsVars { query: string };


export function useAlbums(query: string) {
  const { data, loading, error } = useQuery<AlbumsResult, AlbumsVars>(ALBUMS_QUERY, {
    variables: { query }
  });

  console.log(data?.album, loading, error);

  return {
    albums: data?.album,
    loading,
    error
  }
};