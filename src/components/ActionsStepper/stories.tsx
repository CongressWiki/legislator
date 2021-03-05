import React from 'react';
import { Story, Meta } from '@storybook/react';

import ActionsStepper, { ActionsStepperProps } from './index';

export default {
  title: 'Components/ActionsStepper',
  component: ActionsStepper,
} as Meta;

const Template: Story<ActionsStepperProps> = (args) => (
  <ActionsStepper {...args} />
);

export const Default = Template.bind({});
Default.args = {
  actions: [],
};
