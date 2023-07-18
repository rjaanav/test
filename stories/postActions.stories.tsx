import React from 'react';

import PostActions from '../components/ui/postActions';
import image from '../public/img/video.png';

export default {
  title: 'Rezonate/PostActions',
  component: PostActions,
};

const Template = args => (
  <div className="bg-white">
    <PostActions {...args} />
  </div>
);

export const Button = Template.bind({});
Button.args = {
  post: {
    comments: [
      {
        username: 'hh123',
        text: 'hehehe',
      },
      {
        username: 'sanatswrld',
        text: 'Banger mate.',
      },
      {
        username: 'tristantongue',
        text: 'Yuck!',
      },
    ],
    videoUrl: '/test.mov',
    likes: 999,
  },
};

export const ThousandLikes = Template.bind({});
ThousandLikes.args = {
  post: {
    comments: [
      {
        username: 'mattpng',
        text: 'hehehe',
      },
      {
        username: 'sanatswrld',
        text: 'Banger mate.',
      },
    ],
    likes: 16800,
  },
};

export const MillionLikes = Template.bind({});
MillionLikes.args = {
  post: {
    comments: [
      {
        username: 'mattpng',
        text: 'hehehe',
      },
      {
        username: 'sanatswrld',
        text: 'Banger mate.',
      },
    ],
    likes: 1600800,
  },
};
