import React from 'react';
import { Story, Meta } from '@storybook/react';
import NoSummaryPlaceholder from './index';

export default {
  title: 'Components/NoSummaryPlaceholder',
  component: NoSummaryPlaceholder,
} as Meta;

const Template: Story = (arguments_) => <NoSummaryPlaceholder />;

export const Default = Template.bind({});
Default.args = {};
