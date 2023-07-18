const axios = require('axios');
import { Artist } from 'types/Artist';

export default async function getArtistByID(id: string): Promise<Artist> {
  return axios({
    url: process.env.REACT_APP_API_URL,
    method: 'post',
    data: {
      query: `
        query Artist($artistId: String!) {
          artist(artistID: $artistId) {
            user {
              profileImage
            }
            communityMessage
            displayName
            events {
              id
              flyerImage
              title
              startDateTime
              closeDateTime
              venue {
                displayName
                city
                state
              }
            }
          }
        }
        `,
      variables: {
        artistId: id,
      },
    },
  })
    .then(result => {
      return result.data.data.artist;
    })
    .catch(error => {
      return {};
    });
}
