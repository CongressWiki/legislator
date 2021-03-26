import React from 'react';
import { Story, Meta } from '@storybook/react';

import VoteCount, { VoteCountProps } from './index';

export default {
  title: 'Components/VoteCount',
  component: VoteCount,
} as Meta;

const Template: Story<VoteCountProps> = ({ ...args }) => (
  <VoteCount {...args} />
);

export const Default = Template.bind({});
Default.args = {
  decision: '',
  count: 0,
  color: '',
  focusedDecision: '',
  onClick: () => {},
  className: '',
};
