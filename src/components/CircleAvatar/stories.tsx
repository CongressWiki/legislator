import React from 'react';
import { Story, Meta } from '@storybook/react';

import CircleAvatar, { CircleAvatarProps } from './index';

export default {
  title: 'Components/CircleAvatar',
  component: CircleAvatar,
} as Meta;

const Template: Story<CircleAvatarProps> = ({ ...args }) => (
  <CircleAvatar {...args} />
);

export const Default = Template.bind({});
Default.args = {
  name: '',
  party: '',
  imageData: {},
  size: '',
  className: '',
};
