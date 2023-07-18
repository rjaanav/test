import React from 'react';

import UserName from '../components/ui/username';

export default {
  title: 'Rezonate/UserName',
  component: UserName,
};

const Template = args => <UserName {...args} />;

export const PostUserName = Template.bind({});
PostUserName.args = {
  style: 'items-center',
  user: { profileImage: '', username: 'username' },
};

export const WithAvatar = Template.bind({});
WithAvatar.args = {
  style: 'items-center',
  user: { profileImage: 'https://placeimg.com/192/192/people', username: 'username' },
};
