import React from 'react';
import { Story, Meta } from '@storybook/react';
import SponsorAvatar, { SponsorAvatarProps } from './index';

export default {
  title: 'Components/SponsorAvatar',
  component: SponsorAvatar,
} as Meta;

const Template: Story<SponsorAvatarProps> = ({ ...args }) => (
  <SponsorAvatar {...args} />
);

export const Default = Template.bind({});
Default.args = {
  id: 'A000001',
};
