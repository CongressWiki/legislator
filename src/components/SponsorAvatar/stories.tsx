import React from 'react';
import { Story, Meta } from '@storybook/react';
import SponsorAvatar from './index';

export default {
  title: 'Components/SponsorAvatar',
  component: SponsorAvatar,
} as Meta;

const Template: Story = (args) => (
  <SponsorAvatar paragraph={args.paragraph} index={args.index} />
);

export const Default = Template.bind({});
Default.args = {
  paragraph: 'An Act of 2021',
  index: 12,
};
