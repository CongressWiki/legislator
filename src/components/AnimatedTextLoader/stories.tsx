import React from 'react';
import { Story, Meta } from '@storybook/react';

import AnimatedTextLoader from './index';

export default {
  title: 'Components/AnimatedTextLoader',
  component: AnimatedTextLoader,
} as Meta;

const Template: Story = (args) => <AnimatedTextLoader {...args} />;

export const Default = Template.bind({});
