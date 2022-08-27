/*
 * Dependencies
 */
import { useLazyQuery, useQuery } from "@apollo/client";

/*
* Queries
*/
import { ALBUMS_QUERY, ALBUM_QUERY } from "./queries";

/*
* Others
*/
import { Album } from "../models/graphql";
import { SIDES } from "../utils/constants";

interface AlbumsResult { albums: Album[] };
interface AlbumResult { album: Album };

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
  const { loading, error, data } = useQuery<AlbumsResult>(ALBUMS_QUERY, {
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

export function useAlbum(id: string) {
  const { loading, error, data } = useQuery<AlbumResult>(ALBUM_QUERY, {
    variables: {
      input: { id }
    }
  });

  const aSide = data?.album?.trackList?.filter((e) => e.position.charAt(0) === SIDES[0]);
  const bSide = data?.album?.trackList?.filter((e) => e.position.charAt(0) === SIDES[1]);

  return {
    album: {
      ...data?.album,
      trackList: [aSide, bSide]
    } ?? { id: 0, image: '', title: '' },
    loading,
    error,
  }
};