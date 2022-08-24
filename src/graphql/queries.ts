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