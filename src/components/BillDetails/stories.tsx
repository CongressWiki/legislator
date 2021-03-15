import React from 'react';
import { Story, Meta } from '@storybook/react';

import BillDetails, { BillDetailsProps } from './index';

export default {
  title: 'Components/BillDetails',
  component: BillDetails,
} as Meta;

const Template: Story<BillDetailsProps> = ({ ...args }) => (
  <BillDetails {...args} />
);

export const Default = Template.bind({});
