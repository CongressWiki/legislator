import React from 'react';
import { Story, Meta } from '@storybook/react';
import BillListItem from './index';

export default {
  title: 'Components/BillListItem',
  component: BillListItem,
} as Meta;

const Template: Story = (args) => <BillListItem statement={args.statement} />;

export const Default = Template.bind({});
Default.args = {
  statement: 'An Act of 2021',
};
