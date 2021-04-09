import React from 'react';
import { Story, Meta } from '@storybook/react';

import CircleAvatar, {
  CircleAvatarProps as CircleAvatarProperties,
} from './index';

export default {
  title: 'Components/CircleAvatar',
  component: CircleAvatar,
} as Meta;

const Template: Story<CircleAvatarProperties> = ({ ...arguments_ }) => (
  <CircleAvatar {...arguments_} />
);

export const Default = Template.bind({});
Default.args = {
  preferred_name: '',
  political_party: '',
  image: {},
  size: '',
  className: '',
};
