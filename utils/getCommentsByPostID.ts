const axios = require('axios');
import { Comment } from 'types/Comment';
import { Event } from 'types/Event';

export default async function getCommentsByPostID(
  postID: string,
  eventID: string
): Promise<Array<Comment>> {
  return axios({
    url: process.env.REACT_APP_API_URL,
    method: 'post',
    data: {
      query: `
      query GetCommentsByPostID($eventId: String!, $postId: String!) {
        getCommentsByPostID(eventID: $eventId, postID: $postId) {
          text
          createdAt
          user {
            id
            profileImage
            username
          }
          id
        }
      }
        `,
      variables: {
        eventId: eventID,
        postId: postID,
      },
    },
  })
    .then(result => {
      if (result.data.errors) {
        throw new Error('Problem getting comments: ', result.data.errors);
      }
      let commentArray = result.data.data.getCommentsByPostID;
      commentArray = commentArray.sort(function (a, b) {
        return a.createdAt < b.createdAt ? -1 : a.createdAt > b.createdAt ? 1 : 0;
      });
      return commentArray;
    })
    .catch(error => {
      console.log(error);
      return [];
    });
}
