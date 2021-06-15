import React from 'react';
import { Story, Meta } from '@storybook/react';

import Avatar, { AvatarProps as AvatarProperties } from './index';

export default {
  title: 'components/atoms/Avatar',
  component: Avatar,
} as Meta;

const Template: Story<AvatarProperties> = ({ ...arguments_ }) => (
  <Avatar {...arguments_} />
);

export const Default = Template.bind({});
Default.args = {
  size: '50px',
  party: '',
  className: '',
};
