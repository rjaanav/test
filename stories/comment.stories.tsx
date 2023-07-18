import React from 'react';

import Comment from '../components/ui/comment';

export default {
  title: 'Rezonate/Comment',
  component: Comment,
};

const Template = args => <Comment {...args} />;

export const PostUserName = Template.bind({});
PostUserName.args = {
  comment: {
    user: {
      username: 'username',
      profileImage: '',
    },
    text: 'Banger mate.',
  },
  isPreview: true,
};

export const WithProfileImage = Template.bind({});
WithProfileImage.args = {
  comment: {
    user: {
      username: 'username',
      profileImage: 'https://placeimg.com/192/192/people',
    },
    text: 'Banger mate.',
  },
  isPreview: false,
};

export const WithProfileImagePreview = Template.bind({});
WithProfileImagePreview.args = {
  comment: {
    user: {
      username: 'username',
      profileImage: 'https://placeimg.com/192/192/people',
    },
    text: 'Banger mate.',
  },
  isPreview: true,
};
