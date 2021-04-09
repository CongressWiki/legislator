import React from 'react';
import { Story, Meta } from '@storybook/react';

import AnimatedTextLoader from './index';

export default {
  title: 'Components/AnimatedTextLoader',
  component: AnimatedTextLoader,
} as Meta;

const Template: Story = (arguments_) => <AnimatedTextLoader {...arguments_} />;

export const Default = Template.bind({});
