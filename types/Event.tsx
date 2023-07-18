import { Post } from './Post';
import { Venue } from './Venue';

export type Event = {
  artistMessage: string;
  description: string;
  endDateTime: string;
  flyerImage: string;
  startDateTime: string;
  title: string;
  updatedAt: string;
  venue: Venue;
  buttonLink: string;
  id: string;
  posts: Post[];
  closeDateTime: string;
  slug: string;
};
