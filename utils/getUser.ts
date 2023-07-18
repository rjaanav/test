const axios = require('axios');
import { User } from 'types/User';

export default async function getUserInfo(userID): Promise<User> {
  return axios({
    url: process.env.REACT_APP_API_URL,
    method: 'post',
    data: {
      query: `
        query User($userID: String!) {
            user(userID: $userID) {
              id
              username
              email
              profileImage
              createdAt
              isArtist
            }
          }
          `,
      variables: {
        userID: userID,
      },
    },
  })
    .then(result => {
      if (result.data.errors) {
        throw new Error('Problem getting user info: ', result.data.errors);
      }
      return result.data.data.user;
    })
    .catch(error => {
      console.log(error);
    });
}
