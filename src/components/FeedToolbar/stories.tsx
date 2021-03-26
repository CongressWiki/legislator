import React from 'react';
import { Story, Meta } from '@storybook/react';

import FeedToolbar, { FeedToolbarProps } from './index';

export default {
  title: 'Components/FeedToolbar',
  component: FeedToolbar,
} as Meta;

const Template: Story<FeedToolbarProps> = ({ ...args }) => (
  <FeedToolbar {...args} />
);

export const Default = Template.bind({});
