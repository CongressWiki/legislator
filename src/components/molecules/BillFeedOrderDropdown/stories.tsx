import React from 'react';
import { Story, Meta } from '@storybook/react';

import BillFeedOrderDropdown, {
  BillFeedOrderDropdownProps as BillFeedOrderDropdownProperties,
} from './index';

export default {
  title: 'Components/molecules/BillFeedOrderDropdown',
  component: BillFeedOrderDropdown,
} as Meta;

const Template: Story<BillFeedOrderDropdownProperties> = (arguments_) => (
  <BillFeedOrderDropdown {...arguments_} />
);

export const Default = Template.bind({});
