import React from 'react';
import { Story, Meta } from '@storybook/react';

import BillLaneHeader, {
  BillLaneHeaderProps as BillLaneHeaderProperties,
} from './index';

export default {
  title: 'Components/molecules/BillLaneHeader',
  component: BillLaneHeader,
} as Meta;

const Template: Story<BillLaneHeaderProperties> = (arguments_) => (
  <BillLaneHeader {...arguments_} />
);

export const Default = Template.bind({});
Default.args = {
  handleChamberSelection: (selection: string) => {
    console.log({ selection });
  },
  handleSearchInput: (value: string) => {
    console.log({ value });
  },
  handleOrderAscToggle: (isAscending: boolean) => {
    console.log({ isAscending });
  },
  className: '',
};
