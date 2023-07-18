const axios = require('axios');
import { Post } from 'types/Post';

export default async function getPostsByEventID(id: string): Promise<Array<Post>> {
  return axios({
    url: process.env.REACT_APP_API_URL,
    method: 'post',
    data: {
      query: `
            query GetPostsByEventID($getPostsByEventId: String!) {
              getPostsByEventID(id: $getPostsByEventId) {
                videoUrl
                likes
                id
                eventID
                createdAt
                comments {
                  text
                  id
                  user {
                    id
                    username
                    profileImage
                  }
                }
                author {
                  username
                  id
                  profileImage
                }
              }
            }
            `,
      variables: {
        getPostsByEventId: id,
      },
    },
  })
    .then(result => {
      if (result.data.errors) {
        console.log(result.data.errors);
        throw new Error(result.data.errors[0]);
      }
      return result.data.data.getPostsByEventID;
    })
    .catch(error => {
      console.log('Error getting posts: ', error);
      return false;
    });
}
