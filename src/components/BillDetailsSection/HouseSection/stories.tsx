import React from 'react';
import { Story, Meta } from '@storybook/react';

import HouseSection, { HouseSectionProps } from './index';

export default {
  title: 'Components/HouseSection',
  component: HouseSection,
} as Meta;

const Template: Story = ({ ...args }: HouseSectionProps) => (
  <HouseSection {...args} />
);

export const Default = Template.bind({});
