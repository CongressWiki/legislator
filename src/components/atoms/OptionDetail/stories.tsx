import React from 'react';
import { Story, Meta } from '@storybook/react';

import OptionDetail, { OptionDetailProps } from './index';

export default {
  title: 'components/atoms/OptionDetail',
  component: OptionDetail,
} as Meta;

const Template: Story<OptionDetailProps> = (arguments_) => (
  <OptionDetail {...arguments_} />
);

export const Default = Template.bind({});
Default.args = {
  text: 'text',
  subtext: 'subtext',
  slug: 'slug',
  type: 'committees',
  className: '',
};
