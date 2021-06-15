import React from 'react';
import { Story, Meta } from '@storybook/react';

import HorizontalDropdown, {
  HorizontalDropdownProps as HorizontalDropdownProperties,
} from './index';

export default {
  title: 'components/atoms/HorizontalDropdown',
  component: HorizontalDropdown,
} as Meta;

const Template: Story<HorizontalDropdownProperties> = (arguments_) => (
  <HorizontalDropdown {...arguments_} />
);

export const Default = Template.bind({});
Default.args = {
  options: ['Bears', 'Beats', 'Battlestar Galactica'],
};
