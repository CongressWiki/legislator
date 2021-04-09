import React from 'react';
import { Story, Meta } from '@storybook/react';
import BillList from './index';

export default {
  title: 'Components/BillList',
  component: BillList,
} as Meta;

const Template: Story = (arguments_) => (
  <BillList paragraph={arguments_.paragraph} index={arguments_.index} />
);

export const Default = Template.bind({});
Default.args = {
  paragraph: 'An Act of 2021',
  index: 12,
};
