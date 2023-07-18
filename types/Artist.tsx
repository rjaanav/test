import { Event } from './Event';
import { User } from './User';

export interface Artist {
  displayName: string;
  communityMessage: string;
  events: Event[];
  user: User;
}
