import React from 'react';
import { Story, Meta } from '@storybook/react';

import RotatingButton, { RotatingButtonProps } from './index';

export default {
  title: 'Components/RotatingButton',
  component: RotatingButton,
} as Meta;

const Template: Story<RotatingButtonProps> = ({ ...args }) => (
  <RotatingButton {...args} />
);

export const Default = Template.bind({});
