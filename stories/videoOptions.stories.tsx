import React from 'react';

import VideoOptions from 'components/ui/videoOptions';

export default {
  title: 'Rezonate/VideoOptions',
  component: VideoOptions,
};

const Template = args => (
  <div
    style={{
      marginBottom: '60px',
      display: 'flex',
      position: 'relative',
      justifyContent: 'flex-end',
    }}
  >
    <VideoOptions {...args} />
  </div>
);

export const Default = Template.bind({});
