import React from 'react';
import { Story, Meta } from '@storybook/react';

import TooltipAvatar, {
  TooltipAvatarProps as TooltipAvatarProperties,
} from './index';

export default {
  title: 'Components/TooltipAvatar',
  component: TooltipAvatar,
} as Meta;

const Template: Story<TooltipAvatarProperties> = ({ ...arguments_ }) => (
  <TooltipAvatar {...arguments_} />
);

export const Default = Template.bind({});
Default.args = {
  preferred_name: '',
  political_party: '',
  image: {},
  size: '',
  className: '',
};
