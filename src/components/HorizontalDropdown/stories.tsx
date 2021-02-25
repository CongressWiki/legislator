import React from 'react';
import {Story, Meta} from '@storybook/react';

import HorizontalDropdown, {HorizontalDropdownProps} from './index';

export default {
  title: 'Components/HorizontalDropdown',
  component: HorizontalDropdown
} as Meta;

const Template: Story<HorizontalDropdownProps> = (args) => (
  <HorizontalDropdown {...args} />
);

export const Default = Template.bind({});
Default.args = {
  options: ['Bears', 'Beats', 'Battlestar Galactica']
};
