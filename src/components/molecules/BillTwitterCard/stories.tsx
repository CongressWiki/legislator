import React from 'react';
import { Story, Meta } from '@storybook/react';
import BillTwitterCard, { BillTwitterCardProps } from './index';
import billCardProps from '@samples/bill-card-props.json';

export default {
  title: 'components/molecules/BillTwitterCard',
  component: BillTwitterCard,
} as Meta;

const Template: Story<BillTwitterCardProps> = (arguments_) => (
  <BillTwitterCard {...arguments_} />
);

export const dorisMatsui = Template.bind({});
dorisMatsui.args = billCardProps as any;
