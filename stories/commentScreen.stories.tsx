import React from 'react';

import Post from '../components/ui/post';
import CommentScreen from '../components/pages/comments';
import _default from 'next/dist/shared/lib/runtime-config';

export default {
  title: 'Rezonate/CommentScreen',
  component: CommentScreen,
};

const Template = args => <CommentScreen {...args} />;

export const Default = Template.bind({});
Default.args = {
  comments: [
    {
      user: {
        username: 'sanat',
        profileImage: '',
      },
      text: 'hehehe',
    },
    {
      user: {
        username: 'ian21',
        profileImage: '',
      },
      text: 'Banger mate.',
    },
    {
      user: {
        username: 'tristantg1',
        profileImage: '',
      },
      text: 'Yuck!',
    },
    {
      user: {
        username: 'tristantg1',
        profileImage: '',
      },
      text: 'Yuck!',
    },
    {
      user: {
        username: 'tristantg1',
        profileImage: '',
      },
      text: 'Yuck!',
    },
    {
      user: {
        username: 'tristantg1',
        profileImage: '',
      },
      text: 'Yuck!',
    },
    {
      user: {
        username: 'tristantg1',
        profileImage: '',
      },
      text: 'Yuck!',
    },
    {
      user: {
        username: 'tristantg1',
        profileImage: '',
      },
      text: 'Yuck!',
    },
    {
      user: {
        username: 'tristantg1',
        profileImage: '',
      },
      text: 'Yuck!',
    },
    {
      user: {
        username: 'tristantg1',
        profileImage: '',
      },
      text: 'Yuck!',
    },
    {
      user: {
        username: 'tristantg1',
        profileImage: '',
      },
      text: 'Yuck!',
    },
  ],
};
