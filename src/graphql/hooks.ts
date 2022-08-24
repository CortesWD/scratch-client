/*
 * Dependencies
 */
import { useLazyQuery, useQuery } from "@apollo/client";

/*
* Queries
*/
import { ALBUMS_QUERY } from "./queries";

/*
* Others
*/
import { Album } from "../models/graphql";

interface AlbumsResult { albums: Album[] };

export function useLazySearchAlbums() {
  const [getAlbums, { loading, error, data }] = useLazyQuery<AlbumsResult>(ALBUMS_QUERY);

  return {
    getAlbums,
    loading,
    error,
    albums: data?.albums ?? []
  }
};

export function useSearchAlbums(query: string) {
  const {loading, error, data } = useQuery<AlbumsResult>(ALBUMS_QUERY, {
    variables: {
      input: { query }
    }
  });

  return {
    loading,
    error,
    albums: data?.albums ?? []
  }
};