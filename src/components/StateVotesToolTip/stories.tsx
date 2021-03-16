import React from 'react';
import { Story, Meta } from '@storybook/react';

import StateVotesToolTip, { StateVotesToolTipProps } from './index';

export default {
  title: 'Components/StateVotesToolTip',
  component: StateVotesToolTip,
} as Meta;

const Template: Story<StateVotesToolTipProps> = ({ ...args }) => (
  <StateVotesToolTip {...args} />
);

export const Default = Template.bind({});
Default.args = {
  state: 'IA',
  sponsor: undefined,
  cosponsors: [],
  className: '',
};
