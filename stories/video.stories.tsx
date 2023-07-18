import React from 'react';

import Video from 'components/ui/video';

export default {
  title: 'Rezonate/Video',
  component: Video,
};

const Template = args => <Video {...args} />;

export const VerticalVideo = Template.bind({});
VerticalVideo.args = {
  src: 'https://assets.mixkit.co/videos/preview/mixkit-blue-ink-swirling-1195-large.mp4',
};

export const HorizontalVideo = Template.bind({});
HorizontalVideo.args = {
  src: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
};
