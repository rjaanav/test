import React from 'react';

import Button from '../components/ui/Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Rezonate/Button',
  component: Button,
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = args => <Button {...args}>hello world</Button>;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
  label: 'first button example',
};

export const Secondary = Template.bind({});

Secondary.args = {
  label: 'second button',
  className: 'btn rounded w-full',
};
