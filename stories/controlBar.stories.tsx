import React from 'react';

import ControlBar from '../components/ui/controlBar';

export default {
  title: 'Rezonate/ControlBar',
  component: ControlBar,
};

const Template = args => (
  <div className="bg-black">
    <ControlBar {...args} />
  </div>
);

export const All = Template.bind({});
All.args = {
  backLink: '/test',
  isComments: true,
  hasLogout: true,
};

export const CommentsPage = Template.bind({});
CommentsPage.args = {
  backLink: '/test',
  isComments: true,
  hasLogout: false,
};

export const EventsPage = Template.bind({});
EventsPage.args = {
  backLink: '',
  isComments: false,
  hasLogout: true,
};

export const EventPage = Template.bind({});
EventPage.args = {
  backLink: '/test',
  isComments: false,
  hasLogout: false,
};
