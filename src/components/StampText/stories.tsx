import React from 'react';
import { Story, Meta } from '@storybook/react';

import StampText from './index';

export default {
  title: 'Components/StampText',
  component: StampText,
} as Meta;

const Template: Story = ({ text }) => <StampText>{text}</StampText>;

export const Default = Template.bind({});
Template.args = {
  text: 'Passed',
};
