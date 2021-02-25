import React from 'react';
import {Story, Meta} from '@storybook/react';

import SiteTitle from './index';

export default {
  title: 'Components/SiteTitle',
  component: SiteTitle
} as Meta;

const Template: Story = ({text}) => <SiteTitle>{text}</SiteTitle>;

export const Default = Template.bind({});
