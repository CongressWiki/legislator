import React from 'react';
import { Story, Meta } from '@storybook/react';

import ButtonCanvas from './index';

export default {
  title: 'Components/ButtonCanvas',
  component: ButtonCanvas,
} as Meta;

const Template: Story = () => <ButtonCanvas>Hover over here</ButtonCanvas>;

export const Default = Template.bind({});
