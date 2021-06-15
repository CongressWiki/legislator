import React from 'react';
import { Story, Meta } from '@storybook/react';
import sampleActions from './sample-actions.json';

import ActionsStepper, { ActionsStepperProps } from './index';

export default {
  title: 'Components/molecules/ActionsStepper',
  component: ActionsStepper,
} as Meta;

const Template: Story<ActionsStepperProps> = (arguments_) => (
  <ActionsStepper {...arguments_} />
);

export const Default = Template.bind({});
Default.args = sampleActions;
