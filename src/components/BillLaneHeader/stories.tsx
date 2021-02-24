import React from 'react';
import { Story, Meta } from '@storybook/react';

import BillLaneHeader from './index';

export default {
  title: 'Components/BillLaneHeader',
  component: BillLaneHeader,
} as Meta;

const Template: Story = () => <BillLaneHeader />;

export const Default = Template.bind({});
