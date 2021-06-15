import React from 'react';
import { Story, Meta } from '@storybook/react';

import LoginButton from './index';

export default {
  title: 'Components/molecules/LoginButton',
  component: LoginButton,
} as Meta;

const Template: Story = () => <LoginButton />;

export const Default = Template.bind({});
