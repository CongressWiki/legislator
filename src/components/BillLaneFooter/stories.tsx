import React from 'react';
import { Story, Meta } from '@storybook/react';

import BillLaneFooter, { BillLaneFooterProps } from './index';

export default {
  title: 'Components/BillLaneFooter',
  component: BillLaneFooter,
} as Meta;

const Template: Story<BillLaneFooterProps> = (args) => (
  <BillLaneFooter {...args} />
);

export const Default = Template.bind({});
Default.args = {
  onClick: () => console.log('clicked'),
};
