import React from 'react';
import { Story, Meta } from '@storybook/react';

import SenateSection, { SenateSectionProps } from './index';

export default {
  title: 'Components/SenateSection',
  component: SenateSection,
} as Meta;

const Template: Story = ({ ...args }: SenateSectionProps) => (
  <SenateSection {...args} />
);

export const Default = Template.bind({});
