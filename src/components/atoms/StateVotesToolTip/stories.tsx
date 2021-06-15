import React from 'react';
import { Story, Meta } from '@storybook/react';

import StateVotesToolTip, { StateVotesToolTipProps } from './index';

export default {
  title: 'components/atoms/StateVotesToolTip',
  component: StateVotesToolTip,
} as Meta;

const Template: Story<StateVotesToolTipProps> = ({ ...arguments_ }) => (
  <StateVotesToolTip {...arguments_} />
);

export const Default = Template.bind({});
Default.args = {
  state: 'IA',
  votes: [],
  className: '',
};
