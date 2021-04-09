import React from 'react';
import { Story, Meta } from '@storybook/react';

import SponsorSpotlight, {
  SponsorSpotlightProps as SponsorSpotlightProperties,
} from './index';

export default {
  title: 'Components/SponsorSpotlight',
  component: SponsorSpotlight,
} as Meta;

const Template: Story<SponsorSpotlightProperties> = ({ ...arguments_ }) => (
  <SponsorSpotlight {...arguments_} />
);

export const Default = Template.bind({});
