const axios = require('axios');

export default async function sendToggleLike(
  createLike: boolean,
  eventID: string,
  postID: string,
  userID: string
): Promise<boolean> {
  return axios({
    url: process.env.REACT_APP_API_URL,
    method: 'post',
    data: {
      query: `
        mutation ToggleLike($likeInfo: toggleLike) {
          toggleLike(likeInfo: $likeInfo) {
            success
          }
        }
          `,
      variables: {
        likeInfo: {
          createLike: createLike,
          eventID: eventID,
          postID: postID,
          userID: userID,
        },
      },
    },
  })
    .then(result => {
      if (result.data.errors) {
        throw new Error('Problem toggling like: ', result.data.errors);
      }
      return result.data.data.toggleLike.success;
    })
    .catch(error => {
      console.log(error);
      return false;
    });
}
