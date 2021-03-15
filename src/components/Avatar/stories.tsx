import React from 'react';
import { Story, Meta } from '@storybook/react';

import Avatar, { AvatarProps } from './index';

export default {
  title: 'Components/Avatar',
  component: Avatar,
} as Meta;

const Template: Story<AvatarProps> = ({ ...args }) => <Avatar {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: '50px',
  party: '',
  className: '',
};
