import React from 'react';
import { Story, Meta } from '@storybook/react';

import BillLaneFooter, {
  BillLaneFooterProps as BillLaneFooterProperties,
} from './index';

export default {
  title: 'Components/molecules/BillLaneFooter',
  component: BillLaneFooter,
} as Meta;

const Template: Story<BillLaneFooterProperties> = (arguments_) => (
  <BillLaneFooter {...arguments_} />
);

export const Default = Template.bind({});
Default.args = {
  onClick: () => {
    console.log('clicked');
  },
};
