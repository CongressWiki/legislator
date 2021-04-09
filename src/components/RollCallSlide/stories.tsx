import React from 'react';
import { Story, Meta } from '@storybook/react';

import RollCallSlide, {
  RollCallSlideProps as RollCallSlideProperties,
} from './index';

export default {
  title: 'Components/RollCallSlide',
  component: RollCallSlide,
} as Meta;

const Template: Story<RollCallSlideProperties> = ({ ...arguments_ }) => (
  <RollCallSlide {...arguments_} />
);

export const Default = Template.bind({});
Default.args = {
  rollCall: {},
};
