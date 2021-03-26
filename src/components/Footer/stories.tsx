import React from 'react';
import { Story, Meta } from '@storybook/react';

import Footer, { FooterProps } from './index';

export default {
  title: 'Components/Footer',
  component: Footer,
} as Meta;

const Template: Story<FooterProps> = (args) => <Footer {...args} />;

export const Default = Template.bind({});
Default.args = {
  siteTitle: 'USACounts',
};
