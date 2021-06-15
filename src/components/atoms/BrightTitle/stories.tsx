import React from 'react';
import { Story, Meta } from '@storybook/react';

import BrightTitle from './index';

export default {
  title: 'components/atoms/BrightTitle',
  component: BrightTitle,
} as Meta;

const Template: Story = ({ text }) => <BrightTitle>{text}</BrightTitle>;

export const Default = Template.bind({});
Default.args = {
  text: 'Bills & Amendments',
};
