import React from 'react';
import { Story, Meta } from '@storybook/react';
import billData from '@samples/bill.json';
import BillTemplate, { BillTemplateProps } from './index';

export default {
  title: 'templates/Bill',
  component: BillTemplate,
} as Meta;

const Template: Story<BillTemplateProps> = (args) => <BillTemplate {...args} />;

export const withBillSummary = Template.bind({});
withBillSummary.args = {
  pageContext: {
    slug: '',
    bill: billData,
  },
};
