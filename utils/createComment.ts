const axios = require('axios');
import { Comment } from 'types/Comment';

export default async function createComment(
  text: string,
  postID: string,
  eventID: string,
  userID: string
): Promise<Comment> {
  return axios({
    url: process.env.REACT_APP_API_URL,
    method: 'post',
    data: {
      query: `
      mutation Mutation($commentInfo: createComment) {
        createComment(commentInfo: $commentInfo) {
          user {
            id
            username
            profileImage
          }
          text
          createdAt
          id
        }
      }
        `,
      variables: {
        commentInfo: {
          eventID: eventID,
          postID: postID,
          text: text,
          userID: userID,
        },
      },
    },
  })
    .then(result => {
      if (result.data.errors) {
        throw new Error(result.data.errors[0]);
      }
      const commentResult = result.data.data.createComment;
      let comment: Comment = {
        text: text,
        user: {
          username: commentResult.user.username,
          profileImage: commentResult.user.profileImage,
          id: commentResult.user.id,
          email: null,
        },
        id: commentResult.id,
      };
      return comment;
    })
    .catch(error => {
      console.log('Error creating comment: ', error);
      return {};
    });
}
