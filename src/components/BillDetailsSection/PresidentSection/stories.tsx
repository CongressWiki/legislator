import React from 'react';
import { Story, Meta } from '@storybook/react';

import PresidentSection, { PresidentSectionProps } from './index';

export default {
  title: 'Components/BillsDetailsSection/PresidentSection',
  component: PresidentSection,
} as Meta;

const Template: Story<PresidentSectionProps> = ({ ...args }) => (
  <PresidentSection {...args} />
);

export const Default = Template.bind({});
