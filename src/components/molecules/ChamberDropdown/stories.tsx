import React from 'react';
import { Story, Meta } from '@storybook/react';

import ChamberDropdown, {
  ChamberDropdownProps as ChamberDropdownProperties,
} from './index';

export default {
  title: 'Components/molecules/ChamberDropdown',
  component: ChamberDropdown,
} as Meta;

const Template: Story<ChamberDropdownProperties> = ({ className }) => (
  <ChamberDropdown className={className} />
);

export const Default = Template.bind({});
