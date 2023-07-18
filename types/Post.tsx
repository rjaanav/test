import { Comment } from './Comment';
import { User } from './User';

export type Post = {
  videoUrl: string;
  comments?: Comment[];
  id: string;
  eventID: string;
  author: User;
  likes: string[];
  createdAt: string;
};
