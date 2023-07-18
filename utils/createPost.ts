const axios = require('axios');
import { Event } from 'types/Event';

export default async function createPost(
  videoUrl: string,
  postID: string,
  eventID: string,
  userID: string
): Promise<Event> {
  return axios({
    url: process.env.REACT_APP_API_URL,
    method: 'post',
    data: {
      query: `
      mutation Mutation($newPost: createPostInput) {
        createPost(newPost: $newPost) {
          success
        }
      }
        `,
      variables: {
        newPost: {
          videoUrl: videoUrl,
          id: postID,
          eventID: eventID,
          authorID: userID,
        },
      },
    },
  })
    .then(result => {
      if (result.data.errors) {
        throw new Error(result.data.errors[0]);
      }
      return result.data.data.createPost.success;
    })
    .catch(error => {
      console.log('Error creating post:', error);
    });
}
