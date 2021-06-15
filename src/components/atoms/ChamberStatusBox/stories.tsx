import React from 'react';
import { Story, Meta } from '@storybook/react';

import ChamberStatusBox, { ChamberStatusBoxProps } from './index';

export default {
  title: 'components/atoms/ChamberStatusBox',
  component: ChamberStatusBox,
} as Meta;

const Template: Story<ChamberStatusBoxProps> = (arguments_) => (
  <ChamberStatusBox {...arguments_} />
);

export const Default = Template.bind({});
Default.args = {
  chamber: 'HOUSE',
  actionText: 'On passage Passed without objection.',
  className: '',
};
