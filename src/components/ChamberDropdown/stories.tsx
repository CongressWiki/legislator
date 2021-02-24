import React from 'react';
import { Story, Meta } from '@storybook/react';

import ChamberDropdown, { ChamberDropdownProps } from './index';

export default {
  title: 'Components/ChamberDropdown',
  component: ChamberDropdown,
} as Meta;

const Template: Story<ChamberDropdownProps> = ({ className }) => (
  <ChamberDropdown className={className} />
);

export const Default = Template.bind({});
