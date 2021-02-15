import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import BrightTitle from '@components/BrightTitle';

export default {
  title: 'Example/BrightTitle',
  component: BrightTitle,
} as Meta;

const Template: Story = (args) => <BrightTitle {...args} />;

export const Basic = <BrightTitle>test</BrightTitle>;
