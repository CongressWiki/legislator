import React from 'react';
import { Story, Meta } from '@storybook/react';

import TooltipAvatar, { TooltipAvatarProps } from './index';

export default {
  title: 'Components/TooltipAvatar',
  component: TooltipAvatar,
} as Meta;

const Template: Story<TooltipAvatarProps> = ({ ...args }) => (
  <TooltipAvatar {...args} />
);

export const Default = Template.bind({});
Default.args = {
  preferred_name: '',
  political_party: '',
  image: {},
  size: '',
  className: '',
};
