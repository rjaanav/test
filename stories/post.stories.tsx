import React from 'react';

import Post from '../components/ui/post';

export default {
  title: 'Rezonate/Post',
  component: Post,
};

const Template = args => <Post {...args} />;

export const Button = Template.bind({});
Button.args = {
  post: {
    comments: [
      {
        user: {
          username: 'hh123',
        },
        text: 'hehehe',
      },
      {
        user: {
          username: 'sanatswrld',
        },
        text: 'Banger mate.',
      },
      {
        user: {
          username: 'tristantongue',
        },
        text: 'Yuck!',
      },
    ],
    videoUrl:
      'https://assets.mixkit.co/videos/preview/mixkit-dj-giving-a-concert-in-a-lonely-desert-42424-large.mp4',
    likes: 16,
  },
};

export const HorizontalVideo = Template.bind({});
HorizontalVideo.args = {
  post: {
    comments: [
      {
        user: {
          username: 'mattpng',
        },
        text: 'hehehe',
      },
      {
        user: {
          username: 'sanatswrld',
        },
        text: 'Banger mate.',
      },
    ],
    videoUrl:
      'https://assets.mixkit.co/videos/preview/mixkit-woman-recording-a-concert-with-her-smartphone-32590-large.mp4',
    likes: 16,
  },
};
