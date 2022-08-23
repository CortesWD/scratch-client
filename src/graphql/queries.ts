import { gql } from '@apollo/client';

export const ALBUMS_QUERY = gql`
  query GetAlbums($input: GetAlbumsResults!) {
    albums(input: $input) {
      id
      title
      image
      artist {
        name
        id
      }
    }
  }
`;