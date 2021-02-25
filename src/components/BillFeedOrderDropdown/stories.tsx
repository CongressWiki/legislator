import React from 'react';
import {Story, Meta} from '@storybook/react';

import BillFeedOrderDropdown, {BillFeedOrderDropdownProps} from './index';

export default {
  title: 'Components/BillFeedOrderDropdown',
  component: BillFeedOrderDropdown
} as Meta;

const Template: Story<BillFeedOrderDropdownProps> = (args) => (
  <BillFeedOrderDropdown {...args} />
);

export const Default = Template.bind({});
