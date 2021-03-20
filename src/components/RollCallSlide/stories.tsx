import React from 'react';
import { Story, Meta } from '@storybook/react';

import RollCallSlide, { RollCallSlideProps } from './index';

export default {
  title: 'Components/RollCallSlide',
  component: RollCallSlide,
} as Meta;

const Template: Story<RollCallSlideProps> = ({ ...args }) => (
  <RollCallSlide {...args} />
);

export const Default = Template.bind({});
Default.args = {
  rollCall: {},
};
