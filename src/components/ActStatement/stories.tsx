import React from 'react';
import { Story, Meta } from '@storybook/react';
import ActStatement from './index';

export default {
  title: 'Components/ActStatement',
  component: ActStatement,
} as Meta;

const Template: Story = (args) => <ActStatement>{args.text}</ActStatement>;

export const Default = Template.bind({});
Default.args = {
  text: 'An Act of 2021',
};
