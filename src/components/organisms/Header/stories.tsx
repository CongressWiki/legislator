import React from 'react';
import { Story, Meta } from '@storybook/react';

import Header, { HeaderProps as HeaderProperties } from './index';

export default {
  title: 'Components/organisms/Header',
  component: Header,
} as Meta;

const Template: Story<HeaderProperties> = (arguments_) => (
  <Header {...arguments_} />
);

export const Default = Template.bind({});
Default.args = {
  siteTitle: 'USACounts',
};
