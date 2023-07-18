const axios = require('axios');
import { Artist } from 'types/Artist';

export default async function getAllArtists(): Promise<Array<Artist>> {
  return axios({
    url: process.env.REACT_APP_API_URL,
    method: 'post',
    data: {
      query: `
          query AllArtists {
            allArtists {
              displayName
              user {
                id
                username
                profileImage
                createdAt
              }
            }
          }
      `,
      variables: {},
    },
  })
    .then(result => {
      return result.data.data.allArtists as Artist[];
    })
    .catch(error => {
      return [];
    });
}
