import React from 'react';
import { Story, Meta } from '@storybook/react';
import BillListItem from './index';

export default {
  title: 'components/atoms/BillListItem',
  component: BillListItem,
} as Meta;

const Template: Story = (arguments_) => (
  <BillListItem statement={arguments_.statement} />
);

export const Default = Template.bind({});
Default.args = {
  statement: 'An Act of 2021',
};
