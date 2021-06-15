import React from 'react';
import { Story, Meta } from '@storybook/react';
import BillCard, { BillCardProps } from './index';
import billCardProps from '@samples/bill-card-props.json';

export default {
  title: 'components/molecules/BillCard',
  component: BillCard,
} as Meta;

const Template: Story<BillCardProps> = (arguments_) => (
  <BillCard {...arguments_} />
);

export const dorisMatsui = Template.bind({});
dorisMatsui.args = billCardProps as any;
