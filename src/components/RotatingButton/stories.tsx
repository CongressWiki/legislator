import React from 'react';
import { Story, Meta } from '@storybook/react';

import RotatingButton, {
  RotatingButtonProps as RotatingButtonProperties,
} from './index';

export default {
  title: 'Components/RotatingButton',
  component: RotatingButton,
} as Meta;

const Template: Story<RotatingButtonProperties> = ({ ...arguments_ }) => (
  <RotatingButton {...arguments_} />
);

export const Default = Template.bind({});
