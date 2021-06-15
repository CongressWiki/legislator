import React from 'react';
import { Story, Meta } from '@storybook/react';

import Footer, { FooterProps as FooterProperties } from './index';

export default {
  title: 'Components/organisms/Footer',
  component: Footer,
} as Meta;

const Template: Story<FooterProperties> = (arguments_) => (
  <Footer {...arguments_} />
);

export const Default = Template.bind({});
Default.args = {
  siteTitle: 'USACounts',
};
