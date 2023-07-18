const axios = require('axios');
import { User } from 'types/User';
import { SuccessMessage } from 'types/SuccessMessage';

export default async function createUser(user: User): Promise<SuccessMessage> {
  return axios({
    url: process.env.REACT_APP_API_URL,
    method: 'post',
    data: {
      query: `
      mutation CreateUser($newUser: UserInput) {
        createUser(newUser: $newUser) {
          success
          errorMessage
        }
      }
          `,
      variables: {
        newUser: user,
      },
    },
  })
    .then(result => {
      if (result.data.errors) {
        throw new Error('Problem creating user: ', result.data.errors);
      }
      return result.data.data.createUser as SuccessMessage;
    })
    .catch(error => {
      console.log(error);
    });
}
