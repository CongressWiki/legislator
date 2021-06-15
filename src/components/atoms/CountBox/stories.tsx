import React from 'react';
import { Story, Meta } from '@storybook/react';

import CountBox, { CountBoxProps } from './index';

export default {
  title: 'components/atoms/CountBox',
  component: CountBox,
} as Meta;

const Template: Story<CountBoxProps> = (arguments_) => (
  <CountBox {...arguments_} />
);

export const Default = Template.bind({});
Default.args = {
  title: 'TITLE',
  count: 100,
  isActive: true,
  onMouseOver: () => {
    console.log('mouse is over');
  },
  onMouseOut: () => {
    console.log('mouse is out');
  },
  onClick: () => {
    console.log('clicked');
  },
  className: '',
};
