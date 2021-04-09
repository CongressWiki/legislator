import React from 'react';
import { Story, Meta } from '@storybook/react';

import VoteCount, { VoteCountProps as VoteCountProperties } from './index';

export default {
  title: 'Components/VoteCount',
  component: VoteCount,
} as Meta;

const Template: Story<VoteCountProperties> = ({ ...arguments_ }) => (
  <VoteCount {...arguments_} />
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
