import React from 'react';

import PhotoUpload from '../components/ui/photoUpload';

export default {
  title: 'Rezonate/PhotoUpload',
  component: PhotoUpload,
};

const Template = args => <PhotoUpload {...args} />;

export const Upload = Template.bind({});
