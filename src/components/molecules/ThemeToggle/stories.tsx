import React from 'react';
import { Story, Meta } from '@storybook/react';

import ThemeToggle from './index';

export default {
  title: 'Components/molecules/ThemeToggle',
  component: ThemeToggle,
} as Meta;

const Template: Story = () => <ThemeToggle />;

export const Default = Template.bind({});
