import React from 'react';
import { Story, Meta } from '@storybook/react';

import StateSponsorsToolTip, {
  StateSponsorsToolTipProps as StateSponsorsToolTipProperties,
} from './index';

export default {
  title: 'Components/StateSponsorsToolTip',
  component: StateSponsorsToolTip,
} as Meta;

const Template: Story<StateSponsorsToolTipProperties> = ({ ...arguments_ }) => (
  <StateSponsorsToolTip {...arguments_} />
);

export const Default = Template.bind({});
Default.args = {
  state: 'IA',
  sponsor: undefined,
  cosponsors: [],
  className: '',
};
