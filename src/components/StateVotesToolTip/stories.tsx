import React from 'react';
import { Story, Meta } from '@storybook/react';

import StateVotesToolTip, {
  StateVotesToolTipProps as StateVotesToolTipProperties,
} from './index';

export default {
  title: 'Components/StateVotesToolTip',
  component: StateVotesToolTip,
} as Meta;

const Template: Story<StateVotesToolTipProperties> = ({ ...arguments_ }) => (
  <StateVotesToolTip {...arguments_} />
);

export const Default = Template.bind({});
Default.args = {
  state: 'IA',
  votes: [],
  className: '',
};
