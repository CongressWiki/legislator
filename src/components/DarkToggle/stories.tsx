import React from 'react';
import { Story, Meta } from '@storybook/react';

import DarkToggle from './index';

export default {
  title: 'Components/DarkToggle',
  component: DarkToggle,
} as Meta;

const Template: Story = () => <DarkToggle />;

export const Default = Template.bind({});
