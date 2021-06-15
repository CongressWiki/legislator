import React from 'react';
import { Story, Meta } from '@storybook/react';

import StampText from './index';

export default {
  title: 'components/atoms/StampText',
  component: StampText,
} as Meta;

const Template: Story<{ text: string }> = ({ text }) => (
  <StampText>{text}</StampText>
);

export const Default = Template.bind({});
Default.args = {
  text: 'Passed',
};
