const axios = require('axios');

export default async function checkWhitelist(email): Promise<boolean> {
  return axios({
    url: process.env.REACT_APP_API_URL,
    method: 'post',
    data: {
      query: `
        query Query($email: String!) {
            checkWhitelist(email: $email)
        }
          `,
      variables: {
        email: email,
      },
    },
  })
    .then(result => {
      if (result.data.errors) {
        throw new Error('Problem getting user info: ', result.data.errors);
      }
      return result.data.data.checkWhitelist;
    })
    .catch(error => {
      console.log(error);
    });
}
