const axios = require('axios');
import { Event } from 'types/Event';

export default async function getEventByID(id: string): Promise<Event> {
  return axios({
    url: process.env.REACT_APP_API_URL,
    method: 'post',
    data: {
      query: `
        query Event($eventId: String!) {
          event(id: $eventId) {
            title
            artistMessage
            description
            flyerImage
            startDateTime
            closeDateTime
            id
            venue {
              displayName
            }
          }
        }
      `,
      variables: {
        eventId: id,
      },
    },
  })
    .then(result => {
      if (result.data.errors) {
        throw new Error(result.data.errors[0]);
      }
      return result.data.data.event;
    })
    .catch(error => {
      return;
    });
}
