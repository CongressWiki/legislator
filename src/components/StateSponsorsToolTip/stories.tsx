import React from 'react';
import { Story, Meta } from '@storybook/react';

import StateSponsorsToolTip, { StateSponsorsToolTipProps } from './index';

export default {
  title: 'Components/StateSponsorsToolTip',
  component: StateSponsorsToolTip,
} as Meta;

const Template: Story<StateSponsorsToolTipProps> = ({ ...args }) => (
  <StateSponsorsToolTip {...args} />
);

export const Default = Template.bind({});
Default.args = {
  state: 'IA',
  sponsor: undefined,
  cosponsors: [],
  className: '',
};
