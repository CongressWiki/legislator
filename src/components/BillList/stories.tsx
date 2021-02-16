import React from 'react';
import { Story, Meta } from '@storybook/react';
import BillList from './index';

export default {
  title: 'Components/BillList',
  component: BillList,
} as Meta;

const Template: Story = (args) => (
  <BillList paragraph={args.paragraph} index={args.index} />
);

export const Default = Template.bind({});
Default.args = {
  paragraph: 'An Act of 2021',
  index: 12,
};
