import React from 'react';

import VolumeToggle from '../components/ui/volumeToggle';

export default {
  title: 'Rezonate/VolumeToggle',
  component: VolumeToggle,
};

const Template = args => (
  <div className="flex justify-center">
    <VolumeToggle {...args} />
  </div>
);

export const Button = Template.bind({});
Button.args = {
  toggleSound: () => console.log('toggle mute'),
};
