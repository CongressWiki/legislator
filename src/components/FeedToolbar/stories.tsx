import React from 'react';
import { Story, Meta } from '@storybook/react';

import FeedToolbar, {
  FeedToolbarProps as FeedToolbarProperties,
} from './index';

export default {
  title: 'Components/FeedToolbar',
  component: FeedToolbar,
} as Meta;

const Template: Story<FeedToolbarProperties> = ({ ...arguments_ }) => (
  <FeedToolbar {...arguments_} />
);

export const Default = Template.bind({});
