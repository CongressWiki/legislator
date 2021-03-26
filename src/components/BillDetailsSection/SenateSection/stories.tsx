import React from 'react';
import { Story, Meta } from '@storybook/react';

import SenateSection, { SenateSectionProps } from './index';

export default {
  title: 'Components/BillsDetailsSection/SenateSection',
  component: SenateSection,
} as Meta;

const Template: Story<SenateSectionProps> = ({ ...args }) => (
  <SenateSection {...args} />
);

export const Default = Template.bind({});
