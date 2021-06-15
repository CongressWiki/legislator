import React from 'react';
import { Story, Meta } from '@storybook/react';
import BillCard from '@components/molecules/BillTwitterCard';
import BillLane from '@components/atoms/BillLane';
import billCardProps from '@samples/bill-card-props.json';

import BillFeedLayout, { BillFeedLayoutProps } from './index';

export default {
  title: 'Components/templates/Layouts/BillFeed',
  component: BillFeedLayout,
} as Meta;

const Template: Story<BillFeedLayoutProps> = (args) => (
  <BillFeedLayout>
    <BillLane>
      <BillCard {...(billCardProps as any)} />
      <BillCard {...(billCardProps as any)} />
      <BillCard {...(billCardProps as any)} />
      <BillCard {...(billCardProps as any)} />
    </BillLane>
  </BillFeedLayout>
);

export const Default = Template.bind({});
