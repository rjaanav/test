import React from 'react';

import Card from '../components/ui/card';

export default {
  title: 'Rezonate/Card',
  component: Card,
};

const Template = args => <Card {...args} />;

export const Button = Template.bind({});
Button.args = {
  event: {
    date: 'Feb 24th',
    title: 'Azzecca',
    displayLocation: 'AI Showroom',
    buttonLink: '/azzeca',
    imageLink: 'https://i.scdn.co/image/ab6761610000e5ebddd253c69077a358300980e4',
  },
};

export const ArtistMessage = Template.bind({});
ArtistMessage.args = {
  event: {
    date: 'Mar 3rd',
    title: 'Peggy Gou',
    displayLocation: 'Flash',
    description:
      'Welcome to my little event community, thank you so much for joining! Let’s relive the amazing night we had together.',
    imageLink: 'https://media.resources.festicket.com/www/artists/Peggy_Gou.jpg',
  },
};
