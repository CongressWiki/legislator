import React from 'react';
import { Story, Meta } from '@storybook/react';

import SimpleInfiniteScrollList from './index';

export default {
  title: 'components/atoms/SimpleInfiniteScrollList',
  component: SimpleInfiniteScrollList,
} as Meta;

const Template: Story = () => <SimpleInfiniteScrollList />;

export const Default = Template.bind({});
