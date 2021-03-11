import React from 'react';
import { Story, Meta } from '@storybook/react';

import LogoutButton from './index';

export default {
  title: 'Components/LogoutButton',
  component: LogoutButton,
} as Meta;

const Template: Story = () => <LogoutButton />;

export const Default = Template.bind({});
