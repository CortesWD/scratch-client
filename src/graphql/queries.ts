import { gql } from '@apollo/client';

export const ALBUMS_QUERY = gql`
  query GetAlbums($input: GetAlbumsResults!) {
    albums(input: $input) {
      id
      title
      image
    }
  }
`;

export const ALBUM_QUERY = gql`
  query Album($input: GetAlbum) {
    album(input: $input) {
      title
      genre
      year
      image
      artist {
        id
        name
        description
        image
        albums {
          title
          id
          image
        }
      }
      trackList {
        title
        duration
        position
      }
      country
    }
  }
`;

// export const CLIENT_ALBUMS_QUERY = gql`
//   query GetAlbums($input: GetAlbumsResults!) {
//       albums(input: $input) @client {
//         id
//         title
//         image
//         artist {
//           name
//           id
//         }
//       }
//     }
// `;