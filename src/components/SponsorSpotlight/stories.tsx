import React from 'react';
import { Story, Meta } from '@storybook/react';

import SponsorSpotlight, { SponsorSpotlightProps } from './index';

export default {
  title: 'Components/SponsorSpotlight',
  component: SponsorSpotlight,
} as Meta;

const Template: Story<SponsorSpotlightProps> = ({ ...args }) => (
  <SponsorSpotlight {...args} />
);

export const Default = Template.bind({});
