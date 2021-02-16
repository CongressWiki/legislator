import React from 'react';
import { Story, Meta } from '@storybook/react';

import Stepper, { VerticalLinearStepperProps } from './index';

export default {
  title: 'Components/Stepper',
  component: Stepper,
} as Meta;

const Template: Story<VerticalLinearStepperProps> = (args) => (
  <Stepper {...args} />
);

export const Default = Template.bind({});
Default.args = {
  steps: ['First Event', 'Second Event', 'Third Event'],
};
