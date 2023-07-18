import ProfileTopSection from 'components/ui/profileTopSection';

export default {
  title: 'Rezonate/ProfileTopSection',
  component: ProfileTopSection,
};

const Template = args => (
  <div>
    <ProfileTopSection {...args} />
  </div>
);

export const MyProfile = Template.bind({});
