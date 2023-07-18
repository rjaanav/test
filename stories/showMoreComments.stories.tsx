import React from 'react';

import ShowMoreComments from '../components/ui/showMoreComments';

export default {
  title: 'Rezonate/ShowMoreComments',
  component: ShowMoreComments,
};

const Template = args => <ShowMoreComments {...args} />;

export const PostUserName = Template.bind({});
PostUserName.args = {
  numComments: 10,
};
