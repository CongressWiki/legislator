import React from 'react';
import { Story, Meta } from '@storybook/react';

import BillLaneHeader, { BillLaneHeaderProps } from './index';

export default {
  title: 'Components/BillLaneHeader',
  component: BillLaneHeader,
} as Meta;

const Template: Story<BillLaneHeaderProps> = (args) => (
  <BillLaneHeader {...args} />
);

export const Default = Template.bind({});
Default.args = {
  handleChamberSelection: (selection: string) => console.log({ selection }),
  handleSearchInput: (value: string) => console.log({ value }),
  handleOrderAscToggle: (isAscending: boolean) => console.log({ isAscending }),
  className: '',
};
